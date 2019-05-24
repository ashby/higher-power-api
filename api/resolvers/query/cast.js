const queryCharacters = require( './characters' );
const queryCast = async ( userId ) => ( { characters: await queryCharacters( userId ) } );
module.exports = queryCast;