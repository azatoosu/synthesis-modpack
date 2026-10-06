ServerEvents.recipes(event => {
  event.remove({ id: "createnuclear:mixing/steel" });
  event.remove({ id: "createnuclear:crafting/steel_nugget_from_decompacting" });
  event.remove({ id: "createnuclear:crafting/crafting/steel_nugget_from_decompacting" });
  event.remove({ id: "createnuclear:crafting/crafting/steel_ingot_from_compacting" });

  event.remove({ id: "createbigcannons:mixing/alloy_steel" });
  event.remove({ id: "createbigcannons:compacting/forge_steel_ingot" });
  event.remove({ id: "createbigcannons:steel_ingot_from_nuggets" });
  event.remove({ id: "createbigcannons:steel_ingot_from_nuggets" });

  event.remove({ id: "ad_astra:steel_ingot" });
  event.remove({ id: "ad_astra:steel_ingot" });

  event.remove({ id: "modern_industrialization:materials/steel/craft/ingot_from_nugget" });
});
