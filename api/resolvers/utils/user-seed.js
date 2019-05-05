const { prisma } = require( '../../../generated/prisma-client' );

const CHARACTERS = [
    {
        type: "genie",
        title: "Genie",
        description: "Processes the wish with dreams and gifts.",
        process: "wish"
    },
    {
        type: "grump",
        title: "Grump",
        description: "Processes the mess with attire and the floor.",
        process: "mess"
    },
    {
        type: "guardian",
        title: "Guardian",
        description: "Processes the construct with gates, walls and towers.",
        process: "construct"
    },
    {
        type: "martyr",
        title: "Martyr",
        description: "Processes the stigma with nails, crown and cross.",
        process: "stigmata"
    },
    {
        type: "paladin",
        title: "Paladin",
        description: "Processes the oath with campaigns, crusades and pledges.",
        process: "oath"
    },
    {
        type: "player",
        title: "Player",
        description: "Processes the game with jokes, competition and theatre.",
        process: "game"
    },
    {
        type: "seeker",
        title: "Seeker",
        description: "Processes the virtue, with mind, soul and love.",
        process: "virtue"
    },
    {
        type: "self",
        title: "Self",
        description: "Processes the body.",
        process: "body"
    },
    {
        type: "smith",
        title: "Smith",
        description: "Processes the shield with silence, denial, confusion, and sarcasm.",
        process: "shield"
    },
    {
        type: "victim",
        title: "Victim",
        description: "Processes the affliction within scars, gashes, infections, tremors, nightmares and delirium.",
        process: "affliction"
    },
    {
        type: "volunteer",
        title: "Volunteer",
        description: "Processes the act with service, support and sacrifice.",
        process: "act"
    }
];

