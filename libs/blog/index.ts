export const composeImagePath = (title: string, fileName: string) => `/assets/content/${title}/${fileName}`,
    composeContentPath = (normal: string) => `/content/${normal.split("/")[3]}`