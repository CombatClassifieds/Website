CREATE TABLE popular_brands (
  id serial PRIMARY KEY,
  name text NOT NULL
);

INSERT INTO popular_brands (name) VALUES
  ('Stealth Tech'),
  ('Shadow Tactics'),
  ('Covert Solutions'),
  ('Obsidian Ops'),
  ('Phantom Innovations'),
  ('Silent Strike'),
  ('DarkNet Defense'),
  ('Stealthy Solutions'),
  ('Shadow Elite'),
  ('Invisible Inc.'),
  ('View All');

CREATE TABLE categories (
  id serial PRIMARY KEY,
  name text NOT NULL
);

INSERT INTO categories (name) VALUES
  ('Shadow Operations Gear'),
  ('Counterintelligence Tools'),
  ('Black Ops Uniforms'),
  ('Covert Accessories'),
  ('Assassination Tools'),
  ('Evasion Equipment'),
  ('Interrogation Devices'),
  ('Covert Communication Devices'),
  ('Infiltration Tools'),
  ('Sabotage Equipment'),
  ('Exfiltration Gear'),
  ('Covert Training Materials'),
  ('Restricted Access Files'),
  ('Covert Missions Planning'),
  ('Black Ops Accessories'),
  ('Underground Equipment'),
  ('Clandestine Weapons'),
  ('Electronic Warfare Devices'),
  ('Restricted Area Access Tools');

CREATE TABLE subcategories (
  id serial PRIMARY KEY,
  name text NOT NULL,
  parent integer NOT NULL REFERENCES categories(id) ON DELETE CASCADE
);

INSERT INTO subcategories (name, parent) VALUES
  ('Covert Surveillance Equipment', 1),
  ('Invisible Communication Devices', 1),
  ('Stealthy Infiltration Tools', 1),
  ('Assassination Instruments', 1),
  ('Undetectable Camouflage Gear', 1),
  ('Nightshade Tactical Attire', 3),
  ('Silent Shadow Outfits', 3),
  ('Ghost Recon Suits', 3),
  ('Phantom Black Armor', 3),
  ('Stealth Assassin Garb', 3),
  ('Silent Footwear', 4),
  ('Invisible Camouflage Nets', 4),
  ('Shadowy Face Masks', 4),
  ('Concealed Weaponry Holsters', 4),
  ('Untraceable Gloves', 4),
  ('Smoke Bombs', 6),
  ('Flashbang Grenades', 6),
  ('Disappearing Ink', 6),
  ('Chameleon Cloaks', 6),
  ('Silent Night Parachutes', 6),
  ('Mind Control Implants', 7),
  ('Memory Suppressors', 7),
  ('Truth Serum Syringes', 7),
  ('Brainwave Scanners', 7),
  ('Loyalty Enforcers', 7),
  ('Encrypted Radios', 8),
  ('Cryptographic Phones', 8),
  ('Invisible Ink Pens', 8),
  ('Secure Messaging Apps', 8),
  ('Subdermal Transceivers', 8),
  ('Stealth Drones', 9),
  ('Lockpicking Kits', 9),
  ('Grapple Guns', 9),
  ('Climbing Gear', 9),
  ('Remote Surveillance Drones', 9),
  ('Remote Detonators', 10),
  ('Saboteur Toolkits', 10),
  ('Radio Jammers', 10),
  ('Cyber Warfare Tools', 10),
  ('Explosive Charges', 10),
  ('Escape Ropes', 11),
  ('Emergency Extraction Kits', 11),
  ('Clandestine Transportation', 11),
  ('Fake Identities', 11),
  ('Vanishing Smoke Bombs', 11),
  ('Espionage Manuals', 12),
  ('Stealth Combat Training', 12),
  ('Undercover Operations Guides', 12),
  ('Covert Surveillance Courses', 12),
  ('Interrogation Tactics Workbooks', 12),
  ('Mission Briefing Software', 14),
  ('Assassination Strategies', 14),
  ('Infiltration Blueprints', 14),
  ('Extraction Protocols', 14),
  ('Covert Ops Logistics', 14),
  ('Shadowy Sunglasses', 15),
  ('Covert Watches', 15),
  ('Stealthy Backpacks', 15),
  ('Mysterious Masks', 15),
  ('Eclipse Gadgets', 15),
  ('Silenced Firearms', 17),
  ('Deadly Poisons', 17),
  ('Stealth Knives', 17),
  ('Concealable Explosives', 17),
  ('Covert Combat Gear', 17),
  ('EMP Generators', 18),
  ('Surveillance Drones', 18),
  ('Signal Scramblers', 18),
  ('Hacking Devices', 18),
  ('Cyber Warfare Tools', 18);


CREATE TABLE items (
  id serial PRIMARY KEY,
  name text NOT NULL,
  img text NOT NULL,
  nsn text NOT NULL,
  price numeric NOT NULL,
  brand text NOT NULL,
  description text NOT NULL
);

INSERT INTO items (img, name, nsn, price, brand, description) VALUES
  (
    '/images/lego_secret_tank.jpeg',
    'L3g0 [REDACTED]: Shadow Enigma Tank',
    '[REDACTED]237[REDACTED]73-[REDACTED]74',
    230.17,
    '[REDACTED] Advanced Technologies [CLASSIFIED]',
    '🔒 Step into the shadowy realm of covert operations, where whispers intertwine with the darkness and enigmas lie hidden in the folds of reality. 🌌

🕵️‍♂️ The L3g0 [REDACTED]: Shadow Enigma Tank beckons, a cryptic marvel meticulously crafted by [REDACTED] Advanced Technologies [CLASSIFIED], veiled in the deepest shadows and shrouded in impenetrable secrecy. 🌑

🔐 This is no ordinary Lego set; it is a gateway to a world where imagination dances with enigma, and the boundaries of the known fade into obscurity. 🧩

🧭 Journey through the murky depths of clandestine missions as you assemble this enigmatic masterpiece, with each brick revealing cryptic secrets, and each step leading you further into the abyss of clandestine mystery. 🚪

🌚 With its [REDACTED] technology and stealth-enhanced design, the Shadow Enigma Tank glides silently through the night, an ethereal specter haunting the shadows. 👻

🔍 But tread cautiously, for within its labyrinthine chambers lie concealed secrets of the highest sensitivity. Unravel the mysteries that lurk within, unlocking hidden compartments and revealing classified armaments as you journey deeper into the heart of the clandestine. 🔓

🚀 The Shadow Enigma Tank transcends mere toy status; it stands as a monument to the limitless power of imagination and the allure of the unknown. 🌟

🌌 Embrace the shadows, embrace the mysteries, and embark on an odyssey where the only limit is the vast expanse of your imagination. 🚀'
  )
;
