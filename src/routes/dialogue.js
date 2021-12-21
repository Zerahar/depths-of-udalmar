import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import placeholder from '../img/dialoguePlaceholder.jpg'

export default function Dialogue() {
    let params = useParams();
    const [nextTextId, setNextTextId] = useState(null)
    const [textId, setTextId] = useState(params.dialogueId)
    const [text, setText] = useState("")
    const [chapter, setChapter] = useState("")
    const [nextType, setNextType] = useState("text")
    useEffect(() => {
        // Fetch story object
        fetch("http://localhost:8080/text/" + textId)
            .then(data => data.json())
            .then(res => {
                setText(res.text)
                setChapter(res.chapter)
                setNextTextId(res.next_id)
                setNextType(res.next_type)
            })

    });
    return (
        <main>
            <h1>{chapter}</h1>
            <div className="dialogue-container" style={{ backgroundImage: `url(${placeholder})` }}>
                <div className="dialogue-content"> <p dangerouslySetInnerHTML={{ __html: text }}></p>
                    <Link class="btn btn-next" to={`/story/${nextType}/${nextTextId}`}>&rarr;</Link>
                </div></div>
        </main>
    );
}