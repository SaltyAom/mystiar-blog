import Github from 'components/icon/github'
import Mail from 'components/icon/mail'

import './editor-contact.styl'

const EditorContact = ({ github = '', mail = '' }) => (
    <section id="editor-contact">
        {github ? (
            <a
                className="contact"
                href={`https://github.com/${github}`}
                target="_blank"
                rel="noopener norefferer"
                aria-label="Github link"
            >
                <Github />
                <p className="info">{github}</p>
            </a>
        ) : null}
        {mail ? (
            <a
                className="contact"
                href={`mailto:${mail}`}
                target="_blank"
                rel="noopener norefferer"
                aria-label="Email Link"
            >
                <Mail />
                <p className="info">{mail}</p>
            </a>
        ) : null}
    </section>
)

export default EditorContact
