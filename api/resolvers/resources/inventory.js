const { prisma } = require( '../../../generated/prisma-client' );

module.exports = ( register ) => register( {
    inventory: async ( _, data ) => {
        let has, defect, resentment, obsession, experience, strength, hope;
        has = await prisma.has( { id: 'has' }  );
        if ( !has ) {
            has = await prisma.createHas( { id: 'has' } );
        }
        defect = await prisma.defect( { id: 'defect' } );
        if ( !defect ) {
            defect = await prisma.createDefect( { id: 'defect' } );
        }
        resentment = await prisma.resentment( { id: 'resentment' } );
        if ( !resentment ) {
            resentment = await prisma.createResentment( { id: 'resentment' } );
        }
        obsession = await prisma.obsession( { id: 'obsession' } );
        if ( !obsession ) {
            obsession = await prisma.createObsession( { id: 'obsession' } );
        }
        experience = await prisma.experience( { id: 'experience' } );
        if ( !experience ) {
            experience = await prisma.createExperience( { id: 'experience' } );
        }
        strength = await prisma.strength( { id: 'strength' } );
        if ( !strength ) {
            strength = await prisma.createStrength( { id: 'strength' } );
        }
        hope = await prisma.hope( { id: 'hope' } );
        if ( !hope ) {
            hope = await prisma.createHope( { id: 'hope' } );
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
