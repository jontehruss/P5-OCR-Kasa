// Import styles
import "../styles/Tags.scss"



export default function Tags({tags}) {

    // console.log(tags)

    return (
        <ul className="Tags-list">
            {tags.map((tag, index) => (
                <li key={index} className="Tag-item">
                    {tag}
                </li>
            )
            )}
        </ul>
    );
}