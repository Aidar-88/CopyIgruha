import './post.css'

export default function Post({ title, description }) {
    return (
        <div className="post">
            <li>
                <p>
                    <strong>{title} </strong>{description}
                </p>
            </li>
        </div>
    )
}