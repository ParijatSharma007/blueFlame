export const MAX_SIZE_FILE = 2000000;
export const SUPPORTED_FILE_TYPE = ["image", "application", "video", "audio"];
export const SUPPORTED_FILE_TYPE_ALL_FORMAT: { [category: string]: string[] } =
  {
    image: ["jpg", "jpeg", "png", "gif", "webp"],
    document: ["doc", "docx", "pdf", "txt"],
    zip: ["zip", "rar"],
    video: ["mp4", "avi", "mov"],
    audio: ["mp3", "wav"]
  };
