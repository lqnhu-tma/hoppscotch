import java.io.*;
import java.nio.file.*;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;
import java.util.stream.*;

public class FileChecker {
  public static void main(String[] args) {
    Path currentDir = Paths.get("").toAbsolutePath();
    Path duplicatedDir = currentDir.resolve("duplicated");

    // Create the "duplicated" directory if it doesn't exist
    try {
      Files.createDirectories(duplicatedDir);
    } catch (IOException e) {
      e.printStackTrace();
      return;
    }

    // Initialize writers for CSV files
    try (
      BufferedWriter nameSortedWriter = Files.newBufferedWriter(currentDir.resolve("duplicated_sort_by_name.csv"));
      BufferedWriter dateSortedWriter = Files.newBufferedWriter(currentDir.resolve("duplicated_sort_by_date.csv"));
      BufferedWriter nameSortedDifferentWriter = Files.newBufferedWriter(currentDir.resolve("duplicated_name_sort_by_name.csv"));
      BufferedWriter dateSortedDifferentWriter = Files.newBufferedWriter(currentDir.resolve("duplicated_name_sort_by_date.csv"))
    ) {
      // Write headers to CSV files
      writeHeader(nameSortedWriter);
      writeHeader(dateSortedWriter);
      writeHeader(nameSortedDifferentWriter);
      writeHeader(dateSortedDifferentWriter);

      // Collect files in parallel
      List<Path> files = Files.walk(currentDir, 1)
        .parallel()
        .filter(file -> !Files.isDirectory(file))
        .collect(Collectors.toList());

      // Group files by stripped name in parallel
      Map<String, List<Path>> groupedFiles = files.parallelStream()
        .collect(Collectors.groupingByConcurrent(FileChecker::stripIndex));

      // Create lists to hold entries for sorting
      List<FileEntry> duplicates = new ArrayList<>();
      List<FileEntry> differentFiles = new ArrayList<>();

      // Process groups in parallel
      groupedFiles.entrySet().parallelStream().forEach(entry -> {
        try {
          List<Path> group = entry.getValue();
          if (group.size() > 1) {
            Path original = getOriginalFile(group);
            long originalSize = Files.size(original);
            String originalCreationTime = getCreationTime(original);
            for (Path duplicate : group) {
              if (!duplicate.equals(original)) {
                long duplicateSize = Files.size(duplicate);
                String duplicateCreationTime = getCreationTime(duplicate);
                String status = (originalSize == duplicateSize) ? "same" : "not same";

                // Create a FileEntry object
                FileEntry fileEntry = new FileEntry(duplicate, duplicateSize, duplicateCreationTime, original, originalSize, originalCreationTime, status);
                if ("same".equals(status)) {
                  synchronized (nameSortedWriter) {
                    nameSortedWriter.write(fileEntry.toCsvLine());
                    nameSortedWriter.newLine();
                  }
                  synchronized (dateSortedWriter) {
                    dateSortedWriter.write(fileEntry.toCsvLine());
                    dateSortedWriter.newLine();
                  }
                  // Add to list for later sorting
                  duplicates.add(fileEntry);
                } else {
                  synchronized (nameSortedDifferentWriter) {
                    nameSortedDifferentWriter.write(fileEntry.toCsvLine());
                    nameSortedDifferentWriter.newLine();
                  }
                  synchronized (dateSortedDifferentWriter) {
                    dateSortedDifferentWriter.write(fileEntry.toCsvLine());
                    dateSortedDifferentWriter.newLine();
                  }
                  // Add to list for later sorting
                  differentFiles.add(fileEntry);
                }

                // Move duplicate to "duplicated" folder if it's a duplicate
                if ("same".equals(status)) {
                  moveFile(duplicate, duplicatedDir);
                }
              }
            }
          }
        } catch (IOException e) {
          e.printStackTrace();
        }
      });

      // Sort and write to CSV files
      writeSortedEntries(currentDir.resolve("duplicated_sort_by_name.csv"), duplicates, true);
      writeSortedEntries(currentDir.resolve("duplicated_sort_by_date.csv"), duplicates, false);
      writeSortedEntries(currentDir.resolve("duplicated_name_sort_by_name.csv"), differentFiles, true);
      writeSortedEntries(currentDir.resolve("duplicated_name_sort_by_date.csv"), differentFiles, false);

    } catch (IOException e) {
      e.printStackTrace();
    }
  }

  private static void writeHeader(BufferedWriter writer) throws IOException {
    writer.write("Duplicate File,Duplicate Size,Created At,Original File,Original Size,Created At,Status");
    writer.newLine();
  }

  private static void writeSortedEntries(Path filePath, List<FileEntry> entries, boolean sortByName) throws IOException {
    try (BufferedWriter writer = Files.newBufferedWriter(filePath)) {
      writeHeader(writer);
      entries.stream()
        .sorted(sortByName ? Comparator.comparing(FileEntry::getDuplicateFileName) : Comparator.comparing(FileEntry::getDuplicateCreationTime))
        .forEach(entry -> {
          try {
            writer.write(entry.toCsvLine());
            writer.newLine();
          } catch (IOException e) {
            e.printStackTrace();
          }
        });
    }
  }

  private static String stripIndex(Path path) {
    String fileName = path.getFileName().toString();
    return fileName.replaceAll(" ?\\(\\d+\\)", "");
  }

  private static Path getOriginalFile(List<Path> group) {
    return group.stream()
      .filter(path -> !path.getFileName().toString().matches(".* ?\\(\\d+\\).*"))
      .findFirst()
      .orElse(group.get(0));
  }

  private static String formatSize(long sizeInBytes) {
    if (sizeInBytes < 1024) {
      return sizeInBytes + "b";
    } else {
      return String.format("%.1fkb", sizeInBytes / 1024.0);
    }
  }

  private static String getCreationTime(Path path) {
    try {
      BasicFileAttributes attrs = Files.readAttributes(path, BasicFileAttributes.class);
      return attrs.creationTime().toString();
    } catch (IOException e) {
      e.printStackTrace();
      return "unknown";
    }
  }

  private static void moveFile(Path file, Path targetDir) {
    Path targetPath = targetDir.resolve(file.getFileName());
    try {
      Files.move(file, targetPath, StandardCopyOption.REPLACE_EXISTING);
    } catch (IOException e) {
      e.printStackTrace();
    }
  }

  private static class FileEntry {
    private final Path duplicateFile;
    private final long duplicateSize;
    private final String duplicateCreationTime;
    private final Path originalFile;
    private final long originalSize;
    private final String originalCreationTime;
    private final String status;

    public FileEntry(Path duplicateFile, long duplicateSize, String duplicateCreationTime, Path originalFile, long originalSize, String originalCreationTime, String status) {
      this.duplicateFile = duplicateFile;
      this.duplicateSize = duplicateSize;
      this.duplicateCreationTime = duplicateCreationTime;
      this.originalFile = originalFile;
      this.originalSize = originalSize;
      this.originalCreationTime = originalCreationTime;
      this.status = status;
    }

    public String toCsvLine() {
      return String.format("%s,%s,%s,%s,%s,%s,%s",
        duplicateFile.getFileName(), formatSize(duplicateSize), duplicateCreationTime,
        originalFile.getFileName(), formatSize(originalSize), originalCreationTime,
        status);
    }

    public String getDuplicateFileName() {
      return duplicateFile.getFileName().toString();
    }

    public String getDuplicateCreationTime() {
      return duplicateCreationTime;
    }
  }
}
