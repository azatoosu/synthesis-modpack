ServerEvents.recipes(event => {
  event.remove({ id: "cyberspace:synthetic_capsule_recipe" });
  event.remove({ id: "cyberspace:terminal_recipe" });
  event.remove({ id: "cyberspace:virtual_machine_core_recipe" });

  event.recipes.create.mechanical_crafting(
    "cyberspace:synthetic_capsule",
    [
      "ABBBA",
      "ACBCA",
      "ACDCA",
      "ACBCA",
      "ABBBA"
    ],
    {
      A: "modern_industrialization:aluminum_plate",
      B: "cyberspace:graphene_mesh",
      C: "ad_astra:calorite_ingot",
      D: "extended_industrialization:phosphoric_acid_bucket"
    }
  );

  event.recipes.create.mechanical_crafting(
    "cyberspace:terminal",
    [
      "ABA",
      "ACA",
      "DED",
      "BBB"
    ],
    {
      A: "ad_astra:calorite_ingot",
      B: "cyberspace:graphene_coated_iron_ingot",
      C: "minecraft:glass",
      D: "minecraft:redstone",
      E: "computercraft:computer_advanced"
    }
  );

  event.shaped(
    "cyberspace:virtual_machine_core",
    [
      "ABA",
      "ACA",
      "DED"
    ],
    {
      "A": "cyberspace:graphene_coated_iron_ingot",
      "B": "ad_astra:calorite_ingot",
      "C": "ae2:quantum_ring",
      "D": "ae2:cell_component_256k",
      "E": "ae2:spatial_cell_component_128"
    }
  );
});