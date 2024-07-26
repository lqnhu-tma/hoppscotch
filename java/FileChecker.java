import java.math.BigDecimal;

import java.io.*;
import java.nio.file.*;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.*;
import java.util.regex.*;
import java.util.stream.Collectors;

public class FileChecker {
  public static void main(String[] args) {
    Path currentDir = Paths.get("").toAbsolutePath();

    try (BufferedWriter writer = Files.newBufferedWriter(Paths.get("output.csv"))) {
      writer.write("Original File,Original Size,Duplicate File,Duplicate Size,Status");
      writer.newLine();

      List<Path> files = Files.walk(currentDir, 1)
        .filter(file -> !Files.isDirectory(file))
        .collect(Collectors.toList());

      Map<String, List<Path>> groupedFiles = files.stream()
        .collect(Collectors.groupingBy(FileChecker::stripIndex));

      for (Map.Entry<String, List<Path>> entry : groupedFiles.entrySet()) {
        List<Path> group = entry.getValue();
        if (group.size() > 1) {
          Path original = group.get(0);
          long originalSize = Files.size(original);
          for (Path duplicate : group.subList(1, group.size())) {
            long duplicateSize = Files.size(duplicate);
            String status = (originalSize == duplicateSize) ? "same" : "not same";
            writer.write(String.format("%s,%dkb,%s,%dkb,%s",
              original.getFileName(), originalSize / 1024,
              duplicate.getFileName(), duplicateSize / 1024,
              status));
            writer.newLine();
          }
        }
      }
    } catch (IOException e) {
      e.printStackTrace();
    }
  }

  private static String stripIndex(Path path) {
    String fileName = path.getFileName().toString();
    return fileName.replaceAll(" \\(\\d+\\)", "");
  }
}

