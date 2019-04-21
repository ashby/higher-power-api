const { getSources } = require( './source' );
const {
    PROCESS
} = require( '../constants/processes' );

const getAct = async () => await getSources( PROCESS.act );
const getAffliction = async () => await getSources( PROCESS.affliction );
const getBody = async () => await getSources( PROCESS.body );
const getConstruct = async () => await getSources( PROCESS.construct );
const getOath = async () => await getSources( PROCESS.oath );
const getShield = async () => await getSources( PROCESS.shield );
const getStigmata = async () => await getSources( PROCESS.stigmata );
const getVirtue = async () => await getSources( PROCESS.virtue );
const getWish = async () => await getSources( PROCESS.wish );

module.exports = {
    getAct,
    getAffliction,
    getBody,
    getConstruct,
    getOath,
    getShield,
    getStigmata,
    getVirtue,
    getWish
};