import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Text() {
    let params = useParams();
    const [nextTextId, setNextTextId] = useState(null)
    const [textId, setTextId] = useState(params.textId)
    const [text, setText] = useState("")
    const [chapter, setChapter] = useState("")
    const [nextType, setNextType] = useState("text")
    useEffect(() => {
        // Fetch story object
        fetch("http://localhost:8080/text/" + textId)
            .then(data => data.json())
            .then(res => {
                setText(res.text)
                setTextId(params.textId)
                setChapter(res.chapter)
                setNextTextId(res.next_id)
                setNextType(res.next_type)
            })

    }, [params.textId, textId]);

    return (
        <main>
            <h1>{chapter}</h1>
            <p>{text}</p>
            <Link class="btn btn-next" to={`/story/${nextType}/${nextTextId}`}> 	<i class="fas fa-arrow-right"></i></Link>
        </main>
    );
}
