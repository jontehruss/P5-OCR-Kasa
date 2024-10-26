// Import Style
import "../styles/App.css";
import "../styles/Image.css"


export default function Image({ className, src, alt, width, height }) {

    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
        />
    );
};