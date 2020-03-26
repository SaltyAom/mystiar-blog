export const composeImagePath = (title: string, fileName: string) => `/assets/content/${title}/${fileName}`,
    composeContentPath = (normal: string) => `/content/${normal.split("/")[3]}`,
    composeTime = (date: number) => {
        let time = new Date(date),
            day = time.getUTCDate(),
            month = time.getUTCMonth() + 1,
            year = time.getUTCFullYear(),
            hour = time.getUTCHours(),
            minute = time.getUTCMinutes(),
            second = time.getUTCSeconds()

        return(`${year}-${month}-${day}T${hour}-${minute}-${second}+07:00`)
    }