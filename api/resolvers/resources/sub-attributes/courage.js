const { prisma } = require( '../../../../generated/prisma-client' );
const { mutateSubattribute } = require( './utils' );

module.exports = ( register ) => register( {
    courages: () => prisma.courages(),
    courage: ( _, { id } ) => prisma.courage( { id } )
}, {
    mutateCourage: async ( parent, { id, data } ) =>
        await mutateSubattribute( 'courage', id, data )
} );
