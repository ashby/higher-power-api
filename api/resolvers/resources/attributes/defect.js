const { prisma } = require( '../../../../generated/prisma-client' );
const { getDefect, mutateAttribute } = require( './utils' );
const { handleHas } = require( '../../utils' );

module.exports = ( register ) => register( {
    defect: async () => getDefect()
}, {
    mutateDefect: async ( parent, { data } ) => 
        await mutateAttribute( 'defect', data )
} );
