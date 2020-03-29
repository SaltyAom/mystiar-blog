import Preact3KBofReact from './content/preact-3kb-of-react.mdx'
import IntroductionToArkflows from './content/introduction-to-arkflows.mdx'
import IntroductionToFirestore from './content/introduction-to-firestore.mdx'
import IntroductionToFirestoreCode from './content/introduction-to-firestore-code.mdx'
import GetUserMedia from './content/get-user-media.mdx'
import AutoCompleteNeverBreakWeb from './content/autocomplete-never-break-web.mdx'

import { composeImagePath } from 'libs/blog'

import { SaltyAom } from './author'

import { Blog } from './types'

const blog: Blog = {
    'preact-3kb-of-react': {
        meta: {
            title: 'Preact, สั้นๆ ว่า React ขนาด 3KB',
            description:
                'React.js, หนึ่งใน Frontend JavaScript Library ที่ใช้งานเยอะมากที่สุด อันหนึ่งเลยก็ว่าได้ ด้วยความที่ React.js มีประสิทธิภาพที่ดีมาก จากการใช้ Virtual DOM, Eco System ที่กว้างๆ มากๆ พัฒนาขึ้นโดย Facebook และใช้ในบริษัทใหญ่ๆ หลายที่อย่าง Netflix, Dropbox และ Facebook เลยไม่แปลกเลยที่จะเป็นที่นิยมมาก',
            cover: {
                normal: composeImagePath(
                    'preact-3kb-of-react',
                    'preact-3kb-of-react.jpg'
                ),
                retina: composeImagePath(
                    'preact-3kb-of-react',
                    'preact-3kb-of-react@2x.jpg'
                ),
                alt: 'Preact, สั้นๆ ว่า React ขนาด 3KB'
            },
            author: SaltyAom,
            date: {
                written: new Date('26 March 2020 13:36').getTime(),
                update: new Date('26 March 2020 13:36').getTime()
            },
            tags: ['Preact', 'React alternative', 'Preact คือ', 'Preact อธิบาย']
        },
        Content: Preact3KBofReact
    },
    'introduction-to-arkflows': {
        meta: {
            title:
                'Arkflows, State Manager ขนาด 1KB ที่ง่ายพอๆ กับ Localstorage',
            description:
                'State Manager ใน View Library ส่วนใหญ่สร้างขึ้นมาค่อนข้างยากต่อการ maintain และการ setup ก็ค่อนข้างที่จะยุ่งยากเอาซะมากๆ แม้ว่าจะดีขนาดไหน แต่การทำให้มันเรียบง่ายก็มักจะเป็นปัญหาอยู่ตลอดๆ จึงเป็นจุดกำเนิดของ Arkflows',
            cover: {
                normal: composeImagePath(
                    'introduction-to-arkflows',
                    'introduction-to-arkflows.jpg'
                ),
                retina: composeImagePath(
                    'introduction-to-arkflows',
                    'introduction-to-arkflows@2x.jpg'
                ),
                alt: 'Introduction to Arkflows'
            },
            author: SaltyAom,
            date: {
                written: new Date('26 March 2020 13:36').getTime(),
                update: new Date('26 March 2020 13:36').getTime()
            },
            tags: [
                'React storage',
                'React store library',
                'Redux alternative',
                'React share state'
            ]
        },
        Content: IntroductionToArkflows
    },
    'introduction-to-firestore': {
        meta: {
            title: 'เริ่มต้นเขียน Firestore จาก 0 ด้วย JavaScript กันดีกว่า~',
            description:
                'พอพูดถึง Firebase หลายคนก็คงจะนึกถึงอะไรที่ ยากๆ แต่ความจริงแล้ว Firebase เนี่ย ทำให้ชีวิตใครหลายคนง่ายขึ้นมากๆ, เราสามารถที่จะทำ Database แบบ Realtime ได้ง่ายมาก และ ยังทำ Authentication ได้โดยที่เราไม่จำเป็นต้องเขียน Backend และ ทำ Database ขึ้นเองด้วยซ้ำ!',
            cover: {
                normal: composeImagePath(
                    'introduction-to-firestore',
                    'introduction-to-firestore.jpg'
                ),
                retina: composeImagePath(
                    'introduction-to-firestore',
                    'introduction-to-firestore@2x.jpg'
                ),
                alt: 'Introduction to Firestore From Zero with JavaScript'
            },
            author: SaltyAom,
            date: {
                written: new Date('19 February 2019 18:45').getTime(),
                update: new Date('19 February 2019 18:45').getTime()
            },
            tags: [
                'Firebase JavaScript',
                'Firestore JavaScirpt',
                'เริ่มเขียน Firebase',
                'วิธีใช้ Firebase',
                'สอน Firebase',
                'Firestore จาก 0',
                'วิธีใช้ Firestore'
            ]
        },
        Content: IntroductionToFirestore
    },
    'introduction-to-firestore-code': {
        meta: {
            title:
                'เริ่มต้นเขียนคำสั่ง Firestore จาก 0 ด้วย JavaScript กันดีกว่า~',
            description:
                'พอพูดถึง Firebase หลายคนก็คงจะนึกถึงอะไรที่ ยากๆ แต่ความจริงแล้ว Firebase เนี่ย ทำให้ชีวิตใครหลายคนง่ายขึ้นมากๆ, เราสามารถที่จะทำ Database แบบ Realtime ได้ง่ายมาก และ ยังทำ Authentication ได้โดยที่เราไม่จำเป็นต้องเขียน Backend และ ทำ Database ขึ้นเองด้วยซ้ำ!',
            cover: {
                normal: composeImagePath(
                    'introduction-to-firestore-code',
                    'introduction-to-firestore-code.jpg'
                ),
                retina: composeImagePath(
                    'introduction-to-firestore-code',
                    'introduction-to-firestore-code@2x.jpg'
                ),
                alt: 'Introduction to Firestore From Zero with JavaScript'
            },
            author: SaltyAom,
            date: {
                written: new Date('19 February 2019 18:45').getTime(),
                update: new Date('19 February 2019 18:45').getTime()
            },
            tags: [
                'Firebase JavaScript',
                'Firestore JavaScirpt',
                'เริ่มเขียน Firebase',
                'วิธีใช้ Firebase',
                'สอน Firebase',
                'Firestore จาก 0',
                'วิธีใช้ Firestore'
            ]
        },
        Content: IntroductionToFirestoreCode
    },
    'get-user-media': {
        meta: {
            title: 'มาลองถ่ายรูปบนเว็บไซต์กันดีกว่า~',
            description:
                'Progressive Web App ไอเดียที่ผลักดันความสามารถของเว็บให้เป็นได้มากกว่าแค่เว็บ ทุกวันนี้มีเว็บจำนวนไม่น้อยที่ทำหน้าที่เป็นเว็บและแอพไปในตัวเช่น FaceBook Lite, Twitter Lite, Starbuck ความสามารถต่างๆ ก็เพิ่มขึ้นทุกวัน จนสามารถที่จะขอสิทธิ์ต่างๆ เพื่อทำหน้าที่บางอย่างแทน Native App ได้ รวมถึง... การถ่ายรูปและวิดีโอด้วย',
            cover: {
                normal: composeImagePath(
                    'get-user-media',
                    'get-user-media.jpg'
                ),
                retina: composeImagePath(
                    'get-user-media',
                    'get-user-media@2x.jpg'
                ),
                alt: 'มาลองถ่ายรูปกันบนเว็บไซต์กันดีกว่า~'
            },
            author: SaltyAom,
            date: {
                written: new Date('27 March 2020 13:49').getTime(),
                update: new Date('27 March 2020 13:49').getTime()
            },
            tags: [
                'ถ่ายรูปด้วยเว็บไซต์',
                'ถ่ายรูป javascript',
                'อัดวิดีโอ javascript',
                'get user media',
                'camera javascript',
                'camera.js'
            ]
        },
        Content: GetUserMedia
    },
    'autocomplete-never-break-web': {
        meta: {
            title: 'Autocomplete อย่างเดียวไม่เคยทำให้เว็บพังได้',
            description:
                'autocomplete เป็นหนึ่งใน attribute ในภาษา HTML (ไม่ใช่ C) โดยมีหน้าที่ในการ "autocomplete" ช่องใส่ตัวอักษรให้โดยอัตโนมัติ ถ้าจะถามว่า autocomplete อย่างเดียวสามารถพังเว็บได้ไหม? ง่ายๆ ก็คือเป็นไปไม่ได้เลย',
            cover: {
                normal: composeImagePath(
                    'autocomplete-never-break-web',
                    'autocomplete-never-break-web.png'
                ),
                retina: composeImagePath(
                    'autocomplete-never-break-web',
                    'autocomplete-never-break-web@2x.png'
                ),
                alt: 'Autocomplete Never Break Web'
            },
            author: SaltyAom,
            date: {
                written: new Date('29 March 2020 12:55').getTime(),
                update: new Date('29 March 2020 12:55').getTime()
            },
            tags: [
                'autocomplete',
                'html',
                'html autocomplete',
                'autocomplete พังเว็บ'
            ]
        },
        Content: AutoCompleteNeverBreakWeb
    }
}

export const getLatestBlogMeta = () =>
        blog[Object.keys(blog)[Object.keys(blog).length - 1]].meta,
    getNewBlogsMeta = (cursor: number = 0, limit: number = 6) => {
        let newBlogs = []

        Object.keys(blog)
            .reverse()
            .some((key, index) => {
                if (index >= cursor + limit) return true

                if (index >= cursor)
                    newBlogs.push(Object.assign({}, blog[key].meta))
            })

        return newBlogs
    },
    getBlog = name => Object.assign({}, blog[name])

export default blog
