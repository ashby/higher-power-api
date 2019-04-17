"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Trauma",
    embedded: false
  },
  {
    name: "Toxicity",
    embedded: false
  },
  {
    name: "Suffering",
    embedded: false
  },
  {
    name: "Defect",
    embedded: false
  },
  {
    name: "Anger",
    embedded: false
  },
  {
    name: "SelfPity",
    embedded: false
  },
  {
    name: "Fear",
    embedded: false
  },
  {
    name: "Pride",
    embedded: false
  },
  {
    name: "Resentment",
    embedded: false
  },
  {
    name: "Obsession",
    embedded: false
  },
  {
    name: "Compassion",
    embedded: false
  },
  {
    name: "Courage",
    embedded: false
  },
  {
    name: "Acceptance",
    embedded: false
  },
  {
    name: "Vulnerability",
    embedded: false
  },
  {
    name: "Experience",
    embedded: false
  },
  {
    name: "Armor",
    embedded: false
  },
  {
    name: "Boundary",
    embedded: false
  },
  {
    name: "Loyalty",
    embedded: false
  },
  {
    name: "Honor",
    embedded: false
  },
  {
    name: "Strength",
    embedded: false
  },
  {
    name: "Salvation",
    embedded: false
  },
  {
    name: "Hope",
    embedded: false
  },
  {
    name: "Inventory",
    embedded: false
  },
  {
    name: "HigherPower",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/ashby-utting-73eac0/higher-power/step`
});
exports.prisma = new exports.Prisma();
