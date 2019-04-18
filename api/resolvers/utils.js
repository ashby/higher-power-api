const { prisma } = require( '../../generated/prisma-client' );
const config = require( '../config' );

const HAS = {
    defect: false,
    resentment: false,
    obsession: false,
    experience: false,
    strength: false,
    hope: false,
    acceptance: false,
    anger: false,
    armor: false,
    boundary: false,
    compassion: false,
    courage: false,
    fear: false,
    gratitude: false,
    pride: false,
    salvaltion: false,
    selfPity: false,
    suffering: false,
    toxicity: false,
    trauma: false,
    vulnerability: false,
};

const handleHas =  async ( key, attribute ) => {
    if ( config.ENABLE_HAS ) {
        let has;
        has = await prisma.has( { id: 'has' } );
        const shouldUpdateHas = !!has && has.id && ( !has[ key ] || !has[ attribute ] );
        if ( shouldUpdateHas ) {
            has[ key ] = true;
            if ( attribute ) {  has[ attribute ] = true; }
            const { id, ...data } = has;
            await prisma.updateHas( {
                data,
                where: { id: has.id }
            } );
        } else if ( !has ) {
            HAS.id = 'has';
            HAS[ key ] = true;
            if ( attribute ) {  HAS[ attribute ] = true; }
            await prisma.createHas( HAS );
        }
    }
    
};

const getDefect = async ( has = false ) => {
    if ( !has ) {
        has = await prisma.has( { id: 'has' } );
    }
    let trauma, toxicity, suffering;
    if ( has.trauma ) {
        trauma = await prisma.traumas();
    }
    if ( has.toxicity ) {
        toxicity = await prisma.toxicities();
    }
    if ( has.suffering ) {
        suffering = await prisma.sufferings();
    }
    const defect = {
        trauma,
        toxicity,
        suffering
    };
    return defect;
};
const getResentment = async ( has = false ) => {
    if ( !has ) {
        has = await prisma.has( { id: 'has' } );
    }
    const anger = await prisma.angers();
    const selfPity = await prisma.selfPities();
    const fear = await prisma.fears();
    const pride = await prisma.prides();
    const resentment = {
        anger,
        selfPity,
        fear,
        pride
    };
    return resentment;
};
const getObsession = async ( has = false ) => {
    if ( !has ) {
        has = await prisma.has( { id: 'has' } );
    }
    let suffering, loyalty, honor, vulnerability;
    if ( has.suffering ) {
        suffering = await prisma.sufferings();
    }
    if ( has.loyalty ) {
        loyalty = await prisma.loyalties();
    }
    if ( has.honor ) {
        honor = await prisma.honors();
    }
    if ( has.vulnerability ) {
        vulnerability = await prisma.vulnerabilities();
    }
    const obsession = {
        suffering,
        loyalty,
        honor,
        vulnerability
    };
    return obsession;
};
const getExperience = async ( has = false ) => {
    if ( !has ) {
        has = await prisma.has( { id: 'has' } );
    }
    let compassion, courage, acceptance, vulnerability, gratitude, suffering;
    if ( has.compassion ) {
        compassion = await prisma.compassions();
    }
    if ( has.courage ) {
        courage = await prisma.courages();
    }
    if ( has.acceptance ) {
        acceptance = await prisma.acceptances();
    }
    if ( has.vulnerability ) {
        vulnerability = await prisma.vulnerabilities();
    }
    if ( has.gratitude ) {
        gratitude = await prisma.gratitudes();
    }
    if ( has.suffering ) {
        suffering = await prisma.sufferings();
    }
    const experience = {
        compassion,
        courage,
        acceptance,
        vulnerability,
        gratitude,
        suffering
    };
    return experience;
};
const getStrength = async ( has = false ) => {
    if ( !has ) {
        has = await prisma.has( { id: 'has' } );
    }
    let armor, boundary, loyalty, honor, anger, courage;
    if ( has.armor ) {
        armor = await prisma.armors();
    }
    if ( has.boundary ) {
        boundary = await prisma.boundaries();
    }
    if ( has.loyalty ) {
        loyalty = await prisma.loyalties();
    }
    if ( has.honor ) {
        honor = await prisma.honors();
    }
    if ( has.anger ) {
        anger = await prisma.angers();
    }
    if ( has.courage ) {
        courage = await prisma.courages();
    }
    const strengths = {
        armor,
        boundary,
        loyalty,
        honor,
        anger,
        courage
    };
    return strengths;
};
const getHope = async ( has = false ) => {
    if ( !has ) {
        has = await prisma.has( { id: 'has' } );
    }
    if ( has.salvation ) {
        salvation = await prisma.salvations();
    }
    const hope = {
        salvation
    };
    return hope;
};

module.exports = {
    HAS,
    handleHas,
    getDefect,
    getResentment,
    getObsession,
    getExperience,
    getStrength,
    getHope
}