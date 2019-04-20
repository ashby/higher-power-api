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

const upperCase = string => string.charAt( 0 ).toUpperCase() + string.slice( 1 );

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

module.exports = {
    upperCase,
    HAS,
    handleHas
};