var icons = { ...(icons||{}), ...{
// class :: Rogue
    "swift-assassin": {name:"Swift Assassin",shape:"hex"},
    "guile": {name:"Guile",shape:"hex"},
    "evation": {name:"Evation",shape:"hex"},
    "agility": {name:"Agility",shape:"hex"},
    "dodge-and-parry": {name:"Dodge and Parry",shape:"hex"},
    "steady-hand": {name:"Steady Hand",shape:"hex"},
    "twin-blade": {name:"Twin Blade",shape:"hex"},
    "lethal-cadence": {name:"Lethal Cadence",shape:"hex"},
    "duelist": {name:"Duelist",shape:"hex"},
    "sapping-strikes": {name:"Sapping Strikes",shape:"hex"},
    "poison-tipped": {name:"Poison Tipped",shape:"hex"},
    "disembowel": {name:"Disembowel",shape:"hex"},
    "critical-precision": {name:"Critical Precision",shape:"hex"},
    "thiefguard": {name:"Thiefguard",shape:"hex"},
    "coated-blades": {name:"Coated Blades",shape:"hex"},

// subclass :: Marksman
    "draining-arrows": {name:"Draining Arrows",shape:"hex"},
    "assassins-quiver": {name:"Assassin's Quiver",shape:"hex"},
    "focus-fire": {name:"Focus Fire",shape:"hex"},
    "wound-maker": {name:"Wound Maker",shape:"hex"},
    "heightened-senses": {name:"Heightened Senses",shape:"hex"},
    "arrow-storm": {name:"Arrow Storm",shape:"hex"},
    "covering-fire": {name:"Covering Fire",shape:"hex"},
    "sharpshooter": {name:"Sharpshooter",shape:"hex"},
    "barrage-of-pain": {name:"Barrage of Pain",shape:"hex"},
    "death-from-afar": {name:"Death from Afar",shape:"hex"},
    "perfect-aim": {name:"Perfect Aim",shape:"hex"},
    "ethereal-arrows": {name:"Ethereal Arrows",shape:"hex"},
    "master-archer": {name:"Master Archer",shape:"hex"},
    "snipers-gambit": {name:"Sniper's Gambit",shape:"hex"},
    "elemental-arrows": {name:"Elemental Arrows",shape:"hex"},
    "missile-mastery": {name:"Missile Mastery",shape:"hex"},
    "concentration": {name:"Concentration",shape:"hex"},
    "storm-fletcher": {name:"Storm Fletcher",shape:"hex"},
    "prolonged-demise": {name:"Prolonged Demise",shape:"hex"},
    "siege-quiver": {name:"Siege Quiver",shape:"hex"},
    "meditation": {name:"Meditation",shape:"hex"},
    "elemental-barrage": {name:"Elemental Barrage",shape:"hex"},
    "reflection": {name:"Reflection",shape:"hex"},
    "fire-and-steel": {name:"Fire and Steel",shape:"hex"},
    "barbed-arrows": {name:"Barbed Arrows",shape:"hex"},
    "thiefs-quiver": {name:"Thief's Quiver",shape:"hex"},
    "poison-tipped-arrows": {name:"Poison Tipped Arrows",shape:"hex"},
    "mana-warp": {name:"Mana Warp",shape:"hex"},
    "rain-of-arrows": {name:"Rain of Arrows",shape:"hex"},

// subclass :: Bladedancer
    "cloak-of-shadows": {name:"Cloak of Shadows",shape:"hex"},
    "pursuit": {name:"Pursuit",shape:"hex"},
    "flow": {name:"Flow",shape:"hex"},
    "once": {name:"Once",shape:"hex"},
    "blood-serpents-blades": {name:"Blood Serpent's Blades",shape:"hex"},
    "skiasynthesis": {name:"Skiasynthesis",shape:"hex"},
    "shroud-of-dusk": {name:"Shroud of Dusk",shape:"hex"},
    "scarlet-stream": {name:"Scarlet Stream",shape:"hex"},
    "rhythm": {name:"Rhythm",shape:"hex"},
    "veil-of-night": {name:"Veil of Night",shape:"hex"},
    "pulse": {name:"Pulse",shape:"hex"},
    "apostacy": {name:"Apostacy",shape:"hex"},
    "crimson-shroud": {name:"Crimson Shroud",shape:"hex"},
    "tempo": {name:"Tempo",shape:"hex"},
    "asuvons-pact": {name:"Asuvon's Pact",shape:"hex"},
    "blood-dance": {name:"Blood Dance",shape:"hex"},
    "flash-of-steel": {name:"Flash of Steel",shape:"hex"},
    "perfection": {name:"Perfection",shape:"hex"},
    "argent-veil": {name:"Argent Veil",shape:"hex"},
    "weapons-of-choice": {name:"Weapons of Choice",shape:"hex"},
    "confidence": {name:"Confidence",shape:"hex"},
    "cloaked-reaper": {name:"Cloaked Reaper",shape:"hex"},
    "critical-eye": {name:"Critical Eye",shape:"hex"},
    "hooked-blades": {name:"Hooked Blades",shape:"hex"},
    "spell-breaker": {name:"Spell Breaker",shape:"hex"},
    "deaths-door": {name:"Death's Door",shape:"hex"},
    "exuberance": {name:"Exuberance",shape:"hex"},
    "shadow-master": {name:"Shadow Master",shape:"hex"},
    "all-in": {name:"All In",shape:"hex"},

// subclass :: Falconer
    "wilderness-scout": {name:"Wilderness Scout",shape:"hex"},
    "raptors-wings": {name:"Raptor's Wings",shape:"hex"},
    "handler": {name:"Handler",shape:"hex"},
    "outlanders-tenacity": {name:"Outlander's Tenacity",shape:"hex"},
    "agile-hunt": {name:"Agile Hunt",shape:"hex"},
    "crimson-skies": {name:"Crimson Skies",shape:"hex"},
    "stamina-of-the-rover": {name:"Stamina of the Rover",shape:"hex"},
    "rangers-mark": {name:"Ranger's Mark",shape:"hex"},
    "peltast": {name:"Peltast",shape:"hex"},
    "expert-duelist": {name:"Expert Duelist",shape:"hex"},
    "fencing-grace": {name:"Fencing Grace",shape:"hex"},
    "tactician": {name:"Tactician",shape:"hex"},
    "blast-radius": {name:"Blast Radius",shape:"hex"},
    "avian-hurl": {name:"Avian Hurl",shape:"hex"},
    "sharpest-point": {name:"Sharpest Point",shape:"hex"},
    "deflect-and-weave": {name:"Deflect and Weave",shape:"hex"},
    "coordinated-fade": {name:"Coordinated Fade",shape:"hex"},
    "evasion-tactics": {name:"Evasion Tactics",shape:"hex"},
    "final-souvenir": {name:"Final Souvenir",shape:"hex"},
    "intuitive-connection": {name:"Intuitive Connection",shape:"hex"},
    "relentless-talons": {name:"Relentless Talons",shape:"hex"},
    "leogs-stratagem": {name:"Leog's Stratagem",shape:"hex"},
    "needle-like-precision": {name:"Needle Like Precision",shape:"hex"},
    "sky-assassin": {name:"Sky Assassin",shape:"hex"},
    "poise": {name:"Poise",shape:"hex"},
    "expediency": {name:"Expediency",shape:"hex"},
    "stymphalian-feathers": {name:"Stymphalian Feathers",shape:"hex"},
    "strike-their-flank": {name:"Strike Their Flank",shape:"hex"},
    "finesse-them": {name:"Finesse Them",shape:"hex"},
    "tailwind": {name:"Tailwind",shape:"hex"},


"flurry": {name:"Flurry",shape:"",url:"https://www.lastepochtools.com/skills/flurry"},
    "alacrity": {name:"Alacrity",shape:""},
    "boundless-blows": {name:"Boundless Blows",shape:"hex"},
    "pavise": {name:"Pavise",shape:""},
    "fusillade": {name:"Fusillade",shape:"hex"},
    "arrow-storm": {name:"Arrow Storm",shape:""},
    "blood-revelry": {name:"Blood Revelry",shape:""},
    "second-wind": {name:"Second Wind",shape:""},
    "sap-willpower": {name:"Sap Willpower",shape:""},
    "relentless": {name:"Relentless",shape:""},
    "adrenaline-rush": {name:"Adrenaline Rush",shape:"hex"},
    "accelerating-impact": {name:"Accelerating Impact",shape:""},

"shurikens":{name:"Shurikens",shape:"",url:"https://www.lastepochtools.com/skills/shurikens"},
    "bladed-armor": {name:"Bladed Armor",shape:""},
    "fan-of-blades": {name:"Fan of Blades",shape:"hex"},
    "blade-shield": {name:"Blade Shield",shape:"hex"},
    "ethereal-blades": {name:"Ethereal Blades",shape:""},
    "floating-blades": {name:"Floating Blades",shape:""},
    "scintillant-steel": {name:"Scintillant Steel",shape:""},
    "acrobatics": {name:"Acrobatics",shape:"hex"},
    "behind-the-veil": {name:"Behind the Veil",shape:""},
    "stagger": {name:"Stagger",shape:""},

"shift":{name:"Shift",shape:"",url:"https://www.lastepochtools.com/skills/shift"},
    "shadowslip": {name:"Shadowslip",shape:"hex"},
    "velocity": {name:"Velocity",shape:""},
    "momentum": {name:"Momentum",shape:""},
    "swift-recovery": {name:"Swift Recovery",shape:""},
    "shadow-recuperation": {name:"Shadow Recuperation",shape:""},
    "sleight-of-hand": {name:"Sleight of Hand",shape:""},
    "elusive": {name:"Elusive",shape:""},
    "breathing-technique": {name:"Breathing Technique",shape:""},
    "rebound": {name:"Rebound",shape:""},

"acid-flask": {name:"Acid Flask",shape:"",url:"https://www.lastepochtools.com/skills/acid_flask"},
    "lingering-toxicity": {name:"Lingering Toxicity",shape:""},
    "barrage": {name:"Barrage",shape:"hex"},
    "amatoxic-pools": {name:"Amatoxic Pools",shape:""},
    "poison-pools": {name:"Poison Pools",shape:"hex"},
    "toxic-salvo": {name:"Toxic Salvo",shape:"hex"},
    "tempered-glass": {name:"Tempered Glass",shape:""},
    "alchemists-gift": {name:"Alchemist's Gift",shape:"hex"},
    "contaminsation": {name:"Contaminsation",shape:""},
    "hydrochloric-acid": {name:"Hydrochloric Acid",shape:""},
    "elixir-of-speed": {name:"Elixir of Speed",shape:""},
    "corrosive": {name:"Corrosive",shape:""},
    "blinding-mixture": {name:"Blinding Mixture",shape:""},
    "caustic-concoction": {name:"Caustic Concoction",shape:""},
    "lasting-sickness": {name:"Lasting Sickness",shape:""},
    "splash-zone": {name:"Splash Zone",shape:""},
    "knowledge-of-immunity": {name:"Knowledge of Immunity",shape:"hex"},
    "quick-draw": {name:"Quick Draw",shape:""},
    "hindering-mixture": {name:"Hindering Mixture",shape:""},
    "alchemical-proficiency": {name:"Alchemical Proficiency",shape:""},
    "castigate": {name:"Castigate",shape:""},
    "lightweight": {name:"Lightweight",shape:""},
    "firebomb-cocktail": {name:"Firebomb Cocktail",shape:""},
    "explosive-flask": {name:"Explosive Flask",shape:"hex"},
    "debilitate": {name:"Debilitate",shape:""},
    "piercing-debris": {name:"Piercing Debris",shape:""},
    "cluster-bomb": {name:"Cluster Bomb",shape:"hex"},
    "smoulder": {name:"Smoulder",shape:"hex"},
    "flammable-concoction": {name:"Flammable Concoction",shape:""},

"puncture": {name:"Puncture",shape:"",url:"https://www.lastepochtools.com/skills/puncture"},
"cinder-strike": {name:"Cinder Strike",shape:"",url:"https://www.lastepochtools.com/skills/cinder_strike1"},
"umbral-blades": {name:"Umbral Blades",shape:"",url:"https://www.lastepochtools.com/skills/umbral_blades"},

"smoke-bomb": {name:"Smoke Bomb",shape:"",url:"https://www.lastepochtools.com/skills/smoke_bomb"},
    "cleansing-steam": {name:"Cleansing Steam",shape:"hex"},
    "moonlight-bomb": {name:"Moonlight Bomb",shape:"hex"},
    "thick-smoke": {name:"Thick Smoke",shape:""},
    "generosity": {name:"Generosity",shape:""},
    "enfeeblement": {name:"Enfeeblement",shape:""},
    "concealed-in-carnage": {name:"Concealed in Carnage",shape:"hex"},
    "shrouded-in-darkness": {name:"Shrouded in Darkness",shape:""},
    "lingering-fumes": {name:"Lingering Fumes",shape:""},
    "rapid-concealment": {name:"Rapid Concealment",shape:""},
    "impending-gloom": {name:"Impending Gloom",shape:""},

"decoy": {name:"Decoy",shape:"",url:"https://www.lastepochtools.com/skills/decoy"},
"ballista": {name:"Ballista",shape:"",url:"https://www.lastepochtools.com/skills/summon_ballista"},

"shadow-cascade": {name:"Shadow Cascade",shape:"",url:"https://www.lastepochtools.com/skills/shadow_cascade"},
"synchronized-strike": {name:"Synchronized Strike",shape:"",url:"https://www.lastepochtools.com/skills/synchronized_strikes"},
"lethal-mirage": {name:"Lethal Mirage",shape:"",url:"https://www.lastepochtools.com/skills/lethal_mirage"},
"dancing-strikes": {name:"Dancing Strikes",shape:"",url:"https://www.lastepochtools.com/skills/dancing_strikes"},

"multishot": {name:"Multishot",shape:"",url:"https://www.lastepochtools.com/skills/rogue_multishot"},
    "strong-pull": {name:"Strong Pull",shape:"hex"},
    "large-quiver": {name:"Large Quiver",shape:""},
    "readied-arrow": {name:"Readied Arrow",shape:"hex"},
    "piercing-shots": {name:"Piercing Shots",shape:""},
    "wont-back-down": {name:"Won't Back Down'",shape:""},
    "sniping": {name:"Sniping",shape:""},
    "pinning-shots": {name:"Pinning Shots",shape:""},
    "quick-draw": {name:"Quick Draw",shape:""},
    "efficient-draw": {name:"Efficient Draw",shape:""},
    "keep-pushing-em-around": {name:"Keep Pushing 'em Around",shape:""},
    "true-strikes": {name:"True Strikes",shape:""},
    "stand-my-ground": {name:"Stand My Ground",shape:""},
    "bodkin-points": {name:"Bodkin Points",shape:""},

"dark-quiver": {name:"Dark Quiver",shape:"",url:"https://www.lastepochtools.com/skills/dark_quiver"},
"hail-of-arrows": {name:"Hail of Arrows",shape:"",url:"https://www.lastepochtools.com/skills/hail_of_arrows"},
"detonating-arrow": {name:"Detonating Arrow",shape:"",url:"https://www.lastepochtools.com/skills/detonating_arrow"},

"explosive-trap": {name:"Explosive Trap",shape:"",url:"https://www.lastepochtools.com/skills/explosive_trap"},
"net": {name:"Net",shape:"",url:"https://www.lastepochtools.com/skills/net"},
"aerial-assault": {name:"Aerial Assault",shape:"",url:"https://www.lastepochtools.com/skills/aerial_assault"},
"dive-bomb": {name:"Dive Bomb",shape:"",url:"https://www.lastepochtools.com/skills/dive_bomb"},
"falconry": {name:"Falconry",shape:"",url:"https://www.lastepochtools.com/skills/falconry"},

}};
