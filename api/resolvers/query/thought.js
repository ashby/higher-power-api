const { prisma } = require( '../../../generated/prisma-client' );

const queryThought = async ( thoughts ) => {
    thoughts = thoughts.map( async id => await prisma.thought( { id } ) );
    return Promise.all( thoughts );
};

module.exports = queryThought;