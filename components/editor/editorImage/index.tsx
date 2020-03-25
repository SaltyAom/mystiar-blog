import EditorImageComponent from './types'

import './editor-image.styl'

const EditorImage: EditorImageComponent = ({
    name,
    profile: { normal, retina, from }
}) => {
    let { owner, link } =
        typeof from !== 'undefined' ? from : { owner: false, link: null }

    return (
        <a id="editor-image" href={owner ? link : "."} rel="noopener norefferer">
            <figure className="photo">
                <img
                    className="image"
                    srcSet={`${normal}, ${retina} 2x`}
                    src={normal}
                    alt={`${name}' profile`}
                    title={`Illustration from ${owner}`}
                />
            </figure>
        </a>
    )
}

export default EditorImage
