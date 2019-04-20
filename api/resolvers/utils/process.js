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

const getAct = async ( has = false ) => await getSources( has, ACT );
const getAffliction = async ( has = false ) => await getSources( has, AFFLICTION );
const getBody = async ( has = false ) => await getSources( has, BODY );
const getConstruct = async ( has = false ) => await getSources( has, CONSTRUCT );
const getOath = async ( has = false ) => await getSources( has, OATH );
const getShield = async ( has = false ) => await getSources( has, SHIELD );
const getStigmata = async ( has = false ) => await getSources( has, STIGMATA );
const getVirtue = async ( has = false ) => await getSources( has, VIRTUE );
const getWish = async ( has = false ) => await getSources( has, WISH );

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