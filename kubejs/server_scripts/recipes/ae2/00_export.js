ServerEvents.recipes(event => {
  event.remove({ id: "ae2:network/blocks/crystal_processing_charger" });
  event.remove({ id: "ae2:network/blocks/inscribers" });
  event.remove({ id: "ae2:network/cells/item_storage_components_cell_16k_part" });
  event.remove({ id: "ae2:network/cells/item_storage_components_cell_64k_part" });
  event.remove({ id: "ae2:network/cells/item_storage_components_cell_256k_part" });
  event.remove({ id: "ae2:network/parts/terminals_crafting" });
  event.remove({ id: "ae2:network/crafting/molecular_assembler" });
  event.remove({ id: "ae2:network/blocks/pattern_providers_interface" });
  event.remove({ id: "ae2:network/wireless_terminal" });
  event.remove({ id: "ae2:network/wireless_access_point" });
  event.remove({ id: "ae2:network/wireless_crafting_terminal" });
  event.remove({ id: "ae2:network/upgrade_wireless_crafting_terminal" });
  event.remove({ id: "ae2:network/wireless_part" });
  event.remove({ id: "ae2:network/blocks/quantum_ring" });
  event.remove({ id: "ae2:network/blocks/quantum_link" });

  event.shaped(
    "ae2:charger",
    [
      "ABA",
      " C ",
      "ABA"
    ],
    {
      "A": "#c:ingots/iron",
      "B": "modern_industrialization:aluminum_plate",
      "C": "modern_industrialization:aluminum_ingot"
    }
  );

  event.shaped(
    "ae2:inscriber",
    [
      "ABA",
      "A A",
      "ABA"
    ],
    {
      "A": "modern_industrialization:aluminum_plate",
      "B": "minecraft:piston"
    }
  );

  event.shaped(
    "ae2:cell_component_16k",
    [
      "ABA",
      "CDC",
      "ACA"
    ],
    {
      "A": "ad_astra:desh_plate",
      "B": "ae2:calculation_processor",
      "C": "ae2:cell_component_4k",
      "D": "ae2:quartz_glass"
    }
  );

  event.shaped(
    "ae2:cell_component_64k",
    [
      "ABA",
      "CDC",
      "ACA"
    ],
    {
      "A": "ad_astra:ostrum_plate",
      "B": "ae2:calculation_processor",
      "C": "ae2:cell_component_16k",
      "D": "ae2:quartz_glass"
    }
  );

  event.shaped(
    "ae2:cell_component_256k",
    [
      "ABA",
      "CDC",
      "ACA"
    ],
    {
      "A": "#c:dusts/sky_stone",
      "B": "ae2:calculation_processor",
      "C": "ae2:cell_component_64k",
      "D": "ad_astra:calorite_block"
    }
  );

  event.shapeless(
    "ae2:crafting_terminal",
    [
      "ae2:terminal",
      "minecraft:crafting_table",
      "ae2:calculation_processor",
      "ad_astra:desh_plate",
      "ad_astra:desh_plate",
      "ad_astra:desh_plate"
    ]
  );

  event.shaped(
    "ae2:molecular_assembler",
    [
      "ABA",
      "CDE",
      "ABA"
    ],
    {
      "A": "ad_astra:desh_plate",
      "B": "ae2:quartz_glass",
      "C": "ae2:annihilation_core",
      "D": "minecraft:crafting_table",
      "E": "ae2:formation_core"
    }
  );

  event.shaped(
    "ae2:pattern_provider",
    [
      "ABA",
      "C D",
      "ABA"
    ],
    {
      "A": "ad_astra:desh_plate",
      "B": "minecraft:crafting_table",
      "C": "ae2:annihilation_core",
      "D": "ae2:formation_core"
    }
  );

  event.shaped(
    "ae2:wireless_terminal",
    [
      "ABC",
      "DDD"
    ],
    {
      "A": "ae2:wireless_receiver",
      "B": "ae2:terminal",
      "C": "ae2:dense_energy_cell",
      "D": "ad_astra:ostrum_plate"
    }
  );

  event.shaped(
    "ae2:wireless_access_point",
    [
      "ABC",
      "DDD"
    ],
    {
      "A": "ae2:wireless_receiver",
      "B": "ae2:calculation_processor",
      "C": "ae2:fluix_glass_cable",
      "D": "ad_astra:ostrum_plate"
    }
  );

  event.shaped(
    "ae2:wireless_crafting_terminal",
    [
      "ABC",
      "DDD"
    ],
    {
      "A": "ae2:wireless_receiver",
      "B": "ae2:crafting_terminal",
      "C": "ae2:dense_energy_cell",
      "D": "ad_astra:ostrum_plate"
    }
  );

  event.shapeless(
    "ae2:wireless_crafting_terminal",
    [
      "ae2:wireless_terminal",
      "minecraft:crafting_table",
      "ae2:calculation_processor",
      "ad_astra:ostrum_plate",
      "ad_astra:ostrum_plate",
      "ad_astra:ostrum_plate"
    ]
  );

  event.shaped(
    "ae2:wireless_receiver",
    [
      "ABA",
      "CDC",
      "ACA"
    ],
    {
      "A": "ad_astra:ostrum_plate",
      "B": "ae2:fluix_pearl",
      "C": "#c:ingots/iron",
      "D": "ae2:quartz_fiber"
    }
  );

  event.shaped(
    "ae2:quantum_ring",
    [
      "ABA",
      "CDE",
      "ABA"
    ],
    {
      "A": "ad_astra:calorite_ingot",
      "B": "ae2:logic_processor",
      "C": "ae2:engineering_processor",
      "D": "ae2:energy_cell",
      "E": "#ae2:smart_dense_cable"
    }
  );

  event.shaped(
    "ae2:quantum_link",
    [
      "ABA",
      "BCB",
      "ABA"
    ],
    {
      "A": "ae2:quartz_glass",
      "B": "ae2:fluix_pearl",
      "C": "ad_astra:calorite_block"
    }
  );
});