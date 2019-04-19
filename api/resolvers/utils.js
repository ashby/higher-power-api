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

const getValues = async ( has, queries = [] ) => {
    const values = {};
    const queryPromises = queries.map( async ( query ) => {
        let key, queries;
        if ( typeof query === 'object' ) {
            key = query.singular;
            queries = query.plural;
        } else {
            key = query;
            queries = `${query}s`;
        }
        if ( has[ key ] ) {
            const value = await prisma[ queries ]();
            values[ key ] = value;
        }
    } );
    await Promise.all( queryPromises );
    return values;
};

const getDefect = async ( has = false ) => {
    if ( !has ) {
        has = await prisma.has( { id: 'has' } );
    }
    const values = await getValues( has, [
        'trauma', 
        { singular: 'toxicity', plural: 'toxicities' },
        'suffering'
    ] );
    const defect = {
        ...values
    };
    return defect;
};
const getResentment = async ( has = false ) => {
    if ( !has ) {
        has = await prisma.has( { id: 'has' } );
    }
    const values = await getValues( has, [
        'anger', 
        { singular: 'selfPity', plural: 'selfPities' },
        'fear',
        'pride'
    ] );
    const resentment = {
        ...values
    };
    return resentment;
};
const getObsession = async ( has = false ) => {
    if ( !has ) {
        has = await prisma.has( { id: 'has' } );
    }
    const values = await getValues( has, [
        'suffering', 
        { singular: 'loyalty', plural: 'loyalties' },
        'honor',
        { singular: 'vulnerability', plural: 'vulnerabilities' }
    ] );
    const obsession = {
        ...values
    };
    return obsession;
};
const getExperience = async ( has = false ) => {
    if ( !has ) {
        has = await prisma.has( { id: 'has' } );
    }
    const values = await getValues( has, [
        'compassion', 
        'courage', 
        'acceptance',
        { singular: 'vulnerability', plural: 'vulnerabilities' },
        'gratitude',
        'suffering'
    ] );
    const experience = {
        ...values
    };
    return experience;
};
const getStrength = async ( has = false ) => {
    if ( !has ) {
        has = await prisma.has( { id: 'has' } );
    }
    const values = await getValues( has, [
        'armor', 
        { singular: 'boundary', plural: 'boundaries' },
        { singular: 'loyalty', plural: 'loyalties' },
        'honor',
        'anger',
        'courage'
    ] );
    const strengths = {
        ...values
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
    const values = await getValues( has, [
        'salvation'
    ] );
    const hope = {
        ...values
    };
    return hope;
};

const getAttributes = {
    getDefect,
    getResentment,
    getObsession,
    getExperience,
    getStrength,
    getHope,
};

module.exports = {
    HAS,
    handleHas,
    getAttributes,
    getDefect,
    getResentment,
    getObsession,
    getExperience,
    getStrength,
    getHope
};