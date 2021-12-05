import React, { useState } from 'react';

export default function CharacterCreation() {
    const [hair, setHair] = useState("no hair")
    const [beard, setBeard] = useState("no beard")
    const hairstyles = [
        "bald",
        "buzz cut",
        "pixie cut",
        "tonsure",
        "mohawk",
        "ponytail",
        "braided ponytail",
        "bald with runic tattoos",
        "mohawk with runic tattoos",
        "devilock with runic tattoos",
        "ringlet?",
        "feathered hair"]
    const beardstyles = [
        "stylized mutton chops",
        "gold miner/Klondike mutton chops",
        "gunslinger beard",
        "chin strap",
        "chin strap with braids",
        "imperial moustache",
        "van dyke beard",
        "ducktail beard",
        "chest long beard",
        "waist long beard",
        "knee long beard",
        "chest long beard with braids",
        "waist long beard with braids",
        "knee long beard with braids",
        "chin curtain",
        "garden gnome beard"
    ]

    return (
        <main>
            <h2>Character Creator</h2>
            <p>You have selected {hair} and {beard}.</p>
            <select onChange={e => setHair(e.target.value)}>
                {hairstyles.map(value => <option value={value} key={value}>{value}</option>)}
            </select>
            <select onChange={e => setBeard(e.target.value)}>
                {beardstyles.map(value => <option value={value} key={value}>{value}</option>)}
            </select>

            <div className="characterEditor">
                <div id="face">face</div>
                <div id="hair">hair</div>
                <div id="beard">beard</div>
                <div id="clothing">clothing</div>
                <div id="base">base</div>
            </div>
        </main>
    );
}