const PROCESSES = [
    {
        type: "wish",
        title: "Wish",
        sources: { set: [
            "dream",
            "gift"
        ] }
    },
    {
        type: "mess",
        title: "Mess",
        sources: { set: [
            "attire",
            "floor"
        ] }
    },
    {
        type: "construct",
        title: "Construct", 
        sources: { set: [
            "gate",
            "tower",
            "wall"
        ] }
    },
    {
        type: "stigma",
        title: "Stigma",
        sources: { set: [
            "cross",
            "crown",
            "nail"
        ] }
    },
    {
        type: "oath",
        title: "Oath",
        sources: { set: [
            "campaign",
            "pledge",
            "crusade"
        ] }
    },
    {
        type: "game",
        title: "Game",
        sources: { set: [
            "joke",
            "competition",
            "theatre"
        ] }
    },
    {
        type: "virtue",
        title: "Virtue",
        sources: { set: [
            "love",
            "mind",
            "soul"
        ] }
    },
    {
        type: "body",
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
        type: "shield",
        title: "Shield",
        sources: { set: [
            "confusion",
            "denial",
            "sarcasm",
            "silence"
        ] }
    },
    {
        type: "affliction",
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
        type: "act",
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
        type: "dream",
        title: "Dream",
        feelings: { set: [] }
    },
    {
        type: "fairyTale",
        title: "Fairy Tale",
        feelings: { set: [] }   
    },
    {
        type: "gift",
        title: "Gift",
        feelings: { set: [] }
    },
    {
        type: "attire",
        title: "Attire",
        feelings: { set: [] }
    },
    {
        type: "floor",
        title: "Floor",
        feelings: { set: [] }
    },
    {
        type: "gate",
        title: "Gate",
        feelings: { set: [] }
    },
    {
        type: "wall",
        title: "Wall",
        feelings: { set: [] }
    },
    {
        type: "tower",
        title: "Tower",
        feelings: { set: [] }
    },
    {
        type: "cross",
        title: "Cross",
        feelings: { set: [] }
    },
    {
        type: "crown",
        title: "Crown",
        feelings: { set: [] }
    },
    {
        type: "nail",
        title: "Nail",
        feelings: { set: [] }
    },
    {
        type: "campaign",
        title: "Campaign",
        feelings: { set: [] }
    },
    {
        type: "crusade",
        title: "Crusade",
        feelings: { set: [] }
    },
    {
        type: "pledge",
        title: "Pledge",
        feelings: { set: [] }
    },
    {
        type: "joke",
        title: "Joke", 
        feelings: { set: [] }
    },
    {
        type: "competition",
        title: "Competition",
        feelings: { set: [] }
    },
    {
        type: "theatre",
        title: "Theatre",
        feelings: { set: [] }
    },
    {
        type: "love",
        title: "Love",    
        feelings: { set: [] }
    },
    {
        type: "mind",
        title: "Mind",          
        feelings: { set: [] }
    },
    {
        type: "soul",
        title: "Soul",
        feelings: { set: [] }
    },
    {
        type: "brain",
        title: "Brain",
        feelings: { set: [] }
    },
    {
        type: "face",
        title: "Face",   
        feelings: { set: [] }
    },
    {
        type: "gut",
        title: "Gut",     
        feelings: { set: [] }
    },
    {
        type: "heart",
        title: "Heart",
        feelings: { set: [] }
    },
    {
        type: "mouth",
        title: "Mouth",             
        feelings: { set: [] }
    },
    {
        type: "skin",
        title: "Skin",             
        feelings: { set: [] }
    },
    {
        type: "sternum",
        title: "Sternum",                   
        feelings: { set: [] }
    },
    {
        type: "shoulders",
        title: "Shoulders",                   
        feelings: { set: [] }
    },
    {
        type: "eyes",
        title: "Eyes",                   
        feelings: { set: [] }
    },
    {
        type: "hands",
        title: "Hands",                   
        feelings: { set: [] }
    },
    {
        type: "rectum",
        title: "Rectum",                   
        feelings: { set: [] }
    },
    {
        type: "genitals",
        title: "Genitals",                   
        feelings: { set: [] }
    },
    {
        type: "ears",
        title: "Ears",                   
        feelings: { set: [] }
    },
    {
        type: "confusion",
        title: "Confusion",
        feelings: { set: [] }
    },
    {
        type: "denial",
        title: "Denial",
        feelings: { set: [] }
    },
    {
        type: "sarcasm",
        title: "Sarcasm",
        feelings: { set: [] }
    },
    {
        type: "silence",
        title: "Silence",
        feelings: { set: [] }
    },
    {
        type: "delirium",
        title: "Delirium",
        feelings: { set: [] }
    },
    {
        type: "gash",
        title: "Gash",
        feelings: { set: [] }
    },
    {
        type: "infection",
        title: "Infection",
        feelings: { set: [] }
    },
    {
        type: "nightmare",
        title: "Nightmare",
        feelings: { set: [] }
    },
    {
        type: "scar",
        title: "Scar",
        feelings: { set: [] }
    },
    {
        type: "tremor",
        title: "Tremor",
        feelings: { set: [] }
    },
    {
        type: "service",
        title: "Service",
        feelings: { set: [] }
    },
    {
        type: "support",
        title: "Support",
        feelings: { set: [] }
    },
    {
        type: "sacrifice",
        title: "Sacrifice",
        feelings: { set: [] }
    }
];

const PATHS = [
    {
        type: "defect",
        title: "Defect",
        feelings: { set: [] }
    },
    {
        type: "discontent",
        title: "Discontent",
        feelings: { set: [] }
    },
    {
        type: "experience",
        title: "Experience",
        feelings: { set: [] }
    },
    {
        type: "hope",
        title: "Hope",
        feelings: { set: [] }
    },
    {
        type: "obsession",
        title: "Obsession",
        feelings: { set: [] }
    },
    {
        type: "resentment",
        title: "Resentment",
        feelings: { set: [] }
    },
    {
        type: "strength",
        title: "Strength",
        feelings: { set: [] }
    }
];

module.exports = async ( userId ) => {
    const characterPromises = CHARACTERS.map( async ( character ) => 
        prisma.createCharacter( { ...character, userId, type: `${character.type}-${userId}` } ) 
    );
    const processPromises = PROCESSES.map( async ( process ) => 
        prisma.createProcess( { ...process, userId, type: `${process.type}-${userId}` } ) 
    );
    const sourcePromises = SOURCES.map( async ( source ) => 
        prisma.createSource( { ...source, userId, type: `${source.type}-${userId}` } ) 
    );
    const pathPromises = PATHS.map( async ( path ) => 
        prisma.createPath( { ...path, userId, type: `${path.type}-${userId}` } ) 
    );
    await Promise.all( [ 
        ...characterPromises, 
        ...processPromises, 
        ...sourcePromises, 
        ...pathPromises 
    ] );
};