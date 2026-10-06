ServerEvents.recipes(event => {
  event.remove({ id: "powergrid:generator_induction_rotor" });
  event.remove({ id: "powergrid:generator_large_induction_rotor" });
  event.remove({ id: "powergrid:generator_commutator" });
  event.remove({ id: "powergrid:generator_clutch" });

  event.recipes.create.mechanical_crafting(
    "powergrid:generator_induction_rotor",
    [
      "ABA",
      "BCB",
      "ABA"
    ],
    {
      A: "modern_industrialization:steel_ingot",
      B: "#c:copper_coils",
      C: "create:shaft"
    }
  );

  event.recipes.create.mechanical_crafting(
    "powergrid:generator_large_induction_rotor",
    [
      " ABA ",
      " CDC ",
      "BDEDB",
      " CDC ",
      " ABA "
    ],
    {
      A: "modern_industrialization:steel_ingot",
      B: "#c:plates/iron",
      C: "create:andesite_alloy",
      D: "#c:copper_coils",
      E: "powergrid:generator_induction_rotor"
    }
  );

  event.recipes.create.mechanical_crafting(
    "powergrid:generator_commutator",
    [
      "ABA",
      "CDC",
      "EFE",
      "AGA"
    ],
    {
      A: "modern_industrialization:steel_ingot",
      B: "powergrid:pins",
      C: "#minecraft:coals",
      D: "create:andesite_casing",
      E: "create:andesite_alloy",
      F: "create:shaft",
      G: "#c:plates/copper"
    }
  );

  event.recipes.create.mechanical_crafting(
    "powergrid:generator_clutch",
    [
      "ABC"
    ],
    {
      A: "modern_industrialization:steel_ingot",
      B: "create:clutch",
      C: "create:andesite_alloy"
    }
  );
});