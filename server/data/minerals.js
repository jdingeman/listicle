const mineralData = [
    {
        "id": 1,
        "name": "Quartz",
        "description": "A clear crystal commonly found in caves and mines.",
        "sellPrice": "25g",
        "location": ["Garbage Can", "Stone Golem"],
        "usedIn": ["Geologist's Bundle", "Refined Quartz", "Fish Pond (Quest)"],
        "image": "https://stardewvalleywiki.com/mediawiki/images/c/cf/Quartz.png"
    },
    {
        "id": 2,
        "name": "Earth Crystal",
        "description": "A resinous substance found near the surface.",
        "sellPrice": "50g",
        "location": ["Duggy", "Haunted Skull", "Fishing Treasure Chest",
            "Panning", "Geode", "Omni Geode", "Garbage Can"],
        "usedIn": ["Geologist's Bundle", "Earth Obelisk", "Mayonnaise Machine", "Fish Pond (Quest)"],
        "image": "https://stardewvalleywiki.com/mediawiki/images/7/74/Earth_Crystal.png"
    },
    {
        "id": 3,
        "name": "Frozen Tear",
        "description": "A crystal fabled to be the frozen tears of a yeti.",
        "sellPrice": "75g",
        "location": ["Fishing Treasure Chest", "Panning", "Frozen Geode", "Omni Geode",
            "Dust Sprite", "Garbage Can"],
        "usedIn": ["Geologist's Bundle", "Warrior Ring", "Sebastian (Loved Gift)", "Fish Pond (Quest)"],
        "image": "https://stardewvalleywiki.com/mediawiki/images/e/ec/Frozen_Tear.png"
    },
    {
        "id": 4,
        "name": "Fire Quartz",
        "description": "A glowing red crystal commonly found near hot lava.",
        "sellPrice": "100g",
        "location": ["Fishing Treasure Chest", "Panning", "Magma Geode", "Omni Geode",
            "Garbage Can"],
        "usedIn": ["Geologist's Bundle", "Slime Egg-Press", "Refined Quartz", "Fish Pond (Quest)"],
        "image": "https://stardewvalleywiki.com/mediawiki/images/5/5b/Fire_Quartz.png"
    },
    {
        "id": 5,
        "name": "Emerald",
        "description": "A precious stone with a brilliant green color.",
        "sellPrice": "250g",
        "location": ["Emerald Node", "Gem Node", "Dwarvish Sentry", "Panning", "Garbage Can", "Fishing Treasure Chest"],
        "usedIn": ["Clint (Loved Gift)", "Dwarf (Loved Gift)", "Emily (Loved Gift)", "Penny (Loved Gift)", "Fish Pond (Quest)", "Forge weapons"],
        "image": "https://stardewvalleywiki.com/mediawiki/images/6/6a/Emerald.png"
    },
    {
        "id": 6,
        "name": "Aquamarine",
        "description": "A shimmery blue-green gem.",
        "sellPrice": "180g",
        "location": ["Aquamarine Node", "Gem Node", "Dwarvish Sentry", "Panning", "Garbage Can", "Fishing Treasure Chest"],
        "usedIn": ["Dye Bundle", "Clint (Loved Gift)", "Dwarf (Loved Gift)", "Emily (Loved Gift)", "Marble Brazier", "Fish Pond (Quest)", "Forge weapons"],
        "image": "https://stardewvalleywiki.com/mediawiki/images/a/a2/Aquamarine.png"
    },
    {
        "id": 7,
        "name": "Ruby",
        "description": "A precious stone that is sough after for its rich color and beautiful luster",
        "sellPrice": "250g",
        "location": ["Ruby Node", "Gem Node", "Dwarvish Sentry", "Panning", "Garbage Can", "Fishing Treasure Chest", "Feast of the Winter Star"],
        "usedIn": ["Clint (Loved Gift)", "Dwarf (Loved Gift)", "Emily (Loved Gift)", "Forge weapons"],
        "image": "https://stardewvalleywiki.com/mediawiki/images/a/a9/Ruby.png"
    },
    {
        "id": 8,
        "name": "Amethyst",
        "description": "A purple variant of quartz.",
        "sellPrice": "100g",
        "location": ["Amethyst Node", "Gem Node", "Green Slimes", "Dwarvish Sentry", "Panning", "Garbage Can", "Fishing Treasure Chest"],
        "usedIn": ["Abigail (Loved Gift)", "Clint (Loved Gift)", "Dwarf (Loved Gift)", "Emily (Loved Gift)", "Fish Pond (Quest)", "Forge weapons"],
        "image": "https://stardewvalleywiki.com/mediawiki/images/2/2e/Amethyst.png"
    },
    {
        "id": 9,
        "name": "Topaz",
        "description": "Fairly common but still prized for its beauty.",
        "sellPrice": "80g",
        "location": ["Topaz Node", "Gem Node", "Dwarvish Sentry", "Panning", "Garbage Can", "Fishing Treasure Chest"],
        "usedIn": ["Clint (Loved Gift)", "Dwarf (Loved Gift)", "Emily (Loved Gift)", "Fish Pond (Quest)", "Forge weapons"],
        "image": "https://stardewvalleywiki.com/mediawiki/images/a/a5/Topaz.png"
    },
    {
        "id": 10,
        "name": "Jade",
        "description": "A pale green ornamental stone.",
        "sellPrice": "200g",
        "location": ["Jade Node", "Gem Node", "Blue Slimes", "Dwarvish Sentry", "Panning", "Garbage Can", "Feast of the Winter Star"],
        "usedIn": ["Clint (Loved Gift)", "Dwarf (Loved Gift)", "Emily (Loved Gift)", "Fish Pond (Quest)", "Forge weapons"],
        "image": "https://stardewvalleywiki.com/mediawiki/images/7/7e/Jade.png"
    },
    {
        "id": 11,
        "name": "Diamond",
        "description": "A rare and valuable gem.",
        "sellPrice": "750g",
        "location": ["Diamond Node", "Gem Node", "Dwarvish Sentry", "Panning", "Garbage Can", "Fishing Treasure Chest", "Any monster after reaching the bottom of the mines"],
        "usedIn": ["Ring of Yoba", "Geode Crusher", "Fairy Dust", "Evelyn (Loved Gift)", "Gus (Loved gift)", "Jodi (Loved Gift)", "Krobus (Loved Gift)", "Marnie (Loved Gift)", "Maru (Loved Gift)", "Penny (Loved Gift)", "Willy (Loved Gift)", "Fish Pond (Quest)", "Forge weapons"],
        "image": "https://stardewvalleywiki.com/mediawiki/images/e/ea/Diamond.png"
    },
    {
        "id": 12,
        "name": "Prismatic Shard",
        "description": "A very rare and powerful substance with unknown origins.",
        "sellPrice": "2,000g",
        "location": ["Iridium Node", "Mystic Stone", "Omni Geode", "Shadow Brute", "Shadow Shaman", "Mummy", "Serpent", "Fishing Treasure Chest", "Any monster after reaching the bottom of the mines"],
        "usedIn": ["Loved by all Villagers except Haley", "Obtain the Galaxy Sword in the Desert", "Transform children into doves at the Dark Shrine of Selfishness", "Enchant tools and weapons"],
        "image": "https://stardewvalleywiki.com/mediawiki/images/5/56/Prismatic_Shard.png"
    },
]

export default mineralData