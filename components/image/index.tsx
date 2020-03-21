import { Fragment, useState } from 'react'

import ImageComponent from './types'

import './image.styl'

const Image: ImageComponent = ({ src, alt }) => {
    let [isShowingFullImage, showFullImage] = useState(false)

    return (
        <Fragment>
            <figure
                className="standalone-image"
                onClick={() => showFullImage(true)}
            >
                <img className="image" {...{ src, alt }} />
            </figure>
            {isShowingFullImage ? (
                <div
                    className="standalone-overlay"
                    onClick={() => showFullImage(false)}
                >
                    <img
                        className="image"
                        onClick={() => showFullImage(false)}
                        loading="lazy"
                        {...{ src, alt }}
                    />
                </div>
            ) : null}
        </Fragment>
    )
}

export default Image
