const { getDeepCharacters } = require( './deep' );
const getCast = async ( userId ) => ( { characters: await getDeepCharacters( userId ) } );
module.exports = getCast;