const { prisma } = require( '../../../generated/prisma-client' );

module.exports = ( register ) => register( {
    has: ( _, { id } ) => prisma.has( { id } )
}, {
    mutateHas: async ( parent, { data } ) => {
        const has = {
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
        if ( data.has ) {
            has[ data.has ] = true;
        }
        if ( !data.id ) {
            has.id = 'has';
            return prisma.createHas( has );
        }
        return prisma.updateHas( {
            data: has,
            where: { id: data.id }
        } );
    }
} );
