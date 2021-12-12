import React, { useState, useEffect, useMemo } from 'react';
import hair_ponytail from '../img/hair_ponytail.png'
import hair_curly from '../img/hair_curly.png'
import beard_gunslinger from '../img/beard_gunslinger.png'
import beard_chestlong from '../img/beard_chest.png'
import beard_short from '../img/beard_short.png'
import male_body from '../img/male_body.png'
import male_head from '../img/male_head.png'

export default function CharacterCreation() {
    const [hair_img, setHair] = useState(hair_ponytail)
    const [beard_img, setBeard] = useState(beard_gunslinger)
    const [selectedHair, setSelectedHair] = useState("no hair")
    const [selectedBeard, setSelectedBeard] = useState("no beard")
    const [gender, setGender] = useState("male")
    const [face, setFace] = useState(male_head)
    const [body, setBody] = useState(male_body)
    const hairstyles = [
        { "id": "h1", "name": "ponytail", "path": hair_ponytail },
        { "id": "h2", "name": "curly", "path": hair_curly }
    ]
    const beardstyles = [
        { "id": "b1", "name": "chest long", "path": beard_chestlong },
        { "id": "b2", "name": "gunslinger", "path": beard_gunslinger },
        { "id": "b3", "name": "short and thick", "path": beard_short }
    ]
    // const hairstyles = useMemo(hairlist, [hairlist])
    // const beardstyles = useMemo(beardlist, [beardlist])
    useEffect(() => {
        if (selectedHair !== "no hair")
            setHair(hairstyles.find(style => style.name === selectedHair).path)
        else
            setHair("")
        if (selectedBeard !== "no beard")
            setBeard(beardstyles.find(style => style.name === selectedBeard).path)
        else
            setBeard("")
        if (gender === "male") {
            setFace(male_head)
            setBody(male_body)
        }
        else {
            setFace(male_head)
            setBody(male_body)
        }
    }, [hairstyles, selectedHair, beardstyles, selectedBeard, gender]);
    // const hairstyles = [
    //     "bald",
    //     "buzz cut",
    //     "pixie cut",
    //     "tonsure",
    //     "mohawk",
    //     "ponytail",
    //     "braided ponytail",
    //     "bald with runic tattoos",
    //     "mohawk with runic tattoos",
    //     "devilock with runic tattoos",
    //     "ringlet?",
    //     "feathered hair"]
    // const beardstyles = [
    //     "stylized mutton chops",
    //     "gold miner/Klondike mutton chops",
    //     "gunslinger beard",
    //     "chin strap",
    //     "chin strap with braids",
    //     "imperial moustache",
    //     "van dyke beard",
    //     "ducktail beard",
    //     "chest long beard",
    //     "waist long beard",
    //     "knee long beard",
    //     "chest long beard with braids",
    //     "waist long beard with braids",
    //     "knee long beard with braids",
    //     "chin curtain",
    //     "garden gnome beard"
    // ]

    return (
        <main>
            <h2>Character Creator</h2>
            <p>You have selected {selectedHair} and {selectedBeard}.</p>
            <select onChange={e => setGender(e.target.value)} >
                <option>male</option>
                <option>female</option>
            </select>
            <select onChange={e => { setSelectedHair(e.target.value); setHair() }}>
                <option>no hair</option>
                {hairstyles.map(style => <option value={style.name} key={style.id}>{style.name}</option>)}
            </select>
            <select onChange={e => { setSelectedBeard(e.target.value); setBeard() }}>
                <option>no beard</option>
                {beardstyles.map(style => <option value={style.name} key={style.id}>{style.name}</option>)}
            </select>

            <div className="characterEditor">
                <div id="face"><img src={face} alt="" /></div>
                <div id="hair"><img src={hair_img} alt="" /></div>
                <div id="beard"><img src={beard_img} alt="" /></div>
                {/* <div id="clothing"><img src={clothing_img} alt="clothes" /></div> */}
                <div id="base"><img src={body} alt="" /></div>
            </div>
        </main>
    );
}