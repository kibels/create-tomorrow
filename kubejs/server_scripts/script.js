// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
  event.remove({output: 'angelring:itemring'});
  event.remove({output: 'angelring:itemdiamondring'});

  event.shaped('easypaxellite:copper_paxel', [
    'CCC',
    'CS ',
    ' S '
    ], {
      C: 'minecraft:copper_ingot',
      S: '#forge:rods/wooden'
    });

  event.shaped('8x minecraft:stick', [
    'L  ',
    'L  ',
    '   '
    ], {
      L: '#minecraft:logs'
    });

  event.blasting('minecraft:leather','minecraft:rotten_flesh');

  event.shapeless('farmersdelight:cabbage_seeds','farmersdelight:cabbage');
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})