const { prisma } = require( '../../../generated/prisma-client' );
const queryProcesses = require( './processes' )

const queryCharacters = async userId => {
    const characters = await prisma.characters( { where: { userId } } );
    const Characters = characters.map( async character => {
        const process = await queryProcesses( character.process );
        return {
            ...character,
            process
        };
    } );
    return Promise.all( Characters );
}

module.exports = queryCharacters;