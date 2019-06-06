const { prisma } = require( '../../../generated/prisma-client' );
const queryFeelings = require( './feelings' );

const querySources = async ( sources ) => {
    const Sources = sources.map( async key => {
        const source = await prisma.source( { key } );
        const feelings = source ? await queryFeelings( source.feelings ) : [];
        return {
            ...source,
            feelings
        };
    } );
    return Promise.all( Sources );
};

module.exports = querySources;