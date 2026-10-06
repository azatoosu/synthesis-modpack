ServerEvents.recipes(event => {
  event.remove({ id: "ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_barrier" });
  event.remove({ id: "ad_astra:compressor" });
  event.remove({ id: "ad_astra:coal_generator" });
  event.remove({ id: "ad_astra:etrionic_blast_furnace" });
  event.remove({ id: "ad_astra:nasa_workbench" });
  event.remove({ id: "ad_astra:oxygen_gear" });
  event.remove({ id: "ad_astra:fuel_refinery" });
  
  event.shaped(
    "ad_astra:coal_generator",
    [
      "AAA",
      "BCB",
      "AAA"
    ],
    {
      "A": "modern_industrialization:aluminum_ingot",
      "B": "minecraft:coal_block",
      "C": "minecraft:furnace"
    }
  );

  event.shaped(
    "ad_astra:etrionic_blast_furnace",
    [
      "AAA",
      "BCB",
      "AAA"
    ],
    {
      "A": "modern_industrialization:aluminum_plate",
      "B": "minecraft:redstone",
      "C": "modern_industrialization:steel_furnace"
    }
  );

  event.recipes.create.mechanical_crafting(
    "ad_astra:nasa_workbench",
    [
      "AABAA",
      "CDEDC",
      "CCFCC"
    ],
    {
      A: "create:deployer",
      B: "computercraft:computer_advanced",
      C: "modern_industrialization:aluminum_plate",
      D: "#ad_astra:iron_rods",
      E: "create:mechanical_crafter",
      F: "minecraft:netherite_block"
    }
  );

  event.shaped(
    "ad_astra:oxygen_gear",
    [
      " A ",
      "BAB",
      "BAB"
    ],
    {
      "A": "ad_astra:steel_rod",
      "B": "modern_industrialization:aluminum_plate"
    }
  );

  event.recipes.create.mechanical_crafting(
    "ad_astra:fuel_refinery",
    [
      "AABAA",
      "ACCCA",
      "ACDCA",
      "AADAA"
    ],
    {
      A: "modern_industrialization:aluminum_plate",
      B: "minecraft:furnace",
      C: "#ad_astra:steel_plates",
      D: "minecraft:bucket"
    }
  );
});