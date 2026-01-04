const categories = {
  Food: [
    "Pizza",
    "Sushi",
    "Taco",
    "Pancakes",
    "Curry",
    "Burrito",
    "Dumplings",
    "Ice Cream",
    "Salad",
    "Paella",
    "Falafel",
    "Ramen"
  ],
  Objects: [
    "Camera",
    "Skateboard",
    "Backpack",
    "Telescope",
    "Umbrella",
    "Compass",
    "Microwave",
    "Lighthouse",
    "Lantern",
    "Suitcase",
    "Headphones",
    "Thermos"
  ],
  Places: [
    "Beach",
    "Library",
    "Museum",
    "Mountain Cabin",
    "Train Station",
    "Night Market",
    "Zoo",
    "Art Studio",
    "Botanical Garden",
    "Ice Rink",
    "Aquarium",
    "Castle"
  ],
  Animals: [
    "Dolphin",
    "Elephant",
    "Hummingbird",
    "Cheetah",
    "Koala",
    "Octopus",
    "Penguin",
    "Red Panda",
    "Snowy Owl",
    "Sea Turtle",
    "Fox",
    "Otter"
  ],
  Jobs: [
    "Firefighter",
    "Architect",
    "Chef",
    "Librarian",
    "Pilot",
    "Detective",
    "Photographer",
    "Paramedic",
    "Florist",
    "Journalist",
    "Veterinarian",
    "Astronaut"
  ],
  Activities: [
    "Camping",
    "Karaoke",
    "Pottery",
    "Surfing",
    "Snowboarding",
    "Stargazing",
    "Bowling",
    "Gardening",
    "Hiking",
    "Rock Climbing",
    "Picnic",
    "Painting"
  ],
  Celebrities: [
    "Taylor Swift",
    "Beyonce",
    "Rihanna",
    "Ariana Grande",
    "Billie Eilish",
    "Selena Gomez",
    "Lady Gaga",
    "Adele",
    "Drake",
    "The Weeknd",
    "Justin Bieber",
    "Bad Bunny",
    "Ed Sheeran",
    "Travis Scott",
    "Kanye West",
    "Leonardo DiCaprio",
    "Brad Pitt",
    "Tom Cruise",
    "Dwayne Johnson",
    "Ryan Reynolds",
    "Zendaya",
    "Timothee Chalamet",
    "Margot Robbie",
    "Emma Stone",
    "Jennifer Lawrence",
    "Scarlett Johansson",
    "Robert Downey Jr.",
    "Chris Hemsworth",
    "Keanu Reeves",
    "Pedro Pascal",
    "Kevin Hart",
    "Dave Chappelle",
    "Adam Sandler",
    "Conan O'Brien",
    "Jimmy Fallon",
    "Trevor Noah",
    "MrBeast",
    "Kai Cenat",
    "iShowSpeed",
    "Logan Paul",
    "KSI",
    "Charli D'Amelio",
    "Emma Chamberlain",
    "Pokimane",
    "LeBron James",
    "Stephen Curry",
    "Kevin Durant",
    "Lionel Messi",
    "Cristiano Ronaldo",
    "Kylian Mbappe",
    "Serena Williams",
    "Simone Biles",
    "Patrick Mahomes",
    "Tom Brady",
    "Shohei Ohtani",
    "Conor McGregor",
    "Jake Paul",
    "Caitlin Clark",
    "Kim Kardashian",
    "Paris Hilton",
    "Cardi B",
    "Nicki Minaj",
    "Megan Thee Stallion",
    "Doja Cat",
    "Post Malone",
    "Snoop Dogg",
    "Gordon Ramsay",
    "Oprah Winfrey"
  ],
  "2025 Memes": [
    "67 / The 67 Kid",
    "Kirkification / Charlie Kirk Face Swaps",
    "J.D. Vance Face Edits",
    "Italian Brainrot Animals (Italian brainrot)",
    "Tung Tung Tung Sahur",
    "Tralalero Tralala",
    "Bombardiro Crocodilo",
    "AI Baby Holding Laugh",
    "Chicken Jockey",
    "SYBAU",
    "Jet2 Holiday (Nothing beats a Jet2 holiday...)",
    "Hasan Dog Shock Collar Memes",
    "We Are Charlie Kirk (AI song meme)",
    "My Mom Is Kinda Homeless (iShowSpeed quote)",
    "The Great Meme Reset of 2026",
    "Clanker",
    "Aura Farming",
    "Chopped Chin",
    "All Take",
    "It's Not Clocking to You / Standing on Business",
    "24 Karat Gold Labubu",
    "100 Men vs One Gorilla",
    "Unc",
    "6-7",
    "Ok Garmin (Ok Garmin, video speichern)",
    "Eye of Rah",
    "Dubai Chocolate"
  ],
  "2016 Culture": [
    "Pokemon Go",
    "Harambe",
    "Damn Daniel",
    "Mannequin Challenge",
    "Bottle Flip",
    "Arthur Fist",
    "Evil Kermit",
    "Dat Boi",
    "Cash Me Ousside",
    "Running Man Challenge",
    "Hotline Bling meme wave",
    "Snapchat dog filter",
    "Instagram Stories",
    "Musical.ly",
    "Cubs World Series win",
    "Cavaliers 3-1 comeback",
    "Warriors 73-9 season",
    "Rio 2016 Olympics",
    "Simone Biles",
    "Michael Phelps Rio comeback",
    "Leicester City EPL title",
    "Dab celebration",
    "Drake at NBA games",
    "Super Bowl 50 Broncos vs Panthers",
    "Fidget cubes",
    "Emoji spam",
    "Group chats",
    "Lit",
    "Savage",
    "Squad",
    "AF",
    "Netflix binges",
    "Vlogging",
    "Reaction videos",
    "Vine last big year",
    "Yeezys",
    "Kylie lip kits",
    "Starbucks cups"
  ],
  "Dark History & Scandals": [
    "Hitler",
    "9/11",
    "The Holocaust",
    "Auschwitz",
    "Pearl Harbor attack",
    "Hiroshima bombing",
    "Nagasaki bombing",
    "Chernobyl disaster",
    "Titanic sinking",
    "Columbine mass shooting",
    "Sandy Hook shooting",
    "Boston Marathon bombing",
    "Las Vegas shooting",
    "Osama bin Laden",
    "Joseph Stalin",
    "OJ Simpson trial",
    "George Floyd murder",
    "January 6 Capitol riot",
    "Jeffrey Epstein",
    "Epstein Island",
    "Zodiac Killer",
    "John F Kennedy assassination",
    "Diddy",
    "Diddy party",
    "Jeffrey Dahmer",
    "Rwanda genocide",
    "Epstein files"
  ],
  Fortnite: [
    "Tilted Towers",
    "Pleasant Park",
    "Salty Springs",
    "Retail Row",
    "Dusty Depot",
    "Greasy Grove",
    "Tomato Town",
    "Loot Lake",
    "Wailing Woods",
    "Fatal Fields",
    "Flush Factory",
    "Moisty Mire",
    "Lucky Landing",
    "Chug Jug",
    "Pump Shotgun",
    "Tactical Shotgun",
    "SCAR",
    "Bolt-Action Sniper",
    "RPG",
    "Shield Potion",
    "Med Kit",
    "Slurp Juice",
    "Launch Pad",
    "Supply Drop",
    "Bush",
    "Boogie Bomb",
    "Trap",
    "Shopping Cart",
    "Battle Bus",
    "Storm",
    "Victory Royale"
  ],
  "NSFW Freaky": [
    "Blowjob",
    "Oral sex",
    "Cunnilingus",
    "Rimming",
    "Deepthroat",
    "Ball gag",
    "Nipple clamps",
    "Spanking",
    "Choking",
    "Edging",
    "Gooning",
    "Over the pants handjob",
    "Thigh fucking",
    "Titjob",
    "Footjob",
    "Handjob",
    "Fingering",
    "Facesitting",
    "69",
    "Doggy style",
    "Missionary",
    "Cowgirl",
    "Reverse cowgirl",
    "Spooning",
    "Bondage",
    "Blindfold",
    "Collar and leash",
    "Chastity cage",
    "Butt plug",
    "Vibrator",
    "Orgasm",
    "Wax play",
    "Ice play",
    "Hair pulling",
    "Dirty talk",
    "Roleplay",
    "Striptease",
    "Lap dance",
    "Grinding",
    "Dry humping",
    "Mutual masturbation",
    "Squirting",
    "Creampie",
    "Cumshot",
    "Swallowing",
    "Feather tickling",
    "Hentai",
    "Role-play creampie",
    "Groping",
    "Mia Khalifa",
    "Riley Reid",
    "Lana Rhoades",
    "Abella Danger",
    "Johnny Sins",
    "Teasing",
    "Pegging",
    "Anal sex",
    "Double penetration",
    "Fisting",
    "Prostate milking",
    "BDSM",
    "Flogging",
    "Cum play",
    "Facials",
    "Bukkake",
    "Gangbang",
    "Threesome",
    "Lingerie",
    "Cock ring",
    "Strap-on",
    "Dildo",
    "Anal beads",
    "Clit sucking toy",
    "POV porn",
    "Amateur porn",
    "Rough sex",
    "Passionate sex",
    "Quickie",
    "Morning sex",
    "Shower sex",
    "Car sex",
    "Hotel sex",
    "Mirror sex",
    "Prone bone",
    "Standing doggy",
    "Eiffel Tower",
    "Sounding"
  ],
  Sports: [
    "Basketball",
    "Soccer",
    "American Football",
    "Baseball",
    "Hockey",
    "Tennis",
    "Golf",
    "Volleyball",
    "Rugby",
    "Cricket",
    "Boxing",
    "Swimming"
  ],
  "NBA Players": [
    "LeBron James",
    "Stephen Curry",
    "Kevin Durant",
    "Giannis Antetokounmpo",
    "Nikola Jokic",
    "Luka Doncic",
    "Joel Embiid",
    "Jayson Tatum",
    "Jimmy Butler",
    "Kawhi Leonard",
    "Damian Lillard",
    "Anthony Davis",
    "Ja Morant",
    "Devin Booker",
    "Shai Gilgeous-Alexander",
    "Trae Young",
    "Donovan Mitchell",
    "Kyrie Irving",
    "Zion Williamson",
    "Jaylen Brown"
  ],
  "Football Players": [
    "Patrick Mahomes",
    "Tom Brady",
    "Aaron Rodgers",
    "Lamar Jackson",
    "Josh Allen",
    "Joe Burrow",
    "Travis Kelce",
    "Justin Jefferson",
    "Tyreek Hill",
    "Derrick Henry",
    "Christian McCaffrey",
    "Nick Chubb",
    "T.J. Watt",
    "Myles Garrett",
    "Micah Parsons",
    "Sauce Gardner",
    "Jalen Hurts",
    "C.J. Stroud",
    "George Kittle",
    "Davante Adams"
  ],
  "Clash Royale": [
    "Knight",
    "Archers",
    "Goblins",
    "Giant",
    "P.E.K.K.A",
    "Minions",
    "Balloon",
    "Witch",
    "Barbarians",
    "Golem",
    "Skeletons",
    "Valkyrie",
    "Skeleton Army",
    "Bomber",
    "Musketeer",
    "Baby Dragon",
    "Prince",
    "Wizard",
    "Mini P.E.K.K.A",
    "Spear Goblins",
    "Giant Skeleton",
    "Hog Rider",
    "Minion Horde",
    "Ice Wizard",
    "Royal Giant",
    "Guards",
    "Princess",
    "Dark Prince",
    "Three Musketeers",
    "Lava Hound",
    "Ice Spirit",
    "Fire Spirit",
    "Miner",
    "Sparky",
    "Bowler",
    "Lumberjack",
    "Battle Ram",
    "Inferno Dragon",
    "Ice Golem",
    "Mega Minion",
    "Dart Goblin",
    "Goblin Gang",
    "Electro Wizard",
    "Elite Barbarians",
    "Hunter",
    "Executioner",
    "Bandit",
    "Royal Recruits",
    "Night Witch",
    "Bats",
    "Royal Ghost",
    "Ram Rider",
    "Zappies",
    "Rascals",
    "Cannon Cart",
    "Mega Knight",
    "Skeleton Barrel",
    "Flying Machine",
    "Wall Breakers",
    "Royal Hogs",
    "Goblin Giant",
    "Fisherman",
    "Magic Archer",
    "Electro Dragon",
    "Firecracker",
    "Mighty Miner",
    "Super Witch",
    "Elixir Golem",
    "Battle Healer",
    "Skeleton King",
    "Super Lava Hound",
    "Super Magic Archer",
    "Archer Queen",
    "Santa Hog Rider",
    "Golden Knight",
    "Super Ice Golem",
    "Monk",
    "Super Archers",
    "Skeleton Dragons",
    "Terry",
    "Super Mini P.E.K.K.A",
    "Mother Witch",
    "Electro Spirit",
    "Electro Giant",
    "Raging Prince",
    "Phoenix",
    "Cannon",
    "Goblin Hut",
    "Mortar",
    "Inferno Tower",
    "Bomb Tower",
    "Barbarian Hut",
    "Tesla",
    "Elixir Collector",
    "X-Bow",
    "Tombstone",
    "Furnace",
    "Goblin Cage",
    "Goblin Drill",
    "Party Hut",
    "Fireball",
    "Arrows",
    "Rage",
    "Rocket",
    "Goblin Barrel",
    "Freeze",
    "Mirror",
    "Lightning",
    "Zap",
    "Poison",
    "Graveyard",
    "The Log",
    "Tornado",
    "Clone",
    "Earthquake",
    "Barbarian Barrel",
    "Heal Spirit",
    "Giant Snowball",
    "Royal Delivery",
    "Party Rocket"
  ],
  Slurs: [
    "nigger (derogatory for Black people)",
    "faggot (derogatory for gay men)",
    "porch monkey (lazy Black stereotype)",
    "zipperhead (Asian war injury slur)",
    "beaner (Mexican bean eater slur)",
    "chink (Chinese language mockery)",
    "jigaboo (Black person from jig dance)",
    "kike (Jewish from circle signature)",
    "wop (Italian without papers)",
    "spic (Hispanic from speech)",
    "gook (Asian from Korean War)",
    "kraut (German sauerkraut eater)",
    "raghead (Arab turban wearer)",
    "paki (shortened Pakistani slur)",
    "coon (Black from raccoon)",
    "dyke (lesbian slur)",
    "tranny (transgender slur)",
    "pansy (effeminate man)",
    "fruit (gay man slur)",
    "ape (Black animal comparison)",
    "cracker (white whip cracker)",
    "honky (white nose honker)",
    "redskin (Native American skin color)",
    "slope (Asian eye shape)",
    "wetback (Mexican river crosser)",
    "towelhead (Arab turban)",
    "sand nigger (Arab desert slur)",
    "camel jockey (Arab camel rider)",
    "jungle bunny (Black jungle origin)",
    "uncle tom (Black sellout)",
    "retard (derogatory for disabled)",
    "cunt (vulgar for woman)",
    "bitch (derogatory for woman)",
    "slut (promiscuous woman slur)",
    "jap (derogatory for Japanese)"
  ]
};

const state = {
  players: 5,
  category: "Food",
  word: "",
  impostor: -1,
  cardStates: []
};

const screens = {
  setup: document.querySelector('[data-screen="setup"]'),
  reveal: document.querySelector('[data-screen="reveal"]')
};

const categorySelect = document.getElementById("category");
const playersInput = document.getElementById("players");
const playBtn = document.getElementById("playBtn");
const formError = document.getElementById("formError");
const cardGrid = document.getElementById("cardGrid");
const revealCount = document.getElementById("revealCount");
const resetBtn = document.getElementById("resetBtn");

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const setScreen = (name) => {
  Object.keys(screens).forEach((key) => {
    screens[key].hidden = key !== name;
  });
};

const setError = (message) => {
  formError.textContent = message || "";
};

const pickCategory = () => {
  const selected = categorySelect.value;
  if (selected === "Random") {
    const keys = Object.keys(categories);
    return keys[Math.floor(Math.random() * keys.length)];
  }
  return selected;
};

const updateRevealCount = () => {
  const seenCount = state.cardStates.filter((status) => status === "seen").length;
  revealCount.textContent = `${seenCount}/${state.players} seen`;
};

const renderCardContent = (index, status) => {
  if (status === "revealed") {
    if (index === state.impostor) {
      return `
        <span class="card-label">Player ${index + 1}</span>
        <div class="card-secrets">
          <span class="card-category">Impostor</span>
          <span class="card-word">IMPOSTOR</span>
        </div>
        <span class="card-sub">Tap again to hide</span>
      `;
    }
    return `
      <span class="card-label">Player ${index + 1}</span>
      <div class="card-secrets">
        <span class="card-category">Category: ${state.category}</span>
        <span class="card-word">${state.word}</span>
      </div>
      <span class="card-sub">Tap again to hide</span>
    `;
  }

  if (status === "seen") {
    return `
      <span class="card-label">Player ${index + 1}</span>
      <span class="card-sub">Seen</span>
    `;
  }

  return `
    <span class="card-label">Player ${index + 1}</span>
    <span class="card-sub">Tap to reveal</span>
  `;
};

