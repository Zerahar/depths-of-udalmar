import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Choice() {
    let params = useParams();
    let navigate = useNavigate();
    const userId = 0
    const [choiceId, setChoiceId] = useState(params.choiceId)
    const [options, setOptions] = useState([])
    const [chapter, setChapter] = useState("")
    useEffect(() => {
        // Fetch story object
        fetch("http://localhost:8080/choice/" + choiceId)
            .then(data => data.json())
            .then(res => {
                setOptions(res.options)
                setChoiceId(params.choiceId)
                setChapter(res.chapter)
            })

    }, [params.choiceId, choiceId]);

    return (
        <main>
            <h1>{chapter}</h1>
            {options.map(option =>
                Option(option.text, option.option_id, userId, choiceId, option.is_special, navigate, option.next_type, option.next_id)
            )}
        </main>
    );
}

function Option(text, optionId, userId, choiceId, isSpecial, navigate, nextType, nextId) {
    const saveChoice = () => {
        fetch("http://localhost:8080/choice/" + userId, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                choiceId,
                optionId
            })
        })
            .then(res => navigate(`/story/${nextType}/${nextId}`))
    }
    return (
        <button onClick={saveChoice} className={isSpecial ? "btn w-100 mt-3 choice-btn choice-special" : "btn w-100 mt-3 choice-btn"}>{text}</button>
    )
}
