ServerEvents.recipes(event => {
  event.remove({ id: "modern_industrialization:steam_age/bronze/boiler_asbl" });
  event.remove({ id: "modern_industrialization:steam_age/bronze/compressor_asbl" });
  event.remove({ id: "modern_industrialization:steam_age/bronze/mixer_asbl" });
  event.remove({ id: "modern_industrialization:steam_age/bronze/macerator_asbl" });
  event.remove({ id: "modern_industrialization:steam_age/bronze/furnace_asbl" });
  event.remove({ id: "modern_industrialization:steam_age/bronze/water_pump_asbl" });
  event.remove({ id: "modern_industrialization:steam_age/fireclay/steam_blast_furnace" });
  event.remove({ id: "modern_industrialization:steam_age/steel/quarry_asbl" });
  event.remove({ id: "modern_industrialization:electric_age/machine/large_steam_boiler_asbl" });
  event.remove({ id: "modern_industrialization:electric_age/machine/electric_blast_furnace_asbl" });

  event.recipes.create.mechanical_crafting(
    "modern_industrialization:bronze_boiler",
    [
      "AABAA",
      "AACAA",
      "ADDDA",
      "DDDDD"
    ],
    {
      A: "#c:plates/bronze",
      B: "modern_industrialization:bronze_tank",
      C: "minecraft:furnace",
      D: "modern_industrialization:fire_clay_bricks"
    }
  );

  event.recipes.create.mechanical_crafting(
    "modern_industrialization:bronze_compressor",
    [
      "ABA",
      "CDC",
      "EEE"
    ],
    {
      A: "#c:rods/copper",
      B: "modern_industrialization:forge_hammer",
      C: "#c:gears/copper",
      D: "modern_industrialization:bronze_machine_casing",
      E: "#modern_industrialization:fluid_pipes"
    }
  );

  event.recipes.create.mechanical_crafting(
    "modern_industrialization:bronze_mixer",
    [
      "ABA",
      "CDC",
      "EEE"
    ],
    {
      A: "#c:glass_blocks",
      B: "#c:gears/copper",
      C: "modern_industrialization:copper_rotor",
      D: "modern_industrialization:bronze_machine_casing",
      E: "#modern_industrialization:fluid_pipes"
    }
  );

  event.recipes.create.mechanical_crafting(
    "modern_industrialization:bronze_macerator",
    [
      "ABA",
      "BCB",
      "DDD"
    ],
    {
      A: "minecraft:diamond",
      B: "#c:gears/copper",
      C: "modern_industrialization:bronze_machine_casing",
      D: "#modern_industrialization:fluid_pipes"
    }
  );

  event.recipes.create.mechanical_crafting(
    "modern_industrialization:bronze_furnace",
    [
      "AAA",
      "ABA",
      "CCC"
    ],
    {
      A: "#c:plates/bronze",
      B: "minecraft:furnace",
      C: "modern_industrialization:fire_clay_bricks"
    }
  );

  event.recipes.create.mechanical_crafting(
    "modern_industrialization:bronze_water_pump",
    [
      "ABA",
      "CDC",
      "EEE"
    ],
    {
      A: "modern_industrialization:copper_rotor",
      B: "modern_industrialization:bronze_tank",
      C: "#c:gears/copper",
      D: "modern_industrialization:bronze_machine_casing",
      E: "#modern_industrialization:fluid_pipes"
    }
  );

  event.recipes.create.mechanical_crafting(
    "modern_industrialization:steam_blast_furnace",
    [
      "AAAAA",
      "AAAAA",
      "AABAA",
      "AAAAA",
      "AAAAA"
    ],
    {
      A: "modern_industrialization:fire_clay_bricks",
      B: "minecraft:blast_furnace"
    }
  );

  event.recipes.create.mechanical_crafting(
    "modern_industrialization:steam_quarry",
    [
      "AABAA",
      "CDEDC",
      "AACAA",
      "DEDED"
    ],
    {
      A: "modern_industrialization:steel_large_plate",
      B: "#modern_industrialization:item_pipes",
      C: "modern_industrialization:steel_machine_casing",
      D: "#c:gears/steel",
      E: "modern_industrialization:invar_rotary_blade"
    }
  );

  event.recipes.create.mechanical_crafting(
    "modern_industrialization:large_steam_boiler",
    [
      "AAA",
      "BCB",
      "DAD"
    ],
    {
      A: "modern_industrialization:bronze_plated_bricks",
      B: "modern_industrialization:analog_circuit",
      C: "modern_industrialization:bronze_boiler",
      D: "modern_industrialization:bronze_curved_plate"
    }
  );

  event.recipes.create.mechanical_crafting(
    "modern_industrialization:electric_blast_furnace",
    [
      "AAA",
      "ABA",
      "ACA"
    ],
    {
      A: "modern_industrialization:cupronickel_wire_magnetic",
      B: "minecraft:blast_furnace",
      C: "modern_industrialization:basic_machine_hull"
    }
  );
});