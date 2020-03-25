type AuthorList = "SaltyAom"

export interface AuthorImage {
    normal: string
    retina: string
    from?: ProfileCredit
}

interface ProfileCredit {
    owner: string
    link: string
}

interface AuthorContact {
    mail: string
    github: string
}

type Author = Record<AuthorList, {
    name: string
    bio: string
    profile: AuthorImage
    // cover: AuthorImage
    contact: AuthorContact
}>
export default Author