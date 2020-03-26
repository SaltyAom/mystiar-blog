import './tags.styl'

const Tags = ({ tags }) => (
    <section id="tags">
        {tags.map(tag => (
            <h6 key={tag} className="tag">{tag}</h6>
        ))}
    </section>
)

export default Tags
