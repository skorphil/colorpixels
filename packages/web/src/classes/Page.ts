class Page {
  id: number;
  // imageFile: File;
  imageUrl: string;
  rotation?: 90 | 180 | 270;
  private constructor(id: number, imageUrl: string, rotation?: 90 | 180 | 270) {
    this.id = id;
    // this.imageFile = imageFile;
    this.imageUrl = imageUrl;
    this.rotation = rotation; // Degrees of rotation
  }
  static async create(
    id: number,
    imageUrl: string,
    rotation?: 90 | 180 | 270
  ): Promise<Page | null> {
    if (await isValidPng(imageUrl)) {
      return new Page(id, imageUrl, rotation);
    } else {
      console.error("Invalid PNG image");
      return null; // Return null or handle the error as appropriate
    }
  }
}

export default Page;

async function isValidPng(imgUrl: string) {
  const file = await getFileFromUrl(imgUrl, "image.png");
  if (file.type !== "image/png") {
    throw new Error(
      `Unsupported file type ${file.type}. Only .png is supported.`
    );
  }
  if (await validateImageDimensions(imgUrl)) return true;
}

async function getFileFromUrl(url: string, fileName: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch the file.");
  }

  const blob = await response.blob(); // Convert the response to a Blob
  return new File([blob], fileName, { type: blob.type }); // Create a File object
}

async function validateImageDimensions(imgUrl: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const img = new Image();

    // Set the image source to the provided URL
    img.src = imgUrl.toString();

    img.onload = () => {
      const { width, height } = img;

      // Set your required dimensions
      const maxWidth = 256;
      const maxHeight = 256;

      // Validate dimensions
      if (width <= maxWidth && height <= maxHeight) {
        resolve(true); // Valid dimensions
      } else {
        reject(
          new Error(
            `Image too large: ${width}x${height}. Maximum dimensions are ${maxWidth}x${maxHeight}`
          )
        );
      }
    };

    img.onerror = () => {
      reject(new Error("Failed to load image from URL"));
    };
  });
}
