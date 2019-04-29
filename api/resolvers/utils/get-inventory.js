const { getDeepPaths } = require( './get-deep' );
const getInventory = async () => ( { paths: await getDeepPaths() } );
module.exports = getInventory;