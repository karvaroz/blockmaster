export const fileUpload = async (file) => {
  const url_cloudinary = "https://api.cloudinary.com/v1_1/karvaroz/upload";

  const formData = new FormData();

  formData.append("upload_preset", "blockmaster");
  formData.append("file", file);

  try {

    const resp = await fetch(url_cloudinary, {
      method: "POST",
      body: formData,
    });

    if (resp.ok) {
      const cloudinaryResp = await resp.json();
      return cloudinaryResp.secure_url;
    } else {
      throw new Error("No se pudo subir el archivo");
    }

  } catch (error) {
    console.log(error);
  }
};
