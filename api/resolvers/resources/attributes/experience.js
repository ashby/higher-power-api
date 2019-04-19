const { prisma } = require( '../../../../generated/prisma-client' );
const { getExperience, mutateAttribute } = require( './utils' );
const { handleHas } = require( '../../utils' );

module.exports = ( register ) => register( {
    experience: async () => getExperience()
}, {
    mutateExperience: async ( parent, { data } ) => 
        await mutateAttribute( 'experience', data )
} );
