import map_img from "../img/map.jpg"
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { OverlayTrigger, Popover, Button } from "react-bootstrap"

function MapItem(name, description, nextId, nextType, navigate) {

    const nav = () => {
        console.log("You chose " + name)
        navigate(`/story/${nextType}/${nextId}`)
    }
    const popover = (
        <Popover id={"popover-" + name}>
            <Popover.Header as="h3">{name}</Popover.Header>
            <Popover.Body>
                {description}
                <button class="btn w-100 mt-3" onClick={nav}>Embark</button>
            </Popover.Body>
        </Popover>
    );
    return (
        <OverlayTrigger rootClose trigger="click" placement="right" overlay={popover}>
            <Button className={"map-button " + name}>{name}</Button>
        </OverlayTrigger>
    )
}

export default function Map() {
    let navigate = useNavigate();
    let params = useParams();
    const [klofdheim, setKlofdheim] = useState(false)
    const [candlehold, setCandlehold] = useState(false)
    const [mapId, setMapId] = useState(params.mapId)
    const [nextId, setNextId] = useState(null)
    const [nextType, setNextType] = useState(null)
    const klofdheimDescription = "This was the first proper town that was built in the tunnels beneath Udalmar, and it is on its way to becoming a thriving hub of miners, fungi farmers, dungeoneers, explores and other sort. The University has one of its more hands-on geological departments here; within it, the geologists, or seismologists as they are more properly called there, study the very movements of the rock and magma. Perhaps you’d find some valuable information there: after all, you fear you might arrive in Rocksound just to find a magma stream in its place."
    const candleholdDescription = "Almost three levels below Udalmar proper, Candlehold is a slightly weird amalgam of militaristic endeavours and geomancy. Candlehold is dominated by its namesake, a roughly cut fort which serves as the quite literal last beacon of dwarven civilization before the more forlorn part of the tunnel system. Candlehold has its own barracks in which the soldiers are trained to be able to fight in nigh lightless conditions of the underneath - now and then the dwarves come across something or someone else living in the domain of the stone, and now and then the meeting doesn’t happen on friendly terms; and then there’s the matter of warfare between dwarven clans and cities, but that’s another story. The geomancers of Candlestine Circle also practice their art in Candlehold; in the depths it is easier to be attuned to the shaping of the stone, it is said."
    useEffect(() => {
        // Fetch story object
        fetch("http://localhost:8080/map/" + mapId)
            .then(data => data.json())
            .then(res => {
                setKlofdheim(res.klofdheim)
                setCandlehold(res.candlehold)
                setNextId(res.next_id)
                setNextType(res.next_type)
            })

    }, [params.mapId, mapId]);
    return (
        <main>
            <h1>The Map of Udalmar</h1>
            <div class="map-container" style={{ backgroundImage: `url(${map_img})` }}>
                {klofdheim && MapItem("klofdheim", klofdheimDescription, nextId, nextType, navigate)}
                {candlehold && MapItem("candlehold", candleholdDescription, nextId, nextType, navigate)}
            </div>
        </main>
    );
}
