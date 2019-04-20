const { getDeepCharacters } = require( './get-deep' );
const getCast = async () => ( { characters: await getDeepCharacters() } );
module.exports = getCast;