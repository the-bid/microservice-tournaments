module.exports = {
  tournament
}

function tournament() {
  return tournamentData
}

const tournamentData = {
  id: 'caa4fb9e-12f1-4429-a160-8e6f4de1d84c',
  name: "NCAA Men's Division I Basketball Tournament",
  location: 'San Antonio, TX, USA',
  status: 'closed',
  start_date: '2018-03-13',
  end_date: '2018-04-02',
  league: {
    id: 'cd4268ee-07aa-4c4d-a435-ec44ad2c76cb',
    name: 'NCAA MEN',
    alias: 'NCAAM'
  },
  season: {
    id: '2c3a1230-79c9-434b-b5c7-d84c62d63c58',
    year: 2017,
    type: 'PST'
  },
  brackets: [
    {
      id: '7fbf087b-9c6f-42c7-8d58-909cf8bbfbad',
      name: 'Midwest Regional',
      location: 'Omaha, NE, USA',
      participants: [
        {
          id: 'b2fda957-e15c-4fb2-8a13-6e58496f561e',
          name: 'Oklahoma Sooners',
          market: 'Oklahoma',
          type: 'team',
          seed: 10
        },
        {
          id: '8cd24de1-2be8-4b77-bcfa-47be0495a5f4',
          name: 'Syracuse Orange',
          market: 'Syracuse',
          type: 'team',
          seed: 11
        },
        {
          id: 'ad4bc983-8d2e-4e6f-a8f9-80840a786c64',
          name: 'Arizona State Sun Devils',
          market: 'Arizona State',
          type: 'team',
          seed: 11
        },
        {
          id: '98d2123a-c7b9-4b5f-8a81-43f76d8537dc',
          name: 'Bucknell Bison',
          market: 'Bucknell',
          type: 'team',
          seed: 14
        },
        {
          id: '52df1e19-b142-4a76-a439-ad68455d0581',
          name: 'North Carolina State Wolfpack',
          market: 'North Carolina State',
          type: 'team',
          seed: 9
        },
        {
          id: 'dcf5c2e7-c227-4c20-af26-715d5f859412',
          name: 'Clemson Tigers',
          market: 'Clemson',
          type: 'team',
          seed: 5
        },
        {
          id: 'a41d5a05-4c11-4171-a57e-e7a1ea325a6d',
          name: 'Michigan State Spartans',
          market: 'Michigan State',
          type: 'team',
          seed: 3
        },
        {
          id: 'faeb1160-5d15-4f26-99fc-c441cf21fc7f',
          name: 'Duke Blue Devils',
          market: 'Duke',
          type: 'team',
          seed: 2
        },
        {
          id: '8548dacb-3636-48a8-8c46-611ab0c15fc0',
          name: 'Charleston Cougars',
          market: 'Charleston',
          type: 'team',
          seed: 13
        },
        {
          id: '0c0608b3-f349-4f5e-9a10-7e6a744dd0d2',
          name: 'Auburn Tigers',
          market: 'Auburn',
          type: 'team',
          seed: 4
        },
        {
          id: '255c2a87-40c0-4989-bbb9-d286aac5d28e',
          name: 'Iona Gaels',
          market: 'Iona',
          type: 'team',
          seed: 15
        },
        {
          id: 'aef5e386-d8e8-460c-8014-3a2f090fd988',
          name: 'Seton Hall Pirates',
          market: 'Seton Hall',
          type: 'team',
          seed: 8
        },
        {
          id: 'e6c94452-1adf-4fb9-90e5-10f165c57c5a',
          name: 'Pennsylvania Quakers',
          market: 'Pennsylvania',
          type: 'team',
          seed: 16
        },
        {
          id: '5016fe1a-9571-4d10-bf5b-b9c1b496bd57',
          name: 'New Mexico State Aggies',
          market: 'New Mexico State',
          type: 'team',
          seed: 12
        },
        {
          id: 'fae4855b-1b64-4b40-a632-9ed345e1e952',
          name: 'Kansas Jayhawks',
          market: 'Kansas',
          type: 'team',
          seed: 1
        },
        {
          id: '7e42bca2-3cd7-4aca-aa46-f190fe5d8eb4',
          name: 'Rhode Island Rams',
          market: 'Rhode Island',
          type: 'team',
          seed: 7
        },
        {
          id: 'f7fcbb6e-4a55-41ea-ba21-f763ed914467',
          name: 'TCU Horned Frogs',
          market: 'TCU',
          type: 'team',
          seed: 6
        }
      ]
    },
    {
      id: 'cbc070cb-8c75-4563-aeb3-a6f1b27d200a',
      name: 'South Regional',
      location: 'Atlanta, GA, USA',
      participants: [
        {
          id: 'a17dfc54-415f-49c3-a2e6-d6fa9db18b0a',
          name: 'Cincinnati Bearcats',
          market: 'Cincinnati',
          type: 'team',
          seed: 2
        },
        {
          id: 'd203f38a-a166-4258-bca2-e161b591ecfb',
          name: 'Kansas State Wildcats',
          market: 'Kansas State',
          type: 'team',
          seed: 9
        },
        {
          id: '56913910-87f7-4ad7-ae3b-5cd9fb218fd9',
          name: 'Virginia Cavaliers',
          market: 'Virginia',
          type: 'team',
          seed: 1
        },
        {
          id: '94ea835b-8ce9-4de2-a5b1-971548fea974',
          name: 'Georgia State Panthers',
          market: 'Georgia State',
          type: 'team',
          seed: 15
        },
        {
          id: '9b166a3f-e64b-4825-bb6b-92c6f0418263',
          name: 'Arizona Wildcats',
          market: 'Arizona',
          type: 'team',
          seed: 4
        },
        {
          id: '9c396fa7-c165-4599-8542-158bd0d9a199',
          name: 'Wright State Raiders',
          market: 'Wright State',
          type: 'team',
          seed: 14
        },
        {
          id: '32755362-6336-4dd3-ac34-6f72a6cc150b',
          name: 'UMBC Retrievers',
          market: 'UMBC',
          type: 'team',
          seed: 16
        },
        {
          id: '6ed15092-2670-450a-99c2-61d861e87644',
          name: 'Texas Longhorns',
          market: 'Texas',
          type: 'team',
          seed: 10
        },
        {
          id: '2920c5fa-1e86-4958-a7c4-1e97b8e201d8',
          name: 'Davidson Wildcats',
          market: 'Davidson',
          type: 'team',
          seed: 12
        },
        {
          id: 'b827dbdf-230f-4916-9703-3bb9004e26eb',
          name: 'Tennessee Volunteers',
          market: 'Tennessee',
          type: 'team',
          seed: 3
        },
        {
          id: 'a9f5c9a2-342c-4881-9996-5d5c05ec9bd9',
          name: 'Buffalo Bulls',
          market: 'Buffalo',
          type: 'team',
          seed: 13
        },
        {
          id: '7d797407-623e-476d-b299-46de4275414d',
          name: 'Creighton Bluejays',
          market: 'Creighton',
          type: 'team',
          seed: 8
        },
        {
          id: '2267a1f4-68f6-418b-aaf6-2aa0c4b291f1',
          name: 'Kentucky Wildcats',
          market: 'Kentucky',
          type: 'team',
          seed: 5
        },
        {
          id: '61a3908a-7492-4b6f-809e-12c61976bb0a',
          name: 'Loyola (IL) Ramblers',
          market: 'Loyola (IL)',
          type: 'team',
          seed: 11
        },
        {
          id: '62a73b4a-e281-4483-a1f8-f1160a18e456',
          name: 'Nevada Wolf Pack',
          market: 'Nevada',
          type: 'team',
          seed: 7
        },
        {
          id: '7aec5187-cb1b-45e5-8f7d-406d766cdc73',
          name: 'Miami (FL) Hurricanes',
          market: 'Miami (FL)',
          type: 'team',
          seed: 6
        }
      ]
    },
    {
      id: 'e3fc3059-90b6-42d7-8d7f-ed4a7af02047',
      name: 'West Regional',
      location: 'Los Angeles, CA, USA',
      participants: [
        {
          id: 'e6914f16-ca37-4d2e-ba26-a425910283e2',
          name: 'San Diego State Aztecs',
          market: 'San Diego State',
          type: 'team',
          seed: 11
        },
        {
          id: '7d3b9c72-cbdd-4b64-9aa3-a5bde9b75fdc',
          name: 'Providence Friars',
          market: 'Providence',
          type: 'team',
          seed: 10
        },
        {
          id: 'eb157f98-0697-459c-9293-ddb162ceb28b',
          name: 'Texas Southern Tigers',
          market: 'Texas Southern',
          type: 'team',
          seed: 16
        },
        {
          id: 'd3c8a767-b6fc-45d4-a5f2-18406f2993f1',
          name: 'Florida State Seminoles',
          market: 'Florida State',
          type: 'team',
          seed: 9
        },
        {
          id: '857462b3-0ab6-4d26-9669-10ca354e382b',
          name: 'Ohio State Buckeyes',
          market: 'Ohio State',
          type: 'team',
          seed: 5
        },
        {
          id: 'e4c315a0-e83f-4d14-856e-34a0463059e3',
          name: 'North Carolina Central Eagles',
          market: 'North Carolina Central',
          type: 'team',
          seed: 16
        },
        {
          id: 'e9ca48b2-00ba-41c0-a02b-6885a2da1ff1',
          name: 'North Carolina Tar Heels',
          market: 'North Carolina',
          type: 'team',
          seed: 2
        },
        {
          id: '77ca152a-cb2f-48a5-97b2-492351250d94',
          name: 'Missouri Tigers',
          market: 'Missouri',
          type: 'team',
          seed: 8
        },
        {
          id: '1f99a164-d593-4d81-85d5-0d7889d6f486',
          name: 'Houston Cougars',
          market: 'Houston',
          type: 'team',
          seed: 6
        },
        {
          id: '2f4d21f8-6d5f-48a5-abca-52a30583871a',
          name: 'Gonzaga Bulldogs',
          market: 'Gonzaga',
          type: 'team',
          seed: 4
        },
        {
          id: '6ef40534-5fad-4755-84de-7dcbd645d1f0',
          name: 'South Dakota State Jackrabbits',
          market: 'South Dakota State',
          type: 'team',
          seed: 12
        },
        {
          id: 'e3848467-66c0-41e5-8283-02e3586d8601',
          name: 'Montana Grizzlies',
          market: 'Montana',
          type: 'team',
          seed: 14
        },
        {
          id: '612f7f66-1de1-4d42-b842-9a508daab911',
          name: 'UNC Greensboro Spartans',
          market: 'UNC Greensboro',
          type: 'team',
          seed: 13
        },
        {
          id: '0d8a328f-20ce-410b-bed1-15fc01308aaf',
          name: 'Xavier Musketeers',
          market: 'Xavier',
          type: 'team',
          seed: 1
        },
        {
          id: 'ef184799-d79b-49d9-a662-991eaf4044cd',
          name: 'Texas A&M Aggies',
          market: 'Texas A&M',
          type: 'team',
          seed: 7
        },
        {
          id: 'a2b8223d-40b3-4076-b5df-55655c2f8591',
          name: 'Lipscomb Bisons',
          market: 'Lipscomb',
          type: 'team',
          seed: 15
        },
        {
          id: 'bdc2561d-f603-4fab-a262-f1d2af462277',
          name: 'Michigan Wolverines',
          market: 'Michigan',
          type: 'team',
          seed: 3
        }
      ]
    },
    {
      id: 'f92e9a3f-85db-442b-bcb7-80068c5850e4',
      name: 'East Regional',
      location: 'Boston, MA, USA',
      participants: [
        {
          id: 'ec0d6b67-4b16-4b50-92b2-1a651dae6b0f',
          name: 'UCLA Bruins',
          market: 'UCLA',
          type: 'team',
          seed: 11
        },
        {
          id: 'c70c23c4-ab09-4797-a1af-792c848ab17f',
          name: 'Arkansas Razorbacks',
          market: 'Arkansas',
          type: 'team',
          seed: 7
        },
        {
          id: 'c2104cdc-c83d-40d2-a3cd-df986e29f5d3',
          name: 'Alabama Crimson Tide',
          market: 'Alabama',
          type: 'team',
          seed: 9
        },
        {
          id: '5ef64f01-86ae-4553-9834-c79cc0859eaf',
          name: 'Stephen F. Austin Lumberjacks',
          market: 'Stephen F. Austin',
          type: 'team',
          seed: 14
        },
        {
          id: '77a69fb0-1355-4342-ac09-b4cc7949d95e',
          name: 'Murray State Racers',
          market: 'Murray State',
          type: 'team',
          seed: 12
        },
        {
          id: '82c12e8d-7c6c-47d8-b100-3cbc190d268e',
          name: 'LIU Brooklyn Blackbirds',
          market: 'LIU Brooklyn',
          type: 'team',
          seed: 16
        },
        {
          id: 'c009914b-3303-4dee-b915-978aa48a31d0',
          name: 'Cal State Fullerton Titans',
          market: 'Cal State Fullerton',
          type: 'team',
          seed: 15
        },
        {
          id: 'f8c705b7-87d3-411a-9c8b-5124daab0469',
          name: 'Texas Tech Red Raiders',
          market: 'Texas Tech',
          type: 'team',
          seed: 3
        },
        {
          id: 'f2cf9ba2-ac8c-4d92-8e7a-48dd88e8f40b',
          name: 'Radford Highlanders',
          market: 'Radford',
          type: 'team',
          seed: 16
        },
        {
          id: '12d7f888-675b-459f-9099-a38f771d8a95',
          name: 'Purdue Boilermakers',
          market: 'Purdue',
          type: 'team',
          seed: 2
        },
        {
          id: 'f770d3a2-221c-49ce-9c7a-680f7417fe9e',
          name: 'West Virginia Mountaineers',
          market: 'West Virginia',
          type: 'team',
          seed: 5
        },
        {
          id: '4383eb6a-7fd8-4ff2-94c5-43c933121e88',
          name: 'Villanova Wildcats',
          market: 'Villanova',
          type: 'team',
          seed: 1
        },
        {
          id: '58d8baa3-7624-4b21-a47f-a23df2bf8859',
          name: 'Marshall Thundering Herd',
          market: 'Marshall',
          type: 'team',
          seed: 13
        },
        {
          id: 'f38b58de-3273-4723-a78b-2f918e9aa2d5',
          name: 'Wichita State Shockers',
          market: 'Wichita State',
          type: 'team',
          seed: 4
        },
        {
          id: '22d90601-19d4-461b-a901-924d12f116ed',
          name: 'St. Bonaventure Bonnies',
          market: 'St. Bonaventure',
          type: 'team',
          seed: 11
        },
        {
          id: '324ccccc-575b-4b82-acb0-fbb8e68da13b',
          name: 'Virginia Tech Hokies',
          market: 'Virginia Tech',
          type: 'team',
          seed: 8
        },
        {
          id: 'bdb7d7a4-45f8-4bf3-ab85-15488c451494',
          name: 'Butler Bulldogs',
          market: 'Butler',
          type: 'team',
          seed: 10
        },
        {
          id: '912f8837-1d81-4ef9-a576-a21f271d4c64',
          name: 'Florida Gators',
          market: 'Florida',
          type: 'team',
          seed: 6
        }
      ]
    }
  ]
}
