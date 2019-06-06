const { prisma } = require( '../../../generated/prisma-client' );

const CHARACTERS = [
    {
        key: "coach",
        title: "Coach",
        description: "Processes the guidance with challenges and reassurance.",
        process: "guidance"
    },
    {
        key: "genie",
        title: "Genie",
        description: "Processes the wish with dreams and gifts.",
        process: "wish"
    },
    {
        key: "grump",
        title: "Grump",
        description: "Processes the mess with attire and the floor.",
        process: "mess"
    },
    {
        key: "guardian",
        title: "Guardian",
        description: "Processes the construct with gates, walls and towers.",
        process: "construct"
    },
    {
        key: "martyr",
        title: "Martyr",
        description: "Processes the stigma with nails, crown and cross.",
        process: "stigma"
    },
    {
        key: "paladin",
        title: "Paladin",
        description: "Processes the oath with campaigns, crusades and pledges.",
        process: "oath"
    },
    {
        key: "player",
        title: "Player",
        description: "Processes the game with jokes, competition and theatre.",
        process: "game"
    },
    {
        key: "seeker",
        title: "Seeker",
        description: "Processes the virtue, with mind, soul and love.",
        process: "virtue"
    },
    {
        key: "self",
        title: "Self",
        description: "Processes the body.",
        process: "body"
    },
    {
        key: "smith",
        title: "Smith",
        description: "Processes the shield with silence, denial, confusion, and sarcasm.",
        process: "shield"
    },
    {
        key: "victim",
        title: "Victim",
        description: "Processes the affliction within scars, gashes, infections, tremors, nightmares and delirium.",
        process: "affliction"
    },
    {
        key: "volunteer",
        title: "Volunteer",
        description: "Processes the act with service, support and sacrifice.",
        process: "act"
    }
];

const PROCESSES = [
    {
        key: "guidance",
        title: "Guidance",
        sources: { set: [
            "challenge",
            "reassurance"
        ] }
    },
    {
        key: "wish",
        title: "Wish",
        sources: { set: [
            "dream",
            "gift"
        ] }
    },
    {
        key: "mess",
        title: "Mess",
        sources: { set: [
            "attire",
            "floor"
        ] }
    },
    {
        key: "construct",
        title: "Construct", 
        sources: { set: [
            "gate",
            "tower",
            "wall"
        ] }
    },
    {
        key: "stigma",
        title: "Stigma",
        sources: { set: [
            "cross",
            "crown",
            "nail"
        ] }
    },
    {
        key: "oath",
        title: "Oath",
        sources: { set: [
            "campaign",
            "pledge",
            "crusade"
        ] }
    },
    {
        key: "game",
        title: "Game",
        sources: { set: [
            "joke",
            "competition",
            "theatre"
        ] }
    },
    {
        key: "virtue",
        title: "Virtue",
        sources: { set: [
            "love",
            "mind",
            "soul"
        ] }
    },
    {
        key: "body",
        title: "Body",
        sources: { set: [
            "brain",
            "face",
            "gut",
            "heart",
            "mouth",
            "skin",
            "sternum",
            "shoulders",
            "eyes",
            "hands",
            "rectum",
            "genitals",
            "ears"
        ] }
    },
    {
        key: "shield",
        title: "Shield",
        sources: { set: [
            "confusion",
            "denial",
            "sarcasm",
            "silence"
        ] }
    },
    {
        key: "affliction",
        title: "Affliction",
        sources: { set: [
            "delirium",
            "gash",
            "infection",
            "nightmare",
            "scar",
            "tremor"
        ] }
    },
    {
        key: "act",
        title: "Act",
        sources: { set: [
            "service",
            "support",
            "sacrifice"
        ] }
    }
];

const SOURCES = [
    {
        key: "challenge",
        title: "Challenge",
        feelings: { set: [] }
    },
    {
        key: "reassurance",
        title: "Reassurance",
        feelings: { set: [] }
    },
    {
        key: "dream",
        title: "Dream",
        feelings: { set: [] }
    },
    {
        key: "fairyTale",
        title: "Fairy Tale",
        feelings: { set: [] }   
    },
    {
        key: "gift",
        title: "Gift",
        feelings: { set: [] }
    },
    {
        key: "attire",
        title: "Attire",
        feelings: { set: [] }
    },
    {
        key: "floor",
        title: "Floor",
        feelings: { set: [] }
    },
    {
        key: "gate",
        title: "Gate",
        feelings: { set: [] }
    },
    {
        key: "wall",
        title: "Wall",
        feelings: { set: [] }
    },
    {
        key: "tower",
        title: "Tower",
        feelings: { set: [] }
    },
    {
        key: "cross",
        title: "Cross",
        feelings: { set: [] }
    },
    {
        key: "crown",
        title: "Crown",
        feelings: { set: [] }
    },
    {
        key: "nail",
        title: "Nail",
        feelings: { set: [] }
    },
    {
        key: "campaign",
        title: "Campaign",
        feelings: { set: [] }
    },
    {
        key: "crusade",
        title: "Crusade",
        feelings: { set: [] }
    },
    {
        key: "pledge",
        title: "Pledge",
        feelings: { set: [] }
    },
    {
        key: "joke",
        title: "Joke", 
        feelings: { set: [] }
    },
    {
        key: "competition",
        title: "Competition",
        feelings: { set: [] }
    },
    {
        key: "theatre",
        title: "Theatre",
        feelings: { set: [] }
    },
    {
        key: "love",
        title: "Love",    
        feelings: { set: [] }
    },
    {
        key: "mind",
        title: "Mind",          
        feelings: { set: [] }
    },
    {
        key: "soul",
        title: "Soul",
        feelings: { set: [] }
    },
    {
        key: "brain",
        title: "Brain",
        feelings: { set: [] }
    },
    {
        key: "face",
        title: "Face",   
        feelings: { set: [] }
    },
    {
        key: "gut",
        title: "Gut",     
        feelings: { set: [] }
    },
    {
        key: "heart",
        title: "Heart",
        feelings: { set: [] }
    },
    {
        key: "mouth",
        title: "Mouth",             
        feelings: { set: [] }
    },
    {
        key: "skin",
        title: "Skin",             
        feelings: { set: [] }
    },
    {
        key: "sternum",
        title: "Sternum",                   
        feelings: { set: [] }
    },
    {
        key: "shoulders",
        title: "Shoulders",                   
        feelings: { set: [] }
    },
    {
        key: "eyes",
        title: "Eyes",                   
        feelings: { set: [] }
    },
    {
        key: "hands",
        title: "Hands",                   
        feelings: { set: [] }
    },
    {
        key: "rectum",
        title: "Rectum",                   
        feelings: { set: [] }
    },
    {
        key: "genitals",
        title: "Genitals",                   
        feelings: { set: [] }
    },
    {
        key: "ears",
        title: "Ears",                   
        feelings: { set: [] }
    },
    {
        key: "confusion",
        title: "Confusion",
        feelings: { set: [] }
    },
    {
        key: "denial",
        title: "Denial",
        feelings: { set: [] }
    },
    {
        key: "sarcasm",
        title: "Sarcasm",
        feelings: { set: [] }
    },
    {
        key: "silence",
        title: "Silence",
        feelings: { set: [] }
    },
    {
        key: "delirium",
        title: "Delirium",
        feelings: { set: [] }
    },
    {
        key: "gash",
        title: "Gash",
        feelings: { set: [] }
    },
    {
        key: "infection",
        title: "Infection",
        feelings: { set: [] }
    },
    {
        key: "nightmare",
        title: "Nightmare",
        feelings: { set: [] }
    },
    {
        key: "scar",
        title: "Scar",
        feelings: { set: [] }
    },
    {
        key: "tremor",
        title: "Tremor",
        feelings: { set: [] }
    },
    {
        key: "service",
        title: "Service",
        feelings: { set: [] }
    },
    {
        key: "support",
        title: "Support",
        feelings: { set: [] }
    },
    {
        key: "sacrifice",
        title: "Sacrifice",
        feelings: { set: [] }
    }
];

const PATHS = [
    {
        key: "defect",
        title: "Defect",
        feelings: { set: [] }
    },
    {
        key: "discontent",
        title: "Discontent",
        feelings: { set: [] }
    },
    {
        key: "experience",
        title: "Experience",
        feelings: { set: [] }
    },
    {
        key: "hope",
        title: "Hope",
        feelings: { set: [] }
    },
    {
        key: "obsession",
        title: "Obsession",
        feelings: { set: [] }
    },
    {
        key: "resentment",
        title: "Resentment",
        feelings: { set: [] }
    },
    {
        key: "strength",
        title: "Strength",
        feelings: { set: [] }
    }
];

module.exports = async ( userId ) => {
    const characterPromises = CHARACTERS.map( async ( character ) => 
        prisma.createCharacter( { 
            ...character, 
            userId, 
            process:`${character.process}-${userId}`, 
            key: `${character.key}-${userId}` 
        } ) 
    );
    const processPromises = PROCESSES.map( async ( process ) => 
        prisma.createProcess( { 
            ...process, 
            userId, 
            key: `${process.key}-${userId}`,
            sources: {
                set: process.sources.set.map( source => `${source}-${userId}` )
            } 
        } ) 
    );
    const sourcePromises = SOURCES.map( async ( source ) => 
        prisma.createSource( { 
            ...source, 
            userId, 
            key: `${source.key}-${userId}` 
        } ) 
    );
    const pathPromises = PATHS.map( async ( path ) => 
        prisma.createPath( { 
            ...path, 
            userId, 
            key: `${path.key}-${userId}` 
        } ) 
    );
    await Promise.all( [ 
        ...characterPromises, 
        ...processPromises, 
        ...sourcePromises, 
        ...pathPromises 
    ] );
};