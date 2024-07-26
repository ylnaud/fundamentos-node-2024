import fse from "fs-extra";
import sharp from "sharp";

const inputFolderCode = "code";
const outputFolderDocs = "docs";
const targetWidth = 1920; // Debe ser un número, no una cadena

const generateNewFilename = (extension) => {
  const now = new Date();
  const timestamp = now.toISOString().replace(/[-:.]/g, '');
  return `fotos_thyrone_${timestamp}.${extension}`;
};

const processImg = async () => {
  try {
    const files = await fse.readdir(inputFolderCode);
    for (const file of files) {
      const inputPath = `${inputFolderCode}/${file}`;
      const extension = file.split('.').pop(); // Obtener la extensión del archivo
      const newFilename = generateNewFilename(extension);
      const outputPath = `${outputFolderDocs}/${newFilename}`;
      
      // Redimensionar la imagen
      await sharp(inputPath).resize(targetWidth).toFile(outputPath);

      // Importar dinámicamente los módulos de imagemin y sus plugins
      const imagemin = (await import("imagemin")).default;
      const imageminJpegtran = (await import("imagemin-jpegtran")).default;
      const imageminPngquant = (await import("imagemin-pngquant")).default;
      // const imageminSvgo = (await import("imagemin-svgo")).default;
      // const imageminWebp = (await import("imagemin-webp")).default;
      // const imageminGifsicle = (await import("imagemin-gifsicle")).default;

      // Optimizar la imagen
      await imagemin([outputPath], {
        destination: outputFolderDocs,
        plugins: [
          imageminJpegtran({ quality: 80 }), // Comprimir imagen jpg con calidad del 80
          imageminPngquant({ quality: 80 }), // Comprimir imagen png
          // imageminSvgo(), // Comprimir imagen svg
          // imageminWebp({ quality: 80 }), // Comprimir imagen webp
          // imageminGifsicle() // Comprimir imagen gif
        ]
      });

      console.log(`Has terminado con éxito el proceso de optimizar y renombrar tus imágenes a ${newFilename}`);
    }
  } catch (error) {
    console.error(error);
  }
};

processImg();
