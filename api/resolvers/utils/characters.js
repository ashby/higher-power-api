const { prisma } = require( '../../../generated/prisma-client' );
const getProcesses = require( './process' );
const { mutateProcess } = require( '../register/process' );
const { mutateCharacter } = require( '../register/character' );
const { upperCase } = require( './' );
const { PROCESSES } = require( '../constants/processes' );
const { CHARACTERS, CHARACTER } = require( '../constants/characters' );

const getCharacters = () => {
    const characters = [];
    CHARACTERS.map( character => {
        characters[ character.singular ] = CHARACTER[ character.singular ]
    } );
    return characters;
};

module.exports = {
    getCharacters
};
