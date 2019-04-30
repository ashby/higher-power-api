const { getDeepCharacters } = require( './get-deep' );
const getCast = async ( userId ) => ( { characters: await getDeepCharacters( userId ) } );
module.exports = getCast;