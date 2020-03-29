import Link from 'next/link'

import { composeTime, composeContentPath, composeContentQuery } from 'libs/blog'

import FeaturedComponent from './types'

import './featured.styl'

const Featured: FeaturedComponent = ({
    meta: {
        title,
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
            <a id="featured-content">
                <article className="article">
                    <figure className="cover">
                        <div className="overlay" />
                        <img
                            className="image"
                            srcSet={`${normal} 640w, ${retina} 1280w`}
                            src={retina}
                            alt={alt}
                        />
                    </figure>
                    <section className="content">
                        <h2 className="title">{title}</h2>
                        <h4 className="author">— {name}</h4>
                        <time className="time" dateTime={composeTime(update)}>
                            {new Date(update).toLocaleDateString()}
                        </time>
                    </section>
                </article>
            </a>
        </Link>
    )
}

export default Featured
