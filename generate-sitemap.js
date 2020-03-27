const { readFileSync, writeFile } = require('fs'),
    { resolve } = require('path')

const host = 'https://blog.mystiar.com'

const getKey = (path, prepend) => {
    let keys = readFileSync(resolve(path), { encoding: 'utf8' })
    keys = keys.match(/(?:\')(?:.*)(?:\'\:)/g)
    return keys
        .map(key => key.replace(/\'|\:/g, ''))
        .map(key => `${host}${prepend}${key}`)
}

const blogs = getKey('./blog/index.tsx', '/content/'),
    editors = getKey('./blog/author/index.ts', '/editor/')

const urls = [...blogs, ...editors]

let content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
<url><loc>https://blog.mystiar.com/</loc></url>
${urls.map(url => `<url><loc>${url}</loc></url>\n`)}
</urlset>`.replace(/\,/g, "")

writeFile(resolve('./public/sitemap.xml'), content, err => {
    if(null)
        console.log(err)
})
