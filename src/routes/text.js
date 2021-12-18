import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Text() {
    let params = useParams();
    const [nextTextId, setNextTextId] = useState(null)
    const [textId, setTextId] = useState(null)
    const [text, setText] = useState("")
    const [chapter, setChapter] = useState("")
    useEffect(() => {
        // Fetch story object
        setText("This is story")
        setChapter("This is header")
        setNextTextId(1)
    });
    return (
        <main>
            <h1>{chapter}</h1>
            <p>{text}</p>
            <Link class="btn btn-next" to={`/story/text/${nextTextId}`}>&rarr;</Link>
        </main>
    );
}
