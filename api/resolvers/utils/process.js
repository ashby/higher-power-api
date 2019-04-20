const { getSources } = require( './source' );
const {
    ACT,
    AFFLICTION,
    BODY,
    CONSTRUCT,
    OATH,
    SHIELD,
    STIGMATA,
    VIRTUE,
    WISH
} = require( './constants' );

const getAct = async (  ) => await getSources( ACT );
const getAffliction = async (  ) => await getSources( AFFLICTION );
const getBody = async (  ) => await getSources( BODY );
const getConstruct = async (  ) => await getSources( CONSTRUCT );
const getOath = async (  ) => await getSources( OATH );
const getShield = async (  ) => await getSources( SHIELD );
const getStigmata = async (  ) => await getSources( STIGMATA );
const getVirtue = async (  ) => await getSources( VIRTUE );
const getWish = async (  ) => await getSources( WISH );

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