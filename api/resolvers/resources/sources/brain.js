const { prisma } = require( '../../../../generated/prisma-client' );
const { handleHas } = require( '../../utils' );

module.exports = ( register ) => register( {
    brain: ( _, { id } ) => prisma.brain( { id } )
}, {
    mutateBrain: async ( parent, { id, data } ) => {
    }
} );
