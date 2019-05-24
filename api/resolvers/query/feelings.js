const { prisma } = require( '../../../generated/prisma-client' );
const queryThought = require( './thought' );

const queryFeelings = async ( feelings ) => {
    feelings = feelings.map( async key => { 
        const feeling = await prisma.feeling( { key } );
        const thoughts = feeling ? await queryThought( feeling.thoughts ): [];
        if ( feeling ) {
            return {
                ...feeling,
                thoughts 
            };
        }
    } );
    return Promise.all( feelings );
};

module.exports = queryFeelings;