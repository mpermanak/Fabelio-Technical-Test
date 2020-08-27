package javac;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;


public class zipTest {

    public static void main(String[] args) {
        try {
            String zipFilePath = "D:\\test\\test.zip";
            FileOutputStream fos = new FileOutputStream(zipFilePath);
            ZipOutputStream zos = new ZipOutputStream(fos);

            File rootFolder = new File("D:\\test");
            for (File file: rootFolder.listFiles()) {
                writeToZip(file, zos);
                System.out.println("Zipping :" + file.getName());
            }

        } catch (Exception e) {
        }
    }
    private static void writeToZip(File file, ZipOutputStream zos) throws IOException {
        FileInputStream fis = new FileInputStream(file);
        ZipEntry zipEntry = new ZipEntry(file.getAbsolutePath());
        zos.putNextEntry(zipEntry);

        byte[] bytes = new byte[1024];
        int length;
        while ((length = fis.read(bytes)) >= 0) {
            zos.write(bytes, 0, length);
        }

        zos.closeEntry();
        fis.close();
    }
}




