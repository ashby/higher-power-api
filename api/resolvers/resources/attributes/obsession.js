const { prisma } = require( '../../../../generated/prisma-client' );
const { getObsession, mutateAttribute } = require( './utils' );
const { handleHas } = require( '../../utils' );

module.exports = ( register ) => register( {
    obsession: async () => getObsession()
}, {
    mutateObsession: async ( parent, { data } ) => 
        await mutateAttribute( 'obsession', data )
} );
