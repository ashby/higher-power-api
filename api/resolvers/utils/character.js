const { prisma } = require( '../../../generated/prisma-client' );
const getProcesses = require( './process' );
const { mutateProcess } = require( '../register/process' );
const { mutateCharacter } = require( '../register/character' );
const { upperCase } = require( './' );
const { PROCESSES } = require( '../constants/processes' );
const CHARACTERS = require( '../constants/characters' );

const getCharacter = async () => {
    const processPromises = PROCESSES.map( async ( process ) => {
        data = await prisma[ process.singular ]( { id: process.singular } );
        if ( !data ) {
            return await mutateProcess( process.singular, { id: undefined } );
        }
        return data;
    } );
    return await Promise.all( processPromises );
};

module.exports = {
    getCharacter
};
