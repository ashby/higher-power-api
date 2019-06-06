const queryPaths = require( './paths' );
const queryInventory = async userId => ( { paths: await queryPaths( userId ) } );
module.exports = queryInventory;