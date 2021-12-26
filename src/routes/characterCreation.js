import React, { useState, useEffect, useMemo } from 'react';
import { Row, Col } from "react-bootstrap"
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
    const [playerClass, setPlayerClass] = useState("Berserker")
    const [playerClan, setPlayerClan] = useState("Clan Wulfhammer")
    const [clanDescription, setClanDescription] = useState("A clan notable of its grizzled hunters, frontiersmen and deepsdwellers")
    const [classDescription, setClassDescription] = useState("You are home in a battlefield spanning from one horizon to another, in the middle of the most heated fray. The enemy fears your frenzy and the friend stays out of your way. Clad in little more than scraps of fur you charge into battle far ahead of the other footsoldiers. By training, your strength is already immense but the concoctions brewed from poisonous mushrooms and mysterious herbs only you know inspire ferociousness, frenzy and strenght in you even further. Anything can be used as a weapon, and often in the close combat your feet, fists and teeth are as essential as any sword or axe. Despite of this, you are a connoisseur of weaponry; many a heirloom warhammer and trophy cutlass fill your halls, and every new battle is an opportunity to bring out your favourite tool of war, whatever that may be.")
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
        switch (playerClass) {
            case "Berserker": setClassDescription("You are home in a battlefield spanning from one horizon to another, in the middle of the most heated fray. The enemy fears your frenzy and the friend stays out of your way. Clad in little more than scraps of fur you charge into battle far ahead of the other footsoldiers. By training, your strength is already immense but the concoctions brewed from poisonous mushrooms and mysterious herbs only you know inspire ferociousness, frenzy and strenght in you even further. Anything can be used as a weapon, and often in the close combat your feet, fists and teeth are as essential as any sword or axe. Despite of this, you are a connoisseur of weaponry; many a heirloom warhammer and trophy cutlass fill your halls, and every new battle is an opportunity to bring out your favourite tool of war, whatever that may be."); break;
            case "Geomancer": setClassDescription("The stone speaks to you in a way differently than to any other dwarf: you understand what it says, and more, you can speak back to it and it understands you. You can call to stone and ask it to take a form of whatever you imagine and the stone will indeed form itself the way you design. You can divine future events by translating the ebb and flow of the Stone the Morphing. Your art, however, is of practical nature and you are not prone of superstition. You have studied to master the understanding of patterns and purposes of the stone. Stone is both a tool and material, and you are its greatest artisan."); break;
            case "Dungeoneer": setClassDescription("Deep places of the undermountain are your domain. You wage secret wars in the lightless depths against threats that should never surface. Dungeoneers come in all shapes. Some of you prefer a hands-on approach, wielding dual hammers imbued with runic might. Some of you might have developed a relationship with the shadows and the enemy will not know of your presence until your camo-cloak drops and the edge of your cold shiv cuts the enemy neck. And then, some of you leave only deathly traps for the enemy to find. However you go about your work, there are some things that unite all the dungeoneers: you are nigh fearless experts of undermountain warfare, equipped with the finest cutting edge technology of the dwarves."); break;
            case "Zealot": setClassDescription("You are adherent of the dwarven religion of Pantheon of the Stone, and you take your faith a step further. The dwarves are the children of the Stone and the Stone is sacred. According to your creed, it is forbidden for a dwarf to wear Fruits of the Stone - that is, precious gemstones - or delve into the undermountain with drills and picks without proper undertaking of Rituals of the Mountain Roots. Through faith and rituals accordingly, you gain boons from the Pantheon of the Stone. The Facets of the Stone are the Adamant, the Molten, the Ageless, the Morphing, the Myriad, and they grant different boons. You might dabble in oneiromancy - that is, the understanding of dreams - by partaking in rituals of the Ageless. In different era you might be the warrior of faith, chanting the war-rhymes of Stone the Adamant as you charge into battle with faith as your shield and a crude morningstar as your weapon."); break;
            case "Artisan": setClassDescription("Whether a weaponsmith, a jeweller, a weaver or a brewmaster or any other, you are held in high regard in the dwarven society and outside. Through the work of an artisan, the dwarven kin is represented - the great walls of numerous human cities commissioned by their magistrates, the intricate golden brooches worn by the faefolk or the greataxe that splits the goblin skull, any or all of these might have been made by you in one way or another. In the dwarven society you have fame and you have wealth and you afford to show that. You might dress lavishly in gold and silver or you might carry a blunderbuss shaped to look like a miniature dragon’s mouth. You might have a retinue of bodyguards, or a singular war-golem fitted for your purposes looming in the shadowy corners, ever vigilant."); break;
            default: break;
        }
        switch (playerClan) {
            case "Clan Wulfhammer": setClanDescription("A clan notable of its grizzled hunters, frontiersmen and deepsdwellers"); break;
            case "Clan Vingislav": setClanDescription("A proud clan of finest dwarven jewellers"); break;
            case "Clan Angrimmar": setClanDescription("Udalmar's previous könung was from this clan"); break;
            case "Clan Alehart": setClanDescription("Most of the meadhalls and taverns found in Udalmar’s levels is owned by clan Alehart"); break;
            case "Clan Surtusson": setClanDescription("A clan almost only consisting of geomancers"); break;
            default: break;
        }
    }, [hairstyles, selectedHair, beardstyles, selectedBeard, gender, playerClass, playerClan]);
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

            <Row>
                <Col>
                    <h2>Character Creator</h2>

                    <h4>Gender</h4>
                    <select onChange={e => setGender(e.target.value)} >
                        <option>male</option>
                        <option>female</option>
                    </select><br />
                    <h4>Hair</h4>
                    <select onChange={e => { setSelectedHair(e.target.value); setHair() }}>
                        <option>no hair</option>
                        {hairstyles.map(style => <option value={style.name} key={style.id}>{style.name}</option>)}
                    </select><br />
                    <h4>Beard</h4>
                    <select onChange={e => { setSelectedBeard(e.target.value); setBeard() }}>
                        <option>no beard</option>
                        {beardstyles.map(style => <option value={style.name} key={style.id}>{style.name}</option>)}
                    </select><br />
                    <h4>Class</h4>
                    <select onChange={e => { setPlayerClass(e.target.value) }}>
                        <option>Berserker</option>
                        <option>Geomancer</option>
                        <option>Dungeoneer</option>
                        <option>Zealot</option>
                        <option>Artisan</option>
                    </select>
                    <p>{classDescription}</p>
                    <h4>Clan</h4>
                    <select onChange={e => { setPlayerClan(e.target.value) }}>
                        <option>Clan Wulfhammer</option>
                        <option>Clan Vingislav</option>
                        <option>Clan Angrimmar</option>
                        <option>Clan Alehart</option>
                        <option>Clan Surtusson</option>
                    </select>
                    <p>{clanDescription}</p>
                </Col><Col>
                    <div className="characterEditor">
                        <div id="base"><img src={body} alt="" /></div>
                        <div id="face"><img src={face} alt="" /></div>
                        <div id="hair"><img src={hair_img} alt="" /></div>
                        <div id="beard"><img src={beard_img} alt="" /></div>
                        {/* <div id="clothing"><img src={clothing_img} alt="clothes" /></div> */}

                    </div>

                </Col>
                <p>Amongst those whose gazes has never dwelt upon the might of the dwarven city of Udalmar, there’s an old joke: there are no dwarven women. There is some truth in this statement, offensive joke or not: the dwarven folk is a folk of certain uniformity. The dwarves go about their lives, build their fortune and their clans, and raise their families in similar manner as most of the other species inhabiting the world outside the cavernous halls of Udalmar – that is true. Yet, a beard is certainly a source of pride and even a centerpiece of fashion movements amongst all the dwarves, gender notwithstanding. Same truth can be said about ringmail, axes and hammers, cold stones and shining metals – a dwarven eye commonly finds these concepts alluring, no matter the clan, no matter the uprising.</p>
            </Row>



        </main>
    );
}