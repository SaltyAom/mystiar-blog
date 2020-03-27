import Author from './types'

const author: Author = {
    'SaltyAom': {
        name: 'SaltyAom',
        bio: 'I like to take it easy!',
        profile: {
            normal: '/assets/editor/SaltyAom/lilia.jpg',
            retina: '/assets/editor/SaltyAom/lilia@2x.jpg',
            from: {
                owner: 'Seseren',
                link: 'https://www.pixiv.net/en/users/16274829'
            }
        },
        contact: {
            mail: 'aomkirby@mystiar.com',
            github: 'SaltyAom'
        }
    }
}

export const SaltyAom = author['SaltyAom']
export const getEditors = () => {
    let editors = []

    Object.keys(author).map(key => editors.push(author[key]))

    return editors
}

export default author
