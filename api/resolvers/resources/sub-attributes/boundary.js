const { prisma } = require( '../../../../generated/prisma-client' );
const { mutateSubattribute } = require( './utils' );

module.exports = ( register ) => register( {
    boundarys: () => prisma.boundarys(),
    boundary: ( _, { id } ) => prisma.boundary( { id } )
}, {
    mutateBoundary: async ( parent, { id, data } ) => 
        await mutateSubattribute( 'boundary', id, data )
} );
