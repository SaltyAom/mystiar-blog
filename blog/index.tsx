import Preact3KBofReact from './content/preact-3kb-of-react.mdx'
import IntroductionToArkflows from './content/introduction-to-arkflows.mdx'

import { SaltyAom } from './author'

import { Blog } from './types'
import { composeImagePath } from 'libs/blog'

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
    }
}

export default blog
