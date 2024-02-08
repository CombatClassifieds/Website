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

-- INSERT INTO subcategories (name, parent) VALUES
--       ('Covert Surveillance Equipment', 1),
--       ('Invisible Communication Devices', 1),
--       ('Stealthy Infiltration Tools', 1),
--       ('Assassination Instruments', 1),
--       ('Undetectable Camouflage Gear', 1),
--       ('Nightshade Tactical Attire', 3),
--       ('Silent Shadow Outfits', 3),
--       ('Ghost Recon Suits', 3),
--       ('Phantom Black Armor', 3),
--       ('Stealth Assassin Garb', 3),
--   {
--     name: "Covert Accessories",
--     children: [
--       "Silent Footwear",
--       "Invisible Camouflage Nets",
--       "Shadowy Face Masks",
--       "Concealed Weaponry Holsters",
--       "Untraceable Gloves",
--     ],
--   },
--   "Assassination Tools",
--   {
--     name: "Evasion Equipment",
--     children: [
--       "Smoke Bombs",
--       "Flashbang Grenades",
--       "Disappearing Ink",
--       "Chameleon Cloaks",
--       "Silent Night Parachutes",
--     ],
--   },
--   {
--     name: "Interrogation Devices",
--     children: [
--       "Mind Control Implants",
--       "Memory Suppressors",
--       "Truth Serum Syringes",
--       "Brainwave Scanners",
--       "Loyalty Enforcers",
--     ],
--   },
--   {
--     name: "Covert Communication Devices",
--     children: [
--       "Encrypted Radios",
--       "Cryptographic Phones",
--       "Invisible Ink Pens",
--       "Secure Messaging Apps",
--       "Subdermal Transceivers",
--     ],
--   },
--   {
--     name: "Infiltration Tools",
--     children: [
--       "Stealth Drones",
--       "Lockpicking Kits",
--       "Grapple Guns",
--       "Climbing Gear",
--       "Remote Surveillance Drones",
--     ],
--   },
--   {
--     name: "Sabotage Equipment",
--     children: [
--       "Remote Detonators",
--       "Saboteur Toolkits",
--       "Radio Jammers",
--       "Cyber Warfare Tools",
--       "Explosive Charges",
--     ],
--   },
--   {
--     name: "Exfiltration Gear",
--     children: [
--       "Escape Ropes",
--       "Emergency Extraction Kits",
--       "Clandestine Transportation",
--       "Fake Identities",
--       "Vanishing Smoke Bombs",
--     ],
--   },
--   {
--     name: "Covert Training Materials",
--     children: [
--       "Espionage Manuals",
--       "Stealth Combat Training",
--       "Undercover Operations Guides",
--       "Covert Surveillance Courses",
--       "Interrogation Tactics Workbooks",
--     ],
--   },
--   "Restricted Access Files",
--   {
--     name: "Covert Missions Planning",
--     children: [
--       "Mission Briefing Software",
--       "Assassination Strategies",
--       "Infiltration Blueprints",
--       "Extraction Protocols",
--       "Covert Ops Logistics",
--     ],
--   },
--   {
--     name: "Black Ops Accessories",
--     children: [
--       "Shadowy Sunglasses",
--       "Covert Watches",
--       "Stealthy Backpacks",
--       "Mysterious Masks",
--       "Eclipse Gadgets",
--     ],
--   },
--   "Underground Equipment",
--   {
--     name: "Clandestine Weapons",
--     children: [
--       "Silenced Firearms",
--       "Deadly Poisons",
--       "Stealth Knives",
--       "Concealable Explosives",
--       "Covert Combat Gear",
--     ],
--   },
--   {
--     name: "Electronic Warfare Devices",
--     children: [
--       "EMP Generators",
--       "Surveillance Drones",
--       "Signal Scramblers",
--       "Hacking Devices",
--       "Cyber Warfare Tools",
--     ],
--   },
--   "Restricted Area Access Tools",
-- ];
-- ;
