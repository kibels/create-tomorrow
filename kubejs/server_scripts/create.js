onEvent('recipes', event => {
  event.recipes.createSplashing('farmersdelight:raw_pasta','minecraft:wheat');

  event.recipes.createMechanicalCrafting('angelring:itemring', [
    'RGGGR',
    'GDBDG',
    'GBEBG',
    'GDBDG',
    'RGGGR'
    ], {
      D: 'minecraft:diamond',
      B: 'minecraft:diamond_block',
      E: 'minecraft:elytra',
      R: 'minecraft:blaze_rod',
      G: 'minecraft:gold_block'
    })
});