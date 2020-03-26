import { Fragment, useState } from 'react'

import { composeRetinaPath } from 'libs/blog'

import ImageComponent from './types'

import './image.styl'

const Image: ImageComponent = ({ src, alt, no2x = false }) => {
    let [isShowingFullImage, showFullImage] = useState(false)

    return (
        <Fragment>
            <img
                className="standalone-image"
                onClick={() => showFullImage(true)}
                srcSet={!no2x ? `${src} 640w, ${composeRetinaPath(src)} 1280w` : src}
                {...{ src, alt }}
                loading="lazy"
            />
            {isShowingFullImage ? (
                <div
                    className="standalone-overlay"
                    onClick={() => showFullImage(false)}
                >
                    <img
                        className="image"
                        onClick={() => showFullImage(false)}
                        loading="lazy"
                        src={!no2x ? composeRetinaPath(src) : src}
                        {...{ alt }}
                    />
                </div>
            ) : null}
        </Fragment>
    )
}

export default Image
