export const composeImagePath = (title: string, fileName: string) =>
        `/assets/content/${title}/${fileName}`,
    composeContentQuery = (normal: string) => normal.split('/')[3],
    composeContentPath = (normal: string) => `/content/${composeContentQuery(normal)}`,
    composeTime = (date: number) => {
        let time = new Date(date),
            day = time.getUTCDate(),
            month = time.getUTCMonth() + 1,
            year = time.getUTCFullYear(),
            hour = time.getUTCHours(),
            minute = time.getUTCMinutes(),
            second = time.getUTCSeconds()

        return `${year}-${month}-${day}T${hour}-${minute}-${second}+07:00`
    },
    composeRetinaPath = (src: string) => {
        let source = src.split('.')

        return `${source[0]}@2x.${source[1]}`
    }
