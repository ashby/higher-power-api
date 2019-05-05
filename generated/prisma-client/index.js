"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Character",
    embedded: false
  },
  {
    name: "Process",
    embedded: false
  },
  {
    name: "Source",
    embedded: false
  },
  {
    name: "Path",
    embedded: false
  },
  {
    name: "Feeling",
    embedded: false
  },
  {
    name: "Thought",
    embedded: false
  },
  {
    name: "Inventory",
    embedded: false
  },
  {
    name: "InventoryPath",
    embedded: false
  },
  {
    name: "PathFeeling",
    embedded: false
  },
  {
    name: "Cast",
    embedded: false
  },
  {
    name: "CastCharacter",
    embedded: false
  },
  {
    name: "CharacterProcess",
    embedded: false
  },
  {
    name: "ProcessSource",
    embedded: false
  },
  {
    name: "SourceFeeling",
    embedded: false
  },
  {
    name: "HigherPower",
    embedded: false
  },
  {
    name: "AuthPayload",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/ashby-utting-73eac0/higher-power/stepOver`
});
exports.prisma = new exports.Prisma();
