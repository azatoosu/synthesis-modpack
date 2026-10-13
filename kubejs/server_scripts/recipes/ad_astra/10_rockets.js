ServerEvents.recipes(event => {
    event.remove({type: 'ad_astra:nasa_workbench'});

    event.custom({
        type: 'ad_astra:nasa_workbench',
        ingredients: [
            { item: 'ad_astra:rocket_nose_cone' },

            { tag: 'ad_astra:steel_blocks' },
            { tag: 'ad_astra:steel_blocks' },
            { tag: 'ad_astra:steel_blocks' },
            { tag: 'ad_astra:steel_blocks' },
            { tag: 'ad_astra:steel_blocks' },
            { tag: 'ad_astra:steel_blocks' },

            { item: 'ad_astra:rocket_fin' },
            { item: 'ad_astra:steel_tank' },
            { item: 'ad_astra:steel_tank' },
            { item: 'ad_astra:rocket_fin' },
            { item: 'ad_astra:rocket_fin' },
            { item: 'ad_astra:steel_engine' },
            { item: 'ad_astra:rocket_fin' }
        ],
        result: {
            count: 1,
            id: 'ad_astra:tier_1_rocket'
        }
    });

    event.custom({
        type: 'ad_astra:nasa_workbench',
        ingredients: [
            { item: 'ad_astra:rocket_nose_cone' },

            { item: 'modern_industrialization:aluminum_block' },
            { item: 'modern_industrialization:aluminum_block' },
            { item: 'modern_industrialization:aluminum_block' },
            { item: 'modern_industrialization:aluminum_block' },
            { item: 'modern_industrialization:aluminum_block' },
            { item: 'modern_industrialization:aluminum_block' },

            { item: 'ad_astra:rocket_fin' },
            { item: 'ad_astra:steel_tank' },
            { item: 'ad_astra:steel_tank' },
            { item: 'ad_astra:rocket_fin' },
            { item: 'ad_astra:rocket_fin' },
            { item: 'ad_astra:steel_engine' },
            { item: 'ad_astra:rocket_fin' }
        ],
        result: {
            count: 1,
            id: 'ad_astra:tier_2_rocket'
        }
    });

    event.custom({
        type: 'ad_astra:nasa_workbench',
        ingredients: [
            { item: 'ad_astra:rocket_nose_cone' },

            { tag: 'ad_astra:desh_blocks' },
            { tag: 'ad_astra:desh_blocks' },
            { tag: 'ad_astra:desh_blocks' },
            { tag: 'ad_astra:desh_blocks' },
            { tag: 'ad_astra:desh_blocks' },
            { tag: 'ad_astra:desh_blocks' },

            { item: 'ad_astra:rocket_fin' },
            { item: 'ad_astra:desh_tank' },
            { item: 'ad_astra:desh_tank' },
            { item: 'ad_astra:rocket_fin' },
            { item: 'ad_astra:rocket_fin' },
            { item: 'ad_astra:desh_engine' },
            { item: 'ad_astra:rocket_fin' }
        ],
        result: {
            count: 1,
            id: 'ad_astra:tier_3_rocket'
        }
    });

    event.custom({
        type: 'ad_astra:nasa_workbench',
        ingredients: [
            { item: 'ad_astra:rocket_nose_cone' },

            { tag: 'ad_astra:ostrum_blocks' },
            { tag: 'ad_astra:ostrum_blocks' },
            { tag: 'ad_astra:ostrum_blocks' },
            { tag: 'ad_astra:ostrum_blocks' },
            { tag: 'ad_astra:ostrum_blocks' },
            { tag: 'ad_astra:ostrum_blocks' },

            { item: 'ad_astra:rocket_fin' },
            { item: 'ad_astra:calorite_tank' },
            { item: 'ad_astra:calorite_tank' },
            { item: 'ad_astra:rocket_fin' },
            { item: 'ad_astra:rocket_fin' },
            { item: 'ad_astra:calorite_engine' },
            { item: 'ad_astra:rocket_fin' }
        ],
        result: {
            count: 1,
            id: 'ad_astra:tier_4_rocket'
        }
    });
});