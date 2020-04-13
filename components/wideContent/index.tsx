import Link from 'next/link'

import { composeTime, composeContentPath, composeContentQuery } from 'libs/blog'

import WideContentComponent from './types'

import './wide-content.styl'

const WideContent: WideContentComponent = ({
    meta: {
        title,
        description,
        cover: { normal, retina, alt },
        author: { name },
        date: { update }
    }
}) => {
    return (
        <Link
            href={{
                pathname: '/content/[content]',
                query: { content: composeContentQuery(normal) }
            }}
            as={composeContentPath(normal)}
        >
            <article className="wide-content">
                <figure className="cover">
                    <img
                        className="image"
                        srcSet={`${normal} 640w, ${retina} 1280w`}
                        src={retina}
                        alt={alt}
                    />
                </figure>
                <section className="body">
                    <h2 className="title">{title}</h2>
                    <p className="detail">{description}</p>
                    <time className="time" dateTime={composeTime(update)}>
                        {new Date(update).toLocaleDateString()}
                    </time>
                    <h4 className="author">— {name}</h4>
                </section>
            </article>
        </Link>
    )
}

export default WideContent
