ServerEvents.recipes(event => {
  event.remove({ id: "create:crafting/kinetics/mechanical_crafter" });

  event.shaped(
    "2x create:mechanical_crafter",
    [
      " A ",
      " B ",
      "CDC"
    ],
    {
      "A": "create:electron_tube",
      "B": "create:brass_casing",
      "C": "minecraft:crafter",
      "D": "create:precision_mechanism"
    }
  );
});