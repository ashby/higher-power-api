const { prisma } = require( '../../../generated/prisma-client' );
const config = require( '../../config' );

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
    fun: false,
    gratitude: false,
    joy: false,
    pride: false,
    salvaltion: false,
    selfPity: false,
    suffering: false,
    toxicity: false,
    trauma: false,
    vulnerability: false,
};

const handleHas =  async ( key, path ) => {
    if ( config.ENABLE_HAS ) {
        let has;
        has = await prisma.has( { id: 'has' } );
        const shouldUpdateHas = !!has && has.id && ( !has[ key ] || !has[ path ] );
        if ( shouldUpdateHas ) {
            has[ key ] = true;
            if ( path ) {  has[ path ] = true; }
            const { id, ...data } = has;
            await prisma.updateHas( {
                data,
                where: { id: has.id }
            } );
        } else if ( !has ) {
            HAS.id = 'has';
            HAS[ key ] = true;
            if ( path ) {  HAS[ path ] = true; }
            await prisma.createHas( HAS );
        }
    }
};

module.exports = {
    HAS,
    handleHas
};