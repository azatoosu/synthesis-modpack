ServerEvents.recipes(event => {
  event.remove({ id: "computercraft:computer_normal" });
  event.remove({ id: "computercraft:computer_advanced" });
  event.remove({ id: "computercraft:computer_advanced_upgrade" });
  event.remove({ id: "computercraft:computer_command" });
  event.remove({ id: "computercraft:monitor_normal" });
  event.remove({ id: "computercraft:monitor_advanced" });

  event.recipes.create.mechanical_crafting(
    "computercraft:computer_normal",
    [
      "ABA",
      "ACA",
      "AAA"
    ],
    {
      A: "modern_industrialization:aluminum_ingot",
      B: "#c:dusts/redstone",
      C: "#c:glass_panes"
    }
  );

  event.recipes.create.mechanical_crafting(
    "computercraft:computer_advanced",
    [
      " ABA ",
      "ABCBA",
      " AAA "
    ],
    {
      A: "#c:ingots/gold",
      B: "modern_industrialization:aluminum_ingot",
      C: "computercraft:computer_normal"
    }
  );

  event.shaped(
    "computercraft:computer_command",
    [
      "AAA",
      "ABA",
      "ACA"
    ],
    {
      "A": "#c:ingots/gold",
      "B": "computercraft:computer_normal",
      "C": "#c:glass_panes"
    }
  );

  event.shaped(
    "computercraft:monitor_normal",
    [
      "AAA",
      "ABA",
      "AAA"
    ],
    {
      "A": "modern_industrialization:aluminum_ingot",
      "B": "#c:glass_panes"
    }
  );

  event.shaped(
    "4x computercraft:monitor_advanced",
    [
      "AAA",
      "ABA",
      "AAA"
    ],
    {
      "A": "#c:ingots/gold",
      "B": "computercraft:monitor_normal"
    }
  );
});