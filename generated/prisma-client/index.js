"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Character",
    embedded: false
  },
  {
    name: "Feeling",
    embedded: false
  },
  {
    name: "Path",
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
    name: "Thought",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/ashby-utting-73eac0/step/dev`
});
exports.prisma = new exports.Prisma();
