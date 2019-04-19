const { prisma } = require( '../../../../generated/prisma-client' );
const { mutateSubattribute } = require( './utils' );

module.exports = ( register ) => register( {
    prides: () => prisma.prides(),
    pride: ( _, { id } ) => prisma.pride( { id } )
}, {
    mutatePride: async ( parent, { id, data } ) => 
        await mutateSubattribute( 'pride', id, data )
} );
