const { prisma } = require( '../../../generated/prisma-client' );
const {
    getDefect,
    getResentment,
    getObsession,
    getExperience,
    getStrength,
    getHope
} = require( '../utils' );

module.exports = ( register ) => register( {
    inventory: async ( _, data, ctx ) => {
        let has, defect, resentment, obsession, experience, strength, hope;
        has = await prisma.has( { id: 'has' }  );
        if ( !has ) {
            has = await prisma.createHas( { id: 'has' } );
        }
        if ( has.defect ) {
            defect = await getDefect();
        }
        if ( has.resentment ) {
            resentment = await getResentment();
        }
        if ( has.obsession ) {
            obsession = await getObsession();
        }
        if ( has.experience ) {
            experience = await getExperience();
        }
        if ( has.strength ) {
            strength = await getStrength();
        }
        if ( has.hope ) {
            hope = await getHope()
        }
        return {
            has,
            defect,
            resentment,
            obsession,
            experience,
            strength,
            hope
        }
    }
} );
