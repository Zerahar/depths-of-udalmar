import { useState } from "react";
import { Link, useQueryParam } from "react-router-dom"

export default function Dialogue() {
    // const [nextTextId, setNextTextId] = useState(0)
    // const [textId, setTextId] = useState(1)
    // const [text, setText] = useState("text")
    // const [chapter, setChapter] = useState("chapter")
    // const chapter = useQueryParam < Chapter > ("chapter")
    const text = "text"
    const nextTextId = 0
    return (
        <main>
            {/* <h1>{chapter}</h1> */}
            <p>{text}</p>
            <Link class="next-text-btn btn" to={{
                pathname: "/dialogue",
                state: { textId: nextTextId }
            }}>	&rarr;</Link>
        </main>
    );
}