const updateCard = (card, index, status) => {
  card.classList.toggle("revealed", status === "revealed");
  card.classList.toggle("seen", status === "seen");
  card.classList.toggle("impostor", status === "revealed" && index === state.impostor);
  card.innerHTML = renderCardContent(index, status);
};

const buildCards = (count) => {
  cardGrid.innerHTML = "";
  for (let i = 0; i < count; i += 1) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "card";
    card.style.setProperty("--delay", `${i * 0.05}s`);
    updateCard(card, i, "hidden");
    card.addEventListener("click", () => handleCardClick(i, card));
    cardGrid.appendChild(card);
  }
};

const handleCardClick = (index, card) => {
  const status = state.cardStates[index];
  if (status === "seen") {
    return;
  }

  if (status === "hidden") {
    state.cardStates[index] = "revealed";
  } else if (status === "revealed") {
    state.cardStates[index] = "seen";
  }

  updateCard(card, index, state.cardStates[index]);
  updateRevealCount();
};

const startGame = () => {
  const players = clamp(parseInt(playersInput.value, 10) || 5, 3, 12);
  playersInput.value = players;
  const category = pickCategory();
  const words = categories[category] || [];

  if (!words.length) {
    setError("Pick a category with at least one word.");
    return;
  }

  setError("");
  state.players = players;
  state.category = category;
  state.word = words[Math.floor(Math.random() * words.length)];
  state.impostor = Math.floor(Math.random() * players);
  state.cardStates = Array(players).fill("hidden");

  buildCards(players);
  updateRevealCount();
  setScreen("reveal");
};

playBtn.addEventListener("click", startGame);
const resetGame = () => {
  setScreen("setup");
  setError("");
  cardGrid.innerHTML = "";
  revealCount.textContent = "0/0 seen";
  state.cardStates = [];
};

resetBtn.addEventListener("click", resetGame);

setScreen("setup");
