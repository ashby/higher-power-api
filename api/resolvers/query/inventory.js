const { getDeepPaths } = require( './deep' );
const queryInventory = async userId => ( { paths: await queryDeepPaths( userId ) } );
module.exports = queryInventory;