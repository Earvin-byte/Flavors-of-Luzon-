

const regions = [
    {
        name: "Ilocos Region",
        shortName: "Ilocos Region",
        slug: "ilocos",
        image: "assets/images/regions/ilocos.jpg",
        description: "Coastal and farm cooking from Ilocos Norte, Ilocos Sur, La Union, and Pangasinan.",
        intro: "Home-cooked dishes native to the Ilocos Region"
    },
    {
        name: "Cordillera Administrative Region",
        shortName: "Cordillera Admin. Region",
        slug: "cordillera",
        image: "assets/images/regions/cordillera.jpg",
        description: "Highland recipes from the Cordillera, often built around smoked meats and native vegetables.",
        intro: "Home-cooked dishes native to the Cordillera Administrative Region"
    },
    {
        name: "National Capital Region",
        shortName: "NCR",
        slug: "national-capital-region",
        image: "assets/images/regions/ncr.jpg",
        description: "A fast-paced, urban fusion of street-food staples, late-night comfort bowls, and cross-regional classics adapted for city life.",
        intro: "Home-cooked dishes native to the National Capital Region"
    },
    {
        name: "Central Luzon",
        shortName: "Central Luzon",
        slug: "central-luzon",
        image: "assets/images/regions/central-luzon.jpg",
        description: "Kapampangan and Central Luzon comfort food, from festive stews to everyday ulam.",
        intro: "Home-cooked dishes native to the Central Luzon region"
    },
    {
        name: "CALABARZON",
        shortName: "CALABARZON",
        slug: "calabarzon",
        image: "assets/images/regions/calabarzon.jpg",
        description: "Provincial specialties from Cavite, Laguna, Batangas, Rizal, and Quezon.",
        intro: "Home-cooked dishes native to CALABARZON"
    },
    {
        name: "Cagayan Valley",
        shortName: "Cagayan Valley",
        slug: "cagayan-valley",
        image: "assets/images/regions/cagayan-valley.jpg",
        description: "A hearty, heritage-rich culinary landscape of carabeef dishes, garlicky sausages, rich noodle soups, and sweet, coconut-infused rice delicacies.",
        intro: "Home-cooked dishes native to the Cagayan Valley"
    },

    {
        name: "MIMAROPA",
        shortName: "MIMAROPA",
        slug: "mimaropa",
        image: "assets/images/regions/mimaropa.jpg",
        description: "Island cooking from Mindoro, Marinduque, Romblon, and Palawan.",
        intro: "Home-cooked dishes native to MIMAROPA"
    },
    {
        name: "Bicol Region",
        shortName: "Bicol Region",
        slug: "bicol",
        image: "assets/images/regions/bicol.jpg",
        description: "Coconut milk, chili, and coastal flavors that define Bicolano home cooking.",
        intro: "Home-cooked dishes native to the Bicol Region"
    }
];

const dishes = [
    {
        id: "sisig",
        name: "Sisig",
        region: "Central Luzon",
        regionSlug: "central-luzon",
        image: "assets/images/dishes/sisig.jpg",
        description: "Sizzling chopped pork, Pampanga classic",
        history: "A Kapampangan dish born from resourceful cooking, sisig has grown from humble leftover pork parts into one of Central Luzon's most recognizable comfort foods.",
        ingredients: [
            "Pork face & liver",
            "Calamansi",
            "Onions & chili",
            "Mayonnaise",
            "Egg (optional)"
        ],
        instructions: [
            "Boil and grill the pork parts",
            "Chop finely and season",
            "Sizzle on a hot plate with egg on top"
        ]
    },
    {
        id: "kare-kare",
        name: "Kare-Kare",
        region: "Central Luzon",
        regionSlug: "central-luzon",
        image: "assets/images/dishes/kare-kare.jpg",
        description: "Oxtail peanut stew, Central Luzon staple",
        history: "Kare-kare is a peanut-based stew often served at family gatherings in Central Luzon.",
        ingredients: [
            "Oxtail or beef cuts",
            "Ground peanuts or peanut butter",
            "Annatto (atsuete)",
            "Banana heart, eggplant, and string beans",
            "Bagoong alamang, served on the side"
        ],
        instructions: [
            "Simmer the meat until tender",
            "Prepare the peanut sauce and vegetables",
            "Combine, simmer, and serve with bagoong"
        ]
    },
    {
        id: "pindang-damulag",
        name: "Pindang Damulag",
        region: "Central Luzon",
        regionSlug: "central-luzon",
        image: "assets/images/dishes/pindang-damulag.jpg",
        description: "Cured carabao meat, Pampanga specialty",
        history: "Pindang damulag is a Kapampangan-style cured carabao meat often eaten with rice.",
        ingredients: [
            "Carabao meat",
            "Salt and curing spices",
            "Vinegar",
            "Garlic",
            "Cooking oil for frying"
        ],
        instructions: [
            "Cure the meat according to your family method",
            "Slice and pan-fry until browned",
            "Serve with rice and a simple sawsawan"
        ]
    },
    {
        id: "betute",
        name: "Betute",
        region: "Central Luzon",
        regionSlug: "central-luzon",
        image: "assets/images/dishes/betute.jpg",
        description: "Stuffed frog, a Pampanga delicacy",
        history: "Betute (or betute tugak) is a stuffed frog dish associated with Pampanga.",
        ingredients: [
            "Frog (tugak), cleaned",
            "Ground pork stuffing",
            "Garlic, onion, and spices",
            "Oil for frying",
            "Calamansi for serving"
        ],
        instructions: [
            "Prepare and stuff the frog",
            "Fry until crisp and cooked through",
            "Serve hot as a regional specialty"
        ]
    },
    {
        id: "buro",
        name: "Buro",
        region: "Central Luzon",
        regionSlug: "central-luzon",
        image: "assets/images/dishes/buro.jpg",
        description: "Fermented rice with fish, home-style side dish",
        history: "Buro is a fermented rice-and-fish condiment kept in many Central Luzon kitchens.",
        ingredients: [
            "Cooked rice",
            "Freshwater fish",
            "Salt",
            "Angkak (red yeast rice), if used in your version",
            "Mustasa or tomatoes for serving"
        ],
        instructions: [
            "Salt and pack the rice and fish for fermentation",
            "Allow the mixture to ferment safely",
            "Saute a small portion and serve as a side"
        ]
    },
    {
        id: "tocino",
        name: "Tocino",
        region: "Central Luzon",
        regionSlug: "central-luzon",
        image: "assets/images/dishes/tocino.jpg",
        description: "Sweet cured pork, breakfast favorite",
        history: "Sweet pork tocino is widely prepared in Central Luzon homes and often appears in silog breakfasts.",
        ingredients: [
            "Pork shoulder, sliced",
            "Brown sugar",
            "Salt and garlic",
            "Pineapple juice or anise, depending on the recipe",
            "Oil for frying"
        ],
        instructions: [
            "Cure the pork in the sweet mixture",
            "Pan-fry until caramelized",
            "Serve with garlic rice and egg"
        ]
    },
        {
        id: "Pancit Malabon",
        name: "Pancit Malabon",
        region: "National Capital Region",
        regionSlug: "national-capital-region",
        image: "assets/images/dishes/pancit-malabon.jpg",
        description: "Noodle dish with shrimp and vegetables",
        history: "Pancit Malabon is a popular noodle dish in the National Capital Region, often enjoyed as a street food or home-cooked meal.",
        ingredients: [
            "Noodles(Pancit bihon or thick rice sticks)",
            "Cooking oil",
            "Minced garlic and onion",
            "Shrimp, squid, and other seafood",
            "Fish sauce, soy sauce, and calamansi for seasoning",
            "Vegetables like cabbage, carrots, and green beans",
            "Cornstarch slurry for thickening",
            "Hard-boiled eggs and chicharron for garnish"

        ],
        instructions: [
            "Prepare Noodles: Soak the thick rice noodles in water until softened, then boil or blanch according to package directions until cooked through. Drain and set aside.",
            "Make the Sauce: In a pan, sauté garlic and onions in oil. Pour in the shrimp stock, crab fat (aligue), and fish sauce. Bring to a simmer.",
            "Thicken: Stir in the cornstarch mixture gradually until the sauce achieves a thick, gravy-like consistency. Season with salt and pepper to taste.",
            "Assemble: Toss the cooked noodles directly into the sauce until evenly coated and orange. Transfer to a serving platter and generously arrange the shrimp, squid, hard-boiled eggs, smoked fish flakes, and vegetables on top. Garnish with chicharrón and spring onions."
        ]
    },
        {
        id: "Pancit Mami",
        name: "Pancit Mami",
        region: "National Capital Region",
        regionSlug: "national-capital-region",
        image: "assets/images/dishes/pancit-mami.jpg",
        description: "Noodle soup with meat and vegetables",
        history: "Chinese-Filipino egg-noodle soup, popularized in Manila in the early-to-mid 20th century and often credited to Ma Mon Luk.",
        ingredients: [
            "Fresh egg noodles (miki)",
            "chicken or beef with bones",
            "onion, garlic",
            "ginger",
            "soy sauce",
            "fish sauce",
            "pepper, greens, scallions, fried garlic."
        ],
        instructions: [
            "	Simmer the meat and bones with aromatics for 45–60 minutes (longer for beef), then strain and season the broth.",
            "Blanch the noodles and place in bowls with shredded meat and greens.",
            "Ladle over hot broth and top with fried garlic and scallions."
        ]
    },
        {
        id: "Tumbong Soup",
        name: "Tumbong Soup",
        region: "National Capital Region",
        regionSlug: "national-capital-region",
        image: "assets/images/dishes/tumbong-soup.jpg",
        description: "A hearty soup made with various vegetables and meat",
        history: "Tumbong Soup is a traditional Filipino dish. A thrifty, nose-to-tail pork intestine soup from working-class Manila neighborhoods. Its exact origin is not well documented",
        ingredients: [
            "Pork tumbong (large intestine)",
            "coarse salt",
            "vinegar",
            "onion, garlic, and ginger",
            "peppercorns",
            "bay leaf",
            "fish sauce",
            "green papaya or pechay"
        ],
        instructions: [
            "Scrub the intestines with salt and vinegar, rinse well, and boil 10 minutes. Discard the water.",
            "Sauté the aromatics and add the boiled intestines.",
            "Season with fish sauce and simmer until tender.",
            "Add green papaya or pechay and cook until wilted.",
            "Serve hot with garlic rice and a side of egg."
        ]
    },
        {
        id: "Balut",
        name: "Balut",
        region: "National Capital Region",
        regionSlug: "national-capital-region",
        image: "assets/images/dishes/balut.jpg",
        description: "Fertilized duck egg, popular street food",
        history: "A fertilized duck egg, incubated about 17–18 days and boiled. Pateros, a historic duck-raising town, is called the balut capital of the Philippines.",
        ingredients: [
            "Fertilized duck eggs (about 17 days old)",
            "water",
            "Rock salt",
            "Spiced Vinegar (optional, for dipping)",
        ],
        instructions: [
            "Boil the eggs for 20–30 minutes and keep warm",
            "Crack the wide end, sip the broth, and peel",
            "Eat hot with salt or spiced vinegar"
        ]
    },
        {
        id: "Putong Polo",
        name: "Putong Polo",
        region: "National Capital Region",
        regionSlug: "national-capital-region",
        image: "assets/images/dishes/putong-polo.jpg",
        description: "A small, soft, lightly sweet steamed rice cake, a traditional merienda item from Valenzuela.",
        history: "A small, soft, lightly sweet steamed rice cake, a traditional merienda item from Valenzuela.",
        ingredients: [
            "Rice flour",
            "Sugar",
            "Water",
            "baking powder",
            "Salt",
            "Grated coconut (Optional for topping)"
        ],
        instructions: [
            "Mix the dry ingredients and whisk in water to a smooth batter",
            "Fill greased small molds and steam 15–20 minutes",
            "Unmold and serve with grated coconut"
        ]
    },
        {
        id: "Classic Halo-Halo",
        name: "Classic Halo-Halo",
        region: "National Capital Region",
        regionSlug: "national-capital-region",
        image: "assets/images/dishes/classic-halo-halo.jpg",
        description: "A refreshing dessert of mixed sweetened fruits, beans, and shaved ice, topped with leche flan and ube.",
        history: "Grew from a Japanese shaved-ice-and-beans dessert sold in pre-war Manila, and became the country’s signature summer dessert.",
        ingredients: [
            "Shaved ice",
            "evaporated milk ",
            "sweet beans",
            "sago, gulaman, and saba banana",
            "langka, kaong, macapuno, ube halaya, and leche flan",
            "ube ice cream and evaporated milk pinipig"

        ],
        instructions: [
            "Layer the shaved ice, evaporated milk, and sweet beans in a bowl",
            "Add sago, gulaman, and saba banana",
            "Top with langka, kaong, macapuno, ube halaya, and leche flan",
            "Serve with ube ice cream and evaporated milk pinipig"
        ]
    },
    {
        id: "pinakbet",
        name: "Pinakbet",
        region: "Ilocos Region",
        regionSlug: "ilocos",
        image: "assets/images/dishes/pinakbet.jpg",
        description: "Vegetable stew flavored with bagoong",
        history: "Pinakbet is an Ilocano vegetable dish typically seasoned with fermented fish sauce.",
        ingredients: [
            "Bitter melon, eggplant, okra, and squash",
            "Tomatoes and onion",
            "Bagoong isda",
            "Pork bits (optional)",
            "Garlic"
        ],
        instructions: [
            "Saute aromatics and add vegetables",
            "Season with bagoong and simmer",
            "Serve with steamed rice"
        ]
    },
    {
        id: "bagnet",
        name: "Bagnet",
        region: "Ilocos Region",
        regionSlug: "ilocos",
        image: "assets/images/dishes/bagnet.jpg",
        description: "Twice-fried crispy pork belly",
        history: "Bagnet is a twice-cooked pork belly associated with Ilocos home and fiesta tables.",
        ingredients: [
            "Pork belly",
            "Coarse salt",
            "Bay leaves and peppercorns",
            "Oil for deep-frying",
            "Kamatis and bagoong for serving"
        ],
        instructions: [
            "Boil the pork belly until tender",
            "Air-dry, then fry twice until crisp",
            "Chop and serve with tomatoes and bagoong"
        ]
    },
    {
        id: "ilocos-empanada",
        name: "Ilocos Empanada",
        region: "Ilocos Region",
        regionSlug: "ilocos",
        image: "assets/images/dishes/empanada.jpg",
        description: "Orange rice-flour turnover with egg and filling",
        history: "Ilocos empanada is a street and home snack with a rice-flour crust.",
        ingredients: [
            "Rice flour dough, colored with atsuete",
            "Green papaya or cabbage",
            "Ilocos longganisa",
            "Egg",
            "Vinegar dipping sauce"
        ],
        instructions: [
            "Prepare the filling and dough",
            "Fill, fold, and fry until crisp",
            "Serve with sukang Iloko"
        ]
    },
    {
        id: "ilocos-longganisa",
        name: "Ilocos Longganisa",
        region: "Ilocos Region",
        regionSlug: "ilocos",
        image: "assets/images/dishes/longganisa.jpg",
        description: "Garlicky native sausage for breakfast",
        history: "Ilocos longganisa is a garlic-forward native sausage often fried for breakfast.",
        ingredients: [
            "Ground pork",
            "Plenty of garlic",
            "Salt, pepper, and vinegar",
            "Sausage casing or skinless form",
            "Oil for frying"
        ],
        instructions: [
            "Season and form the sausages",
            "Pan-fry until browned",
            "Serve with rice and eggs"
        ]
    },
    {
        id: "pinikpikan",
        name: "Pinikpikan",
        region: "Cordillera Administrative Region",
        regionSlug: "cordillera",
        image: "assets/images/dishes/pinikpikan.jpg",
        description: "Native chicken soup of the Cordillera",
        history: "Pinikpikan is a Cordilleran chicken soup prepared for gatherings.",
        ingredients: [
            "Native chicken",
            "Ginger",
            "Salt",
            "Sayote or native vegetables",
            "Etag (optional)"
        ],
        instructions: [
            "Prepare the chicken according to local practice",
            "Simmer with ginger and vegetables",
            "Season and serve as a communal soup"
        ]
    },
    {
        id: "etag",
        name: "Etag",
        region: "Cordillera Administrative Region",
        regionSlug: "cordillera",
        image: "assets/images/dishes/etag.jpg",
        description: "Salted and smoked Cordillera pork",
        history: "Etag is salted, smoked, or sun-dried pork used as a flavoring meat in Cordillera cooking.",
        ingredients: [
            "Pork",
            "Coarse salt",
            "Smoke or sun-drying, depending on the method",
            "Water for simmering",
            "Vegetables for the accompanying soup"
        ],
        instructions: [
            "Salt and preserve the pork",
            "Slice and simmer a portion with vegetables",
            "Serve as a flavoring meat with rice"
        ]
    },
    {
        id: "binungor",
        name: "Binungor",
        region: "Cordillera Administrative Region",
        regionSlug: "cordillera",
        image: "assets/images/dishes/binungor.jpg",
        description: "Bamboo shoot vegetable dish",
        history: "Binungor is a Kalinga vegetable dish that often uses bamboo shoots.",
        ingredients: [
            "Bamboo shoots",
            "Native vegetables",
            "Ginger and onion",
            "Salt",
            "Optional smoked meat"
        ],
        instructions: [
            "Prepare and rinse the bamboo shoots",
            "Simmer with aromatics and vegetables",
            "Adjust seasoning and serve"
        ]
    },
    {
        id: "pinuneg",
        name: "Pinuneg",
        region: "Cordillera Administrative Region",
        regionSlug: "cordillera",
        image: "assets/images/dishes/pinuneg.jpg",
        description: "Cordillera blood sausage",
        history: "Pinuneg is a blood sausage associated with Cordillera cooking.",
        ingredients: [
            "Pork blood",
            "Rice or ground meat filling",
            "Salt and spices",
            "Casing",
            "Oil or water for cooking"
        ],
        instructions: [
            "Mix and stuff the filling",
            "Cook until set",
            "Slice and serve as a regional specialty"
        ]
    },
    {
        id: "pancit-habhab",
        name: "Pancit Habhab",
        region: "CALABARZON",
        regionSlug: "calabarzon",
        image: "assets/images/dishes/pancit-habhab.jpg",
        description: "Lucban noodle dish eaten from banana leaf",
        history: "Pancit habhab is a Lucban, Quezon noodle dish often eaten from banana leaf.",
        ingredients: [
            "Lucban miki noodles",
            "Pork and shrimp (as preferred)",
            "Vegetables",
            "Soy sauce and vinegar",
            "Banana leaf for serving"
        ],
        instructions: [
            "Saute the meat and vegetables",
            "Toss in the noodles and season",
            "Serve on banana leaf with vinegar"
        ]
    },
    {
        id: "lucban-longganisa",
        name: "Lucban Longganisa",
        region: "CALABARZON",
        regionSlug: "calabarzon",
        image: "assets/images/dishes/lucban-longganisa.jpg",
        description: "Oregano-scented Quezon sausage",
        history: "Lucban longganisa is known for its oregano-forward seasoning.",
        ingredients: [
            "Ground pork",
            "Dried oregano",
            "Garlic, salt, and spices",
            "Pork casing",
            "Oil for frying"
        ],
        instructions: [
            "Season and fill the sausages",
            "Pan-fry until cooked",
            "Serve with rice and vinegar"
        ]
    },
    {
        id: "suman-sa-lihiya",
        name: "Suman sa Lihiya",
        region: "CALABARZON",
        regionSlug: "calabarzon",
        image: "assets/images/dishes/suman-sa-lihiya.jpg",
        description: "Lye-treated glutinous rice wrapped in leaves",
        history: "Suman sa lihiya is a leaf-wrapped rice cake common in Southern Tagalog homes.",
        ingredients: [
            "Glutinous rice",
            "Lye water (lihiya)",
            "Banana leaves",
            "Grated coconut",
            "Sugar for serving"
        ],
        instructions: [
            "Soak and mix the rice with lihiya",
            "Wrap in banana leaves and steam",
            "Serve with coconut and sugar"
        ]
    },
    {
        id: "kesong-puti",
        name: "Kesong Puti",
        region: "CALABARZON",
        regionSlug: "calabarzon",
        image: "assets/images/dishes/kesong-puti.jpg",
        description: "Fresh white carabao cheese",
        history: "Kesong puti is a fresh white cheese associated with Laguna dairying towns.",
        ingredients: [
            "Carabao milk",
            "Salt",
            "Rennet or vinegar, depending on the method",
            "Banana leaf wrapping",
            "Pan de sal for serving"
        ],
        instructions: [
            "Warm the milk and set the curd",
            "Drain, salt, and wrap",
            "Serve fresh with bread or rice"
        ]
    },
        {
        id: "Pawa",
        name: "Pawa",
        region: "Cagayan Valley",
        regionSlug: "cagayan-valley",
        image: "assets/images/dishes/pawa.jpg",
        description: " a steamed bun made of ground sticky rice and filled with ground and sweetened peanuts.",
        history: "Pawa is a popular glutinous-rice dumpling filled with peanut butter and brown sugar, popular with pilgrims visiting the Basilica of Our Lady of Piat.",
        ingredients: [
            "Glutinous rice flour",
            "water",
            "Salt",
            "peanut butter",
            "Brown sugar",
        ],
        instructions: [
            "Knead the flour, salt and warm water into a soft dough",
            "Wrap balls of dough around a filling of peanut butter and brown sugar",
            "Boil until they float, then simmer 2–3 minutes and serve warm"
        ]
    },
        {
        id: "Chicharabao",
        name: "Chicharabao",
        region: "Cagayan Valley",
        regionSlug: "cagayan-valley",
        image: "assets/images/dishes/chicharabao.jpg",
        description: "Crisp chicharon made from carabao skin",
        history: "Crisp chicharon made from carabao skin, a local snack and pasalubong that uses the whole animal.",
        ingredients: [
            "Carabao skin",
            "vinegar",
            "Salt",
            "Oil"
        ],
        instructions: [
            "Clean the skin and boil until tender, then cut into pieces",
            "Dry completely until hard and brittle",
            "Deep-fry in hot oil until puffed and crisp, then season with salt"
        ]
    },
        {
        id: "Pancit Batil Patong",
        name: "Pancit Batil Patong",
        region: "Cagayan Valley",
        regionSlug: "cagayan-valley",
        image: "assets/images/dishes/pancit-batil-patong.jpg",
        description: "Tuguegarao’s signature noodle dish",
        history: "Tuguegarao’s signature noodle dish: miki topped with carabeef or pork and an egg, served with a side of soup. The name is often explained as “beat” and “put on top.”",
        ingredients: [
            "Miki noodles",
            "carabeef or ground pork",
            "garlic, onion, and cabbage",
            "soy sauce and oyster sauce",
            "broth, eggs, and calamansi"
        ],
        instructions: [
            "Brown the meat with garlic and onion, then add vegetables, sauces and broth",
            "Toss in the noodles until tender",
            "Top with a poached or fried egg and serve with egg-drop soup and calamansi"
        ]
    },
        {
        id: "Pancit Cabagan",
        name: "Pancit Cabagan",
        region: "Cagayan Valley",
        regionSlug: "cagayan-valley",
        image: "assets/images/dishes/pancit-cabagan.jpg",
        description: "A traditional noodle dish from Cabagan, Isabela",
        history: "Pancit Cabagan is a traditional noodle dish from Cabagan, Isabela, often served during special occasions and festivals.",
        ingredients: [
            "Thin miki noodles",
            "Pork belly",
            "Pork liver",
            "Quail eggs",
            "Garlic and onion",
            "Soy sauce",
            "Sugar and broth",
            "cornstarch and scallions"
        ],
        instructions: [
            "Boil the pork belly, then crisp it in a wok and chop it",
            "Make a sauce of garlic, onion, soy sauce and broth, thickened with cornstarch",
            "Top the noodles with pork, liver and quail eggs, then pour over the sauce"
        ]
    },
        {
        id: "Ybanag Longganisa",
        name: "Ybanag Longganisa",
        region: "Cagayan Valley",
        regionSlug: "cagayan-valley",
        image: "assets/images/dishes/ybanag-longganisa.jpg",
        description: "Garlic-and-vinegar sausage from Isabela",
        history: "Derived from Spanish longaniza, this Ybanag version is garlicky and slightly sour with vinegar.",
        ingredients: [
            "Ground pork with fat",
            "Lots of garlic",
            "Cane vinegar",
            "Soy sauce, salt, and pepper",
            "Hog casings"
        ],
        instructions: [
            "Mix the ingredients and cure overnight in the refrigerator",
            "Stuff into casings and twist into links, then air-dry",
            "Simmer in a little water until it evaporates, then brown in the rendered fat"
        ]
    },
    {
        id: "adobo-sa-dilaw",
        name: "Adobo sa Dilaw",
        region: "MIMAROPA",
        regionSlug: "mimaropa",
        image: "assets/images/dishes/adobo-sa-dilaw.jpg",
        description: "Turmeric adobo associated with Marinduque",
        history: "Adobo sa dilaw uses turmeric instead of soy sauce and is often linked with Marinduque cooking.",
        ingredients: [
            "Chicken or pork",
            "Fresh turmeric",
            "Vinegar",
            "Garlic and peppercorns",
            "Bay leaves"
        ],
        instructions: [
            "Brown the meat with garlic",
            "Simmer in vinegar and turmeric",
            "Reduce the sauce and serve with rice"
        ]
    },
    {
        id: "kalamay-hati",
        name: "Kalamay Hati",
        region: "MIMAROPA",
        regionSlug: "mimaropa",
        image: "assets/images/dishes/kalamay-hati.jpg",
        description: "Sticky coconut rice cake from Mindoro",
        history: "Kalamay hati is a sticky coconut-and-rice delicacy associated with Oriental Mindoro.",
        ingredients: [
            "Glutinous rice flour or ground malagkit",
            "Coconut milk",
            "Brown sugar",
            "Latik",
            "Banana leaves"
        ],
        instructions: [
            "Cook the coconut-rice mixture until thick",
            "Transfer to a greased or leaf-lined tray",
            "Top with latik and slice to serve"
        ]
    },
    {
        id: "puso-ng-saging",
        name: "Ginataang Puso ng Saging",
        region: "MIMAROPA",
        regionSlug: "mimaropa",
        image: "assets/images/dishes/ginataang-puso-ng-saging.jpg",
        description: "Banana heart cooked in coconut milk",
        history: "Banana heart in coconut milk is a home-style vegetable dish across island kitchens in MIMAROPA.",
        ingredients: [
            "Banana heart, sliced",
            "Coconut milk",
            "Garlic, onion, and ginger",
            "Shrimp or dried fish (optional)",
            "Salt and chili"
        ],
        instructions: [
            "Prepare and squeeze the banana heart",
            "Simmer in coconut milk with aromatics",
            "Season and serve with rice"
        ]
    },
    {
        id: "ginataang-alimango",
        name: "Ginataang Alimango",
        region: "MIMAROPA",
        regionSlug: "mimaropa",
        image: "assets/images/dishes/ginataang-alimango.jpg",
        description: "Crab simmered in coconut milk",
        history: "Ginataang alimango reflects coastal MIMAROPA cooking that pairs crab with coconut milk.",
        ingredients: [
            "Crab, cleaned",
            "Coconut milk",
            "Ginger, garlic, and onion",
            "Green chili",
            "Salt"
        ],
        instructions: [
            "Saute the aromatics",
            "Add crab and coconut milk",
            "Simmer until cooked and serve"
        ]
    },
    {
        id: "bicol-express",
        name: "Bicol Express",
        region: "Bicol Region",
        regionSlug: "bicol",
        image: "assets/images/dishes/bicol-express.jpg",
        description: "Pork in coconut milk and chili",
        history: "Bicol Express is a pork-and-chili dish cooked in coconut milk and closely associated with Bicolano home cooking.",
        ingredients: [
            "Pork belly, sliced",
            "Coconut milk",
            "Bird's eye chili and siling haba",
            "Bagoong alamang",
            "Garlic and onion"
        ],
        instructions: [
            "Saute pork with aromatics",
            "Add coconut milk, bagoong, and chili",
            "Simmer until thick and serve with rice"
        ]
    },
    {
        id: "laing",
        name: "Laing",
        region: "Bicol Region",
        regionSlug: "bicol",
        image: "assets/images/dishes/laing.jpg",
        description: "Dried taro leaves in spicy gata",
        history: "Laing uses dried taro leaves simmered in coconut milk and is a Bicol kitchen staple.",
        ingredients: [
            "Dried taro leaves (gabi)",
            "Coconut milk",
            "Chili",
            "Shrimp paste or dried fish",
            "Ginger and garlic"
        ],
        instructions: [
            "Layer the leaves with aromatics",
            "Pour coconut milk and simmer without stirring at first",
            "Cook until the leaves are tender"
        ]
    },
    {
        id: "pinangat",
        name: "Pinangat",
        region: "Bicol Region",
        regionSlug: "bicol",
        image: "assets/images/dishes/pinangat.jpg",
        description: "Stuffed taro leaves simmered in gata",
        history: "Pinangat wraps a savory filling in taro leaves and simmers it in coconut milk.",
        ingredients: [
            "Fresh taro leaves",
            "Filled with fish or shrimp paste mixture",
            "Coconut milk",
            "Chili and ginger",
            "Salt"
        ],
        instructions: [
            "Wrap the filling in taro leaves",
            "Arrange in a pot with coconut milk",
            "Simmer until the leaves are cooked"
        ]
    },
    {
        id: "kinunot",
        name: "Kinunot",
        region: "Bicol Region",
        regionSlug: "bicol",
        image: "assets/images/dishes/kinunot.jpg",
        description: "Flaked stingray or shark in spicy coconut milk",
        history: "Kinunot is a Bicolano dish of flaked fish cooked in coconut milk and chili.",
        ingredients: [
            "Stingray or a similar firm fish",
            "Coconut milk",
            "Malunggay or chili leaves",
            "Ginger and garlic",
            "Chili"
        ],
        instructions: [
            "Flake the cooked fish",
            "Simmer in coconut milk with aromatics",
            "Finish with chili leaves and serve"
        ]
    }
];
