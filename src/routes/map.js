import map_img from "../img/map.jpg"
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { OverlayTrigger, Popover, Button } from "react-bootstrap"

function mapItem(name, description) {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">{name}</Popover.Header>
            <Popover.Body>
                {description}
                <Button>Embark</Button>
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
    let params = useParams();
    const [klofdheim, setKlofdheim] = useState(false)
    const [candlehold, setCandlehold] = useState(false)
    const [mapId, setMapId] = useState(params.mapId)
    const klofdheimDescription = "This was the first proper town that was built in the tunnels beneath Udalmar, and it is on its way to becoming a thriving hub of miners, fungi farmers, dungeoneers, explores and other sort. The University has one of its more hands-on geological departments here; within it, the geologists, or seismologists as they are more properly called there, study the very movements of the rock and magma. Perhaps you’d find some valuable information there: after all, you fear you might arrive in Rocksound just to find a magma stream in its place."
    const candleholdDescription = "Almost three levels below Udalmar proper, Candlehold is a slightly weird amalgam of militaristic endeavours and geomancy. Candlehold is dominated by its namesake, a roughly cut fort which serves as the quite literal last beacon of dwarven civilization before the more forlorn part of the tunnel system. Candlehold has its own barracks in which the soldiers are trained to be able to fight in nigh lightless conditions of the underneath - now and then the dwarves come across something or someone else living in the domain of the stone, and now and then the meeting doesn’t happen on friendly terms; and then there’s the matter of warfare between dwarven clans and cities, but that’s another story. The geomancers of Candlestine Circle also practice their art in Candlehold; in the depths it is easier to be attuned to the shaping of the stone, it is said."
    useEffect(() => {
        // Fetch story object
        fetch("http://localhost:8080/map/" + mapId)
            .then(data => data.json())
            .then(res => {
                setKlofdheim(res.klofdheim)
                setCandlehold(res.candlehold)
            })

    });
    return (
        <main>
            <h1>The Map of Uldamar</h1>
            <div class="map-container" style={{ backgroundImage: `url(${map_img})` }}>
                {klofdheim && mapItem("klofdheim", klofdheimDescription)}
                {candlehold && mapItem("candlehold", candleholdDescription)}
            </div>
        </main>
    );
}
