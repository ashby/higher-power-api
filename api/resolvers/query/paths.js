const { prisma } = require( '../../../generated/prisma-client' );
const queryFeelings = require( './feelings' );

const queryPaths = async userId => {
    const paths = await prisma.paths( { where: { userId } } );
    const Paths = paths.map( async path => {
        const feelings = await queryFeelings( path.feelings );
        return {
            ...path,
            feelings
        };
    } );
    return Promise.all( Paths );
};

module.exports = queryPaths;