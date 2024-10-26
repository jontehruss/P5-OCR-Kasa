// Import styles
import "../styles/Tags.css"


export default function Tags({ tags }) {
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
};