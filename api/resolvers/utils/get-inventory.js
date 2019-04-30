const { getDeepPaths } = require( './get-deep' );
const getInventory = async userId => ( { paths: await getDeepPaths( userId ) } );
module.exports = getInventory;