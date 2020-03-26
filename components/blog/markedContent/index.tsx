import Content from 'components/editor/content'

import EditorContentComponent from 'components/editor/content/types'

import './marked-content.styl'

const MarkedContent: EditorContentComponent = (props) => (
    <section className="marked-content">
        <Content {...props} />
    </section>
)

export default MarkedContent