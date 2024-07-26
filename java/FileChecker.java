import java.io.*;
import java.nio.file.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;
import java.util.stream.*;

public class FileChecker {
  public static void main(String[] args) {
    Path currentDir = Paths.get("").toAbsolutePath();

    try (BufferedWriter writer = Files.newBufferedWriter(Paths.get("output.csv"))) {
      writer.write("Original File,Original Size,Duplicate File,Duplicate Size,Status");
      writer.newLine();

      // Collect files in parallel
      List<Path> files = Files.walk(currentDir, 1)
        .parallel()
        .filter(file -> !Files.isDirectory(file))
        .collect(Collectors.toList());

      // Group files by stripped name in parallel
      Map<String, List<Path>> groupedFiles = files.parallelStream()
        .collect(Collectors.groupingByConcurrent(FileChecker::stripIndex));

      // Process groups in parallel
      groupedFiles.entrySet().parallelStream().forEach(entry -> {
        try {
          List<Path> group = entry.getValue();
          if (group.size() > 1) {
            Path original = getOriginalFile(group);
            long originalSize = Files.size(original);
            for (Path duplicate : group) {
              if (!duplicate.equals(original)) {
                long duplicateSize = Files.size(duplicate);
                String status = (originalSize == duplicateSize) ? "same" : "not same";
                synchronized (writer) {
                  writer.write(String.format("%s,%s,%s,%s,%s",
                    original.getFileName(), formatSize(originalSize),
                    duplicate.getFileName(), formatSize(duplicateSize),
                    status));
                  writer.newLine();
                }
              }
            }
          }
        } catch (IOException e) {
          e.printStackTrace();
        }
      });

    } catch (IOException e) {
      e.printStackTrace();
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
}
