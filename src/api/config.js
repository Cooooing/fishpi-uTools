export const BASE_URL = "https://fishpi.cn";

export const API_CONFIG = {
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
};

// 文件上传配置
export const UPLOAD_CONFIG = {
  maxSize: 20 * 1024 * 1024, // 20MB
  allowedTypes: ["jpg", "jpeg", "png", "gif", "mp4"],
};
