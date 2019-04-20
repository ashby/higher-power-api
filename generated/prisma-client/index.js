"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Has",
    embedded: false
  },
  {
    name: "Characters",
    embedded: false
  },
  {
    name: "Congregant",
    embedded: false
  },
  {
    name: "Genie",
    embedded: false
  },
  {
    name: "Guardian",
    embedded: false
  },
  {
    name: "Martyr",
    embedded: false
  },
  {
    name: "Paladin",
    embedded: false
  },
  {
    name: "Seeker",
    embedded: false
  },
  {
    name: "Self",
    embedded: false
  },
  {
    name: "Smith",
    embedded: false
  },
  {
    name: "Summoner",
    embedded: false
  },
  {
    name: "Victim",
    embedded: false
  },
  {
    name: "Volunteer",
    embedded: false
  },
  {
    name: "Act",
    embedded: false
  },
  {
    name: "Affliction",
    embedded: false
  },
  {
    name: "Body",
    embedded: false
  },
  {
    name: "Construct",
    embedded: false
  },
  {
    name: "Oath",
    embedded: false
  },
  {
    name: "Shield",
    embedded: false
  },
  {
    name: "Stigmata",
    embedded: false
  },
  {
    name: "Virtue",
    embedded: false
  },
  {
    name: "Wish",
    embedded: false
  },
  {
    name: "Brain",
    embedded: false
  },
  {
    name: "Campaign",
    embedded: false
  },
  {
    name: "Confusion",
    embedded: false
  },
  {
    name: "Cross",
    embedded: false
  },
  {
    name: "Crown",
    embedded: false
  },
  {
    name: "Crusade",
    embedded: false
  },
  {
    name: "Delirium",
    embedded: false
  },
  {
    name: "Denial",
    embedded: false
  },
  {
    name: "Dream",
    embedded: false
  },
  {
    name: "Face",
    embedded: false
  },
  {
    name: "Gash",
    embedded: false
  },
  {
    name: "Gate",
    embedded: false
  },
  {
    name: "Gut",
    embedded: false
  },
  {
    name: "Heart",
    embedded: false
  },
  {
    name: "Infection",
    embedded: false
  },
  {
    name: "Love",
    embedded: false
  },
  {
    name: "Mind",
    embedded: false
  },
  {
    name: "Mouth",
    embedded: false
  },
  {
    name: "Nail",
    embedded: false
  },
  {
    name: "Nightmare",
    embedded: false
  },
  {
    name: "Pledge",
    embedded: false
  },
  {
    name: "Sacrifice",
    embedded: false
  },
  {
    name: "Sarcasm",
    embedded: false
  },
  {
    name: "Scar",
    embedded: false
  },
  {
    name: "Service",
    embedded: false
  },
  {
    name: "Silence",
    embedded: false
  },
  {
    name: "Skin",
    embedded: false
  },
  {
    name: "Soul",
    embedded: false
  },
  {
    name: "Sternum",
    embedded: false
  },
  {
    name: "Support",
    embedded: false
  },
  {
    name: "Tower",
    embedded: false
  },
  {
    name: "Tremor",
    embedded: false
  },
  {
    name: "Wall",
    embedded: false
  },
  {
    name: "Defect",
    embedded: false
  },
  {
    name: "Discontent",
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
    name: "Experience",
    embedded: false
  },
  {
    name: "Strength",
    embedded: false
  },
  {
    name: "Hope",
    embedded: false
  },
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
    name: "Gratitude",
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
    name: "Salvation",
    embedded: false
  },
  {
    name: "Fun",
    embedded: false
  },
  {
    name: "Joy",
    embedded: false
  },
  {
    name: "Irritability",
    embedded: false
  },
  {
    name: "Impatience",
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
