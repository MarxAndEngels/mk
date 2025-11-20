let data = [
    {
        "id": 1,
        "title": "Liu Kang", //поглотил силу хроники, которая управляет временем = поэтому сильный такой
        "subtitle": "MK1 Khaos Reigns",
        "power": 9900,
        "intelligence": 9900,
        "dexterity": 9900,
        "special_skills": 9900,
        "fighting_skills": 9900,
        "image":"lukangmk1.jpg"
    },
    {
        "id": 2,
        "title": "Shaggy", //персонаж прикол, по силе как герас))
        "subtitle": "Powerful",
        "power": 9800,
        "intelligence": 9800,
        "dexterity": 9800,
        "special_skills": 9800,
        "fighting_skills": 9800,
        "image":"shaggy.jpg"
    },
    {
        "id": 11,
        "title": "Reptile",
        "subtitle": "MK II 1993",
        "power": 9350, //опасен своей невидимостью и ядами, сильнее т-1000 и колоса, слабее ермака, хищника, чужого, рембо,пугало, плюща ядовитого и синдел
        "intelligence": 8400,
        "dexterity": 8800,
        "special_skills":9350,
        "fighting_skills":9350,
        "image":"reptile1993.jpg"
    },
    {
        "id": 16,
        "title": "Cyrax",
        "subtitle": "MK 3 1995", //сильнее т-1000 и колоса, слабее ермака, хищника, чужого, рембо,пугало, плюща ядовитого и синдел
        "power": 9340, //возможно можно вернуть им человечность и они встанут за вас драться, выполняют команды и могут немножк лохонуться думаю, 
        "intelligence": 4000,
        "dexterity": 9300,
        "special_skills":9340, //сетка
        "fighting_skills":9340,
        "image":"cyrax1995.jpg"
    },
    {
        "id": 19,
        "title": "Nightwolf",
        "subtitle": "MK 3 1995",
        "power": 9350, //сильнее т-1000 и колоса, слабее ермака, хищника, чужого, рембо,пугало, плюща ядовитого и синдел
        "intelligence": 9700, //координирует и помогает рейдену, говорит сразу об угрозах возможных и сильных
        "dexterity": 9300, //есть телепорт других и себя
        "special_skills":9350, //может отражать атаки, есть телепорт других и себя
        "fighting_skills":9150,
        "image":"nwolf1995.jpg"
    },
    {
        "id": 20,
        "title": "Sektor",
        "subtitle": "MK 3 1995", //сильнее т-1000 и колоса, слабее ермака, хищника, чужого, рембо,пугало, плюща ядовитого и синдел
        "power": 9340, //возможно можно вернуть им человечность и они встанут за вас драться, выполняют команды и могут немножк лохонуться думаю
        "intelligence": 4000,
        "dexterity": 9300,
        "special_skills":9340, //навигационные ракеты
        "fighting_skills":9340,
        "image":"sektor1995.jpg"
    },
    {
        "id": 23,
        "title": "Stryker",
        "subtitle": "MK 3 1995",
        "power": 8850,//слабее капитана холода и эйроне блека
        "intelligence": 8300,
        "dexterity": 7900,
        "special_skills":8850,
        "fighting_skills":8800, 
        "image":"stryker1995.jpg"
    },
    {
        "id": 25,
        "title": "Nitara",
        "subtitle": "MK Deadly Alliance",
        "power": 8850,
        "intelligence": 8400,
        "dexterity": 9000,
        "special_skills": 8850,
        "fighting_skills":8800,
        "image":"nitarada.jpg"
    },
    {
        "id": 28,
        "title": "Batman",
        "subtitle": "MK vs. DC Universe",
        "power": 9650, //сильнее супермена
        "intelligence": 9650,
        "dexterity": 9200,
        "special_skills": 9650, //сильнее супермена
        "fighting_skills":9600,
        "image":"batmanvsdc.jpg"
    },
    {
        "id": 29,
        "title": "Captain Marvel",
        "subtitle": "Shazam from MK vs. DC Universe",
        "power": 9550, //слабее супермена
        "intelligence": 8600,
        "dexterity": 9550,
        "special_skills":9550,
        "fighting_skills":9550,
        "image":"shazamvsdc.jpg"
    },
    {
        "id": 30,
        "title": "Catwoman",
        "subtitle": "MK vs. DC Universe",
        "power": 8850,
        "intelligence": 8300,
        "dexterity": 8300, //есть гаджеты для быстрого передвижения по городу
        "special_skills": 8850,
        "fighting_skills":8800,
        "image":"catvsdc.jpg"
    },
    {
        "id": 30,
        "title": "Captain Cold",
        "subtitle": "MK vs. DC Universe",
        "power": 8900, //слабее кенши, бейна
        "intelligence": 8600, //знает как заморозить флеша, физик
        "dexterity": 7900,
        "special_skills":8900,
        "fighting_skills":8800, //драться не умее думаю - 200 от стандарта
        "image":"catvsdc.jpg"
    },
    {
        "id": 30,
        "title": "Hellboy",
        "subtitle": "MK vs. DC Universe",
        "power": 8850, //слабее эйрон блека, зеленой стрелы, миротворца
        "intelligence": 8500,
        "dexterity": 7900,
        "special_skills": 8850,
        "fighting_skills":8800,
        "image":"catvsdc.jpg"
    },
    {
        "id": 31,
        "title": "Doomsday",
        "subtitle": "",
        "power": 9600, //на равне с супером
        "intelligence": 3500,
        "dexterity": 9550,
        "special_skills":9600,
        "fighting_skills":9600,
        "image":"deadstrokevsdc.jpg"
    },
    {
        "id": 33,
        "title": "Joker",
        "subtitle": "MK vs. DC Universe",
        "power": 9550, //слабее супермена и потому что он всегда проебывает уменьшены возможности всех побеждать
        "intelligence": 7400,
        "dexterity": 9200,
        "special_skills":9550, //слабее супермена и потому что он всегда проебывает уменьшены возможности всех побеждать
        "fighting_skills":9100,
        "image":"jokervsdc.jpg"
    },
    {
        "id": 34,
        "title": "Lex Luthor",
        "subtitle": "MK vs. DC Universe",
        "power": 9550, //слабее супермена и потому что он всегда проебывает уменьшены возможности всех побеждать
        "intelligence": 9550,
        "dexterity": 9200,
        "special_skills":9550, //потому что он всегда проебывает уменьшены возможности всех побеждать
        "fighting_skills":9100,
        "image":"lexvsdc.jpg"
    },
    {
        "id": 38,
        "title": "Darkseid",
        "subtitle": "dc2",
        "power": 9600, //на равне с супером
        "intelligence": 9550,
        "dexterity": 9550, //медленее супермена, но может телепортироваться и по типо бога перс
        "special_skills":9600, //на равне с супером
        "fighting_skills":9600,
        "image":"darkkhanvsdc.jpg"
    },
    {
        "id": 38,
        "title": "Dark Kahn",
        "subtitle": "MK vs. DC Universe",
        "power": 9600, //на равне с супером
        "intelligence": 8725,
        "dexterity": 9550,
        "special_skills":9600,
        "fighting_skills": 9475,
        "image":"darkkhanvsdc.jpg"
    },
    {
        "id": 40,
        "title": "Leatherface",
        "subtitle": "MK X",
        "power": 8700,
        "intelligence": 3800,
        "dexterity": 7900,
        "special_skills":8700,
        "fighting_skills":8600,
        "image":"leatherfacex.jpg"
    },
    {
        "id": 41,
        "title": "Predator",
        "subtitle": "MK X",
        "power": 9360,
        "intelligence": 9360, // почему-то он сражается между другими, чтобы стать сильнее. Такой себе по уму думаю
        "dexterity": 9300,
        "special_skills": 9360, //ловушки, телепорты, невидимость, самоубийство, новые технологии возможно
        "fighting_skills": 9350, //типо почти лучший и пытается стать еще сильнее
        "image":"predatorx.jpg"
    },
    {
        "id": 31,
        "title": "Deathstroke",
        "subtitle": "MK vs. DC Universe", //сильнее т-1000 и колоса, слабее ермака, хищника, чужого, рембо,пугало, плюща ядовитого и синдел
        "power": 9350, // Думаю, что он может пытаться расстерлять врагов, а потом спрятать в сетку какую-нибудь
        "intelligence": 8500, //умен, расчетлив
        "dexterity": 8300, //из-за сыворотки супер-солдата думаю, что быстро ходит
        "special_skills":9350,
        "fighting_skills":9350,
        "image":"deadstrokevsdc.jpg"
    },
    {
        "id": 42,
        "title": "Alien",
        "subtitle": "MK X",
        "power": 9360, //потому что другие персонажи сильнее могут уловить опасность его и персонаж очень силен
        "intelligence": 3800,
        "dexterity": 8300,
        "special_skills": 9360,
        "fighting_skills": 9000, 
        "image":"alienx.jpg"
    },
        {
        "id": 30,
        "title": "Rambo",
        "subtitle": "MK 11",
        "power": 9360, //персонаж силен ловушками и оружем
        "intelligence": 7800,
        "dexterity": 7900,
        "special_skills":9360,
        "fighting_skills":9350,
        "image":"scorp11.jpg"
    },
       {
        "id": 32,
        "title": "Scarecrow", //пугало
        "subtitle": "dc2", //сильнее т-1000 и колоса, слабее ермака, хищника, чужого, рембо,пугало, плюща ядовитого и синдел
        "power": 9360, //потому что другие персонажи сильнее могут уловить опасность его
        "intelligence": 8500, //понимает какие страхи могут подействовать на жертву
        "dexterity": 7900,
        "special_skills": 9360,
        "fighting_skills":8600, 
        "image":"greenvsdc.jpg"
    },
    {
        "id": 32,
        "title": "Poison Ivy",
        "subtitle": "dc2", //сильнее т-1000 и колоса, слабее ермака, хищника, чужого, рембо,пугало, плюща ядовитого и синдел
        "power": 9360, //потому что другие персонажи сильнее могут уловить опасность его
        "intelligence": 9360, 
        "dexterity": 8000,
        "special_skills": 9360,
        "fighting_skills":8800, 
        "image":"greenvsdc.jpg"
    },
       {
        "id": 32,
        "title": "Rogue", //шельма //сильнее т-1000 и колоса, слабее ермака, хищника, чужого, рембо,пугало, плюща ядовитого и синдел
        "subtitle": "Marvel vs. Capcom 2",
        "power": 9350, // дотронется и высосит всю силу, удары сильные очень, может скинуть кислоту на терминаторов и в ловушки кинуть их
        "intelligence": 8300,
        "dexterity": 9000,
        "special_skills":9350,
        "fighting_skills":9350,
        "image":"greenvsdc.jpg"
    },
      {
        "id": 32,
        "title": "Wolverine",
        "subtitle": "X-Men: Children of the Atom", //сильнее т-800, слабее колоса
        "power": 9310, //думаю, что слабее саб-зиро, скорпиона и т.д. потому что они смогут его развести и вырубить на какое-т время, (его можно победить если вырубить его только, но он может учуять добычу, пули ему не так сложно получать)
        "intelligence": 8300,
        "dexterity": 8300, 
        "special_skills":9310,
        "fighting_skills":9310,
        "image":"greenvsdc.jpg"
    },
    {
        "id": 32,
        "title": "X-23",
        "subtitle": "Ultimate Marvel vs. Capcom 3", //сильнее т-800, слабее колоса
        "power": 9310, //можно победить если вырубить его только, но он может учуять добычу, на пули ему пофигу
        "intelligence": 8300,
        "dexterity": 8300, 
        "special_skills":9310,
        "fighting_skills":9100,
        "image":"greenvsdc.jpg"
    },
    {
        "id": 32,
        "title": "Deadpool",
        "subtitle": "Ultimate Marvel vs. Capcom 3",
        "power": 9250, //можно победить если вырубить его только, слабее терминатора т-800
        "intelligence": 7600,
        "dexterity": 7900, 
        "special_skills":9250,
        "fighting_skills":9250,
        "image":"greenvsdc.jpg"
    },
    {
        "id": 32,
        "title": "Colossus",
        "subtitle": "X-Men: Children of the Atom",
        "power": 9330, //сильнее т-1000, слабее скорпа(может сжечь), саб-зиро(заморозить сильно) и др.
        "intelligence": 8100,
        "dexterity": 7900, 
        "special_skills":9330,
        "fighting_skills":9000,
        "image":"greenvsdc.jpg"
    },
      {
        "id": 32,
        "title": "Sabretooth",
        "subtitle": "Marvel vs. Capcom 2",
        "power": 9300, //слабее т-1000 и росомахи, слабее восстанавливаться, нет адамантиума, если голову отрубить и она далеко не факт ,что восстановится 
        "intelligence": 7800,
        "dexterity": 8300, 
        "special_skills":9300,
        "fighting_skills":9100,
        "image":"greenvsdc.jpg"
    },
    {
        "id": 30,
        "title": "T-1000", //сильнее терминатора, слабее колоса
        "subtitle": "MK 1",
        "power": 9320,
        "intelligence": 7500, //но в основном у него только одна задача бешенная. умнее т-800, по сравнению с ним у него больше свободы действий. и он может быть свободен
        "dexterity": 8500, //+200 за его метал ловкий 
        "special_skills":9320,
        "fighting_skills":9100,
        "image":"scorp11.jpg"
    },
    {
        "id": 32,
        "title": "Terminator T-800",
        "subtitle": "мк 11",
        "power": 9300, //слабее т-1000, росомахи, сильнее робокопа, 
        "intelligence": 7400, //в основном у него только одна задача бешенная. тупее т-1000
        "dexterity": 7900, 
        "special_skills":9300,
        "fighting_skills":9100,
        "image":"greenvsdc.jpg"
    },
    {
        "id": 32,
        "title": "Robocop",
        "subtitle": "мк 11",
        "power": 9250, //слабее терминатора
        "intelligence": 7400, //в основном у него только одна задача бешенная. тупее т-1000
        "dexterity": 7900, 
        "special_skills":9250,
        "fighting_skills":9000,
        "image":"greenvsdc.jpg"
    },
    {
        "id": 39,
        "title": "Jason Voorhees",
        "subtitle": "MK X",
        "power": 9200, //слабее робокопа
        "intelligence": 3900,
        "dexterity": 8800,
        "special_skills":9200,
        "fighting_skills":9000,
        "image":"jasonx.jpg"
    },
    {
        "id": 32,
        "title": "Freddy Krueger",
        "subtitle": "мк 11",
        "power": 9150, //слабее джейсона
        "intelligence": 7100,
        "dexterity": 8800, 
        "special_skills":9150,
        "fighting_skills":9000,
        "image":"greenvsdc.jpg"
    },
    {
        "id": 30,
        "title": "Havik",
        "subtitle": "MK 11",
        "power": 9300, //можно отрубить голову ему и он ничего не сделает, слабее т-1000, росомахи
        "intelligence": 7400,
        "dexterity": 7900,
        "special_skills":9300,
        "fighting_skills":9100,
        "image":"scorp11.jpg"
    },
    {
        "id": 32,
        "title": "Venom",
        "subtitle": "Marvel vs. Capcom 2",
        "power": 9300, // слабее т-1000, росомахи
        "intelligence": 7600,
        "dexterity": 8800,
        "special_skills":9300,
        "fighting_skills":9000, //+200 за симбота инопланетного, который может разорвать многих
        "image":"greenvsdc.jpg"
    },
    {
        "id": 32,
        "title": "Leonardo",
        "subtitle": "dc2",
        "power": 9350, 
        "intelligence": 8300,
        "dexterity": 8300,
        "special_skills":9350,
        "fighting_skills":9350,
        "image":"greenvsdc.jpg"
    },
    {
        "id": 32,
        "title": "Raphael",
        "subtitle": "dc2",
        "power": 9345,  //чуть послабее лео
        "intelligence": 8300,
        "dexterity": 8300,
        "special_skills":9345, 
        "fighting_skills":9345, 
        "image":"greenvsdc.jpg"
    },
    {
        "id": 32,
        "title": "Michelangelo",
        "subtitle": "dc2",
        "power": 9345,  //чуть послабее лео
        "intelligence": 7800,
        "dexterity": 8300,
        "special_skills":9345, 
        "fighting_skills":9345, 
        "image":"greenvsdc.jpg"
    },
    {
        "id": 37,
        "title": "Wonder Woman",
        "subtitle": "dc2",
        "power": 9550, //слабее супера
        "intelligence": 8450,
        "dexterity": 9500, //слабее шазама по скорости
        "special_skills":9550,
        "fighting_skills":9550,
        "image":"wondervsdc.jpg"
    },
    {
        "id": 37,
        "title": "Aquaman",
        "subtitle": "dc2",
        "power": 9550, //слабее супера и непробиваем также
        "intelligence": 8500,
        "dexterity": 9300, 
        "special_skills":9550,
        "fighting_skills":9450,
        "image":"wondervsdc.jpg"
    },
    {
        "id": 36,
        "title": "The Flash",
        "subtitle": "dc2",
        "power": 9450, //слабее супера и хомлендера и можно ранить его если не бегает 
        "intelligence": 8500,
        "dexterity": 9650, //быстрее супера
        "special_skills":9600,  //быстрее супера и во времени перемещение
        "fighting_skills":9450, // слабее в драке с хомлендером
        "image":"flashvsdc.jpg"
    },
    {
        "id": 32,
        "title": "Green Lantern",
        "subtitle": "dc2",
        "power": 9400, //слабее супера и хомлендера и можно ранить его если не защищен
        "intelligence": 8600,
        "dexterity": 9510, // быстрее чудо женщины, но медленее шазама
        "special_skills":9400,
        "fighting_skills":9200, // слабее в драке с хомлендером и флешем и могут не помочь способности
        "image":"greenvsdc.jpg"
    },
    {
        "id": 32,
        "title": "Cyborg",
        "subtitle": "dc2",
        "power": 9400, //слабее супера и хомлендера и можно ранить его если не защищен
        "intelligence": 9550,
        "dexterity": 9310, // медленнее железного чела летает, телепорт только спасает
        "special_skills":9400,
        "fighting_skills":8800, // слабее в драке с хомлендером, флешем и может не уничтожить врагов
        "image":"greenvsdc.jpg"
    },
    {
        "id": 32,
        "title": "Zod",
        "subtitle": "dc2",
        "power": 9600, // на равне с суперменом
        "intelligence": 8900,
        "dexterity": 9600,
        "special_skills":9599,
        "fighting_skills":9600,
        "image":"greenvsdc.jpg"
    },
    {
        "id": 32,
        "title": "Brainiac",
        "subtitle": "dc2",
        "power": 9600, //на равне с супером
        "intelligence": 9640,
        "dexterity": 9500, //медленее супермена, но может телепортироваться и по типо бога перс слабее телепорт чем дарксайда думаю
        "special_skills":9600, //на равне с супером
        "fighting_skills":9600,
        "image":"greenvsdc.jpg"
    },
    {
        "id": 32,
        "title": "Doctor Doom",
        "subtitle": "Marvel vs. Capcom 2",
        "power": 9600, //на равне с супером
        "intelligence": 9550,
        "dexterity": 9550, //медленее супермена, но может телепортироваться и по типо бога перс
        "special_skills":9600, //на равне с супером
        "fighting_skills":9100, // может проебаться с использованием особых умений
        "image":"greenvsdc.jpg"
    },
    {
        "id": 32,
        "title": "Hulk | Bruce Banner",
        "subtitle": "Marvel vs. Capcom 2",
        "power": 9600, //на равне с супером
        "intelligence": 9550,
        "dexterity": 9200,
        "special_skills":9600,
        "fighting_skills":9300,  // может проебаться с использованием особых умений
        "image":"greenvsdc.jpg"
    },
    {
        "id": 32,
        "title": "Thanos",
        "subtitle": "Marvel vs. Capcom 2",
        "power": 9600, // на равне с суперменом
        "intelligence": 9550,
        "dexterity": 9500,
        "special_skills":9600,
        "fighting_skills":9600,
        "image":"greenvsdc.jpg"
    },
    {
        "id": 30,
        "title": "Shao Kahn",
        "subtitle": "MK 11",
        "power": 9600,
        "intelligence": 7900,
        "dexterity": 9200,
        "special_skills":9600,
        "fighting_skills":9350, // может проебаться с использованием особых умений
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Onaga",
        "subtitle": "MK 11",
        "power": 9600,
        "intelligence": 9550,
        "dexterity": 9300,
        "special_skills":9600,
        "fighting_skills":9600, // может проебаться с использованием особых умений
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Quan Chi",
        "subtitle": "MK 9",
        "power": 9550,
        "intelligence": 9550, //управлял людьми даже
        "dexterity": 9300,
        "special_skills":9550, //может заточить в приеспонию и черпать от туда силы, управлял людьми даже
        "fighting_skills":9150, // может проебаться с использованием особых умений
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Kotal Kahn",
        "subtitle": "MK 11",
        "power": 9550,
        "intelligence": 8500, // мог получить знания богов
        "dexterity": 9200,
        "special_skills":9550,
        "fighting_skills":9350, // может проебаться с использованием особых умений
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Shang Tsung",
        "subtitle": "MK 11",
        "power": 9550,
        "intelligence": 9550, //есть знание коллективного разума
        "dexterity": 9200,
        "special_skills":9550,
        "fighting_skills":9150, // может проебаться с использованием особых умений
        "image":"scorp11.jpg"
    },
    {
        "id": 17,
        "title": "Ermac",
        "subtitle": "MK 3 1995",
        "power": 9360, //думаю, что он может поднимать соперников и они ничего уже не смогут сделать. То есть вырватсья не смогут. А от шарика рейна можно было б вырваться
        "intelligence": 9550, //имеет коллективный разум и знания многих умных ребят
        "dexterity": 9200,
        "special_skills":9360,
        "fighting_skills":9360,
        "image":"ermac1995.jpg"
    },
    {
        "id": 32,
        "title": "Magneto",
        "subtitle": "Marvel vs. Capcom 2",
        "power": 9380, //слабее супера и хомлендера и можно ранить его если не защищен, слабее зеленого фонаря думаю
        "intelligence": 9400, //чуть умнее куан чи и слабее более умных, железного чела и др.
        "dexterity": 9310, // на равне с полетом киборга
        "special_skills":9380,
        "fighting_skills":9200, // слабее в драке с хомлендером и флешем и могут не помочь способности
        "image":"greenvsdc.jpg"
    },
    {
        "id": 32,
        "title": "Storm",
        "subtitle": "X-Men: Children of the Atom",
        "power": 9375, //слабее супера и хомлендера и можно ранить его если не защищен, слабее зеленого фонаря и магнетто думаю
        "intelligence": 8900,
        "dexterity": 9100, //сверх полет дал бы +100
        "special_skills":9375,
        "fighting_skills":8800,
        "image":"greenvsdc.jpg"
    },
        {
        "id": 32,
        "title": "Robin",
        "subtitle": "dc2",
        "power": 9375, // слабее магнето
        "intelligence": 8600,
        "dexterity": 9000,
        "special_skills":9375, //приспособленеи и знание бетмена
        "fighting_skills":9350, 
        "image":"greenvsdc.jpg"
    },
    {
        "id": 32,
        "title": "Donatello",
        "subtitle": "dc2",
        "power": 9550,
        "intelligence": 9550,
        "dexterity": 9200,
        "special_skills":9550,
        "fighting_skills":9350,
        "image":"greenvsdc.jpg"
    },
     {
        "id": 30,
        "title": "Nightwolf",
        "subtitle": "MK 11",
        "power": 9350,
        "intelligence": 9700, //координирует и помогает рейдену, говорит сразу об угрозах возможных и сильных
        "dexterity": 9300, //есть телепорт других и себя
        "special_skills":9350, //может отражать атаки, есть телепорт других и себя
        "fighting_skills":9150,
        "image":"scorp11.jpg"
    },

    //еще персы
    {
        "id": 32,
        "title": "Harley Quinn",
        "subtitle": "dc2",
        "power": 8850,
        "intelligence": 7100,
        "dexterity": 7900,
        "special_skills": 8850,
        "fighting_skills":8600, //не умеет планировать
        "image":"greenvsdc.jpg"
    },
    {
        "id": 32,
        "title": "Bane",
        "subtitle": "dc2",
        "power": 8950, //слабее горо
        "intelligence": 7800,
        "dexterity": 7900,
        "special_skills":8950,
        "fighting_skills":8950,
        "image":"greenvsdc.jpg"
    },
    {
        "id": 32,
        "title": "Green Arrow", //слабый, можно обойти его стрелы думаю
        "subtitle": "dc2",
        "power": 8900, //слабее кенши, бейна
        "intelligence": 8300, 
        "dexterity": 7900,
        "special_skills":8900,
        "fighting_skills":8900, //опасные взрывные, отравленные, электрошоковые, газовые и другие стрелы
        "image":"greenvsdc.jpg"
    },
    {
        "id": 32,
        "title": "Sentinel страж",
        "subtitle": "X-Men: Children of the Atom",
        "power": 8800,
        "intelligence": 3900, 
        "dexterity": 9000, 
        "special_skills":8800, 
        "fighting_skills":8800,
        "image":"greenvsdc.jpg"
    },
    {
        "id": 32,
        "title": "Juri", //думаю не таким 
        "subtitle": "Street Fighter",
        "power": 9000, // слабее такеды
        "intelligence": 7900,
        "dexterity": 8300,
        "special_skills":9000,
        "fighting_skills":9000,
        "image":"greenvsdc.jpg"
    },
    {
        "id": 32,
        "title": "Cammy",
        "subtitle": "Marvel vs. Capcom 2",
        "power": 9000, // слабее такеды
        "intelligence": 8300,
        "dexterity": 7900,
        "special_skills":9000,
        "fighting_skills":9000,
        "image":"greenvsdc.jpg"
    },
    {
        "id": 32,
        "title": "Chun-Li",
        "subtitle": "Marvel vs. Capcom 2",
        "power": 9000, // слабее такеды
        "intelligence": 8300,
        "dexterity": 7900,
        "special_skills":9000,
        "fighting_skills":9000,
        "image":"greenvsdc.jpg"
    },
    {
        "id": 32,
        "title": "Gambit",
        "subtitle": "Marvel vs. Capcom 2",
        "power": 9100,
        "intelligence": 8300,
        "dexterity": 7900,
        "special_skills":9100,
        "fighting_skills":9100,
        "image":"greenvsdc.jpg"
    },
    {
        "id": 32,
        "title": "Dragunov",
        "subtitle": "Tekken 7",
        "power": 9000, // слабее такеды
        "intelligence": 8500,
        "dexterity": 7900, 
        "special_skills":9000,
        "fighting_skills":9000,
        "image":"greenvsdc.jpg"
    },
    //еще персы

    {
        "id": 30,
        "title": "Scorpion",
        "subtitle": "MK 11",
        "power": 9350, //сильнее т-1000 и колоса, слабее ермака, хищника, чужого, рембо,пугало, плюща ядовитого и синдел
        "intelligence": 8400,
        "dexterity": 9300, //типо жестко может тп, но не досказано это
        "special_skills":9350,
        "fighting_skills":9350,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Sub-Zero",
        "subtitle": "MK 11",
        "power": 9350, //сильнее т-1000 и колоса, слабее ермака, хищника, чужого, рембо,пугало, плюща ядовитого и синдел
        "intelligence": 8400,
        "dexterity": 8800,
        "special_skills":9350,
        "fighting_skills":9350,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Liu Kang",
        "subtitle": "MK 11",
        "power": 9600,
        "intelligence": 8500,
        "dexterity": 9100,
        "special_skills":9600, //связь с рейденом и превращение в дракона
        "fighting_skills":9600,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Bo' Rai Cho",
        "subtitle": "MK 11",
        "power": 9350,
        "intelligence": 8700, //изобрел элексир нейтролизуйющий яды, понимает проклятия, порталы и заклинания и учитв сех
        "dexterity": 7900,
        "special_skills":9350, //есть ядовитые элексиры, может казаться слабым, но это приманка 
        "fighting_skills":9350,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Noob Saibot",
        "subtitle": "MK 11",
        "power": 9350, //сильнее т-1000 и колоса, слабее ермака, хищника, чужого, рембо,пугало, плюща ядовитого и синдел
        "intelligence": 8400,
        "dexterity": 9300, //типо жестко может тп, но не досказано это
        "special_skills":9350,
        "fighting_skills":9350,
        "image":"scorp11.jpg"
    },
       {
        "id": 30,
        "title": "Smoke",
        "subtitle": "MK 11",
        "power": 9350, //сильнее т-1000 и колоса, слабее ермака, хищника, чужого, рембо,пугало, плюща ядовитого и синдел
        "intelligence": 8400,
        "dexterity": 9200, 
        "special_skills":9350,
        "fighting_skills":9350,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Rain",
        "subtitle": "MK 11",
        "power": 9350, //сильнее т-1000 и колоса, слабее ермака, хищника, чужого, рембо,пугало, плюща ядовитого и синдел
        "intelligence": 8400,
        "dexterity": 9200, 
        "special_skills":9350,
        "fighting_skills":9350,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Skarlet",
        "subtitle": "MK 11",
        "power": 9300, //если нет или мало крови не так сильна, слабее т-1000
        "intelligence": 8400,
        "dexterity": 8800, 
        "special_skills":9300,
        "fighting_skills":9300,
        "image":"scorp11.jpg"
    },

       {
        "id": 30,
        "title": "Triborg smoke (мб другие)",
        "subtitle": "MK 11",
        "power": 9340, //возможно можно вернуть им человечность и они встанут за вас драться, выполняют команды и могут немножк лохонуться думаю
        "intelligence": 4000,
        "dexterity": 9300,
        "special_skills":9340, //связка есть у смока за это, так бы 9340
        "fighting_skills":9340,
        "image":"scorp11.jpg"
    },
       {
        "id": 30,
        "title": "Cyber Sub-Zero",
        "subtitle": "MK 11",
        "power": 9340, //возможно можно вернуть им человечность и они встанут за вас драться, выполняют команды и могут немножк лохонуться думаю
        "intelligence": 4000,
        "dexterity": 9300,
        "special_skills":9340, //в полете может заморозить
        "fighting_skills":9340,
        "image":"scorp11.jpg"
    },
     {
        "id": 30,
        "title": "Tremor",
        "subtitle": "MK 11",
        "power": 9350, //сильнее т-1000 и колоса, слабее ермака, хищника, чужого, рембо,пугало, плюща ядовитого и синдел
        "intelligence": 7600,
        "dexterity": 7900, 
        "special_skills":9350,
        "fighting_skills":9350,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "D`Vorah",
        "subtitle": "MK 11",
        "power": 9350,  //сильнее т-1000 и колоса, слабее ермака, хищника, чужого, рембо,пугало, плюща ядовитого и синдел
        "intelligence": 8500, //понимает природу жуков и может ими осматривать территории
        "dexterity": 9200, 
        "special_skills":9350, //яды есть, жуки, сплести ловушку
        "fighting_skills":9100,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Sindel",
        "subtitle": "MK 11", //в мк9 ее улучшили сильно
        "power": 9360,
        "intelligence": 8400,
        "dexterity": 9200,
        "special_skills":9360,
        "fighting_skills":9150,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Sindel", // послебее чужого, хищники и др. потому что их атаки могут быть не ожиданными, чтобы обездвижить противника. А атаки синдел видны могут быть, чтобы обездвижить
        "subtitle": "MK 9", //в мк9 ее улучшили сильно
        "power": 9360,
        "intelligence": 8400,
        "dexterity": 9200,
        "special_skills":9360,
        "fighting_skills":9360,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Kitana",
        "subtitle": "MK 11",
        "power": 9350,
        "intelligence": 8400,
        "dexterity": 8800,
        "special_skills":9350, //связь с рейденом и превращение в дракона
        "fighting_skills":9350,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Johnny Cage",
        "subtitle": "MK 11",
        "power": 9350,
        "intelligence": 7800,
        "dexterity": 8350, //полет может появится только с зеленым сиянием. 8800(полет) - 7900(обычный чел) = 900 ; Так как слабо, то 900/2 = 450; 7900+450=8350
        "special_skills":9350, //сияние зеленое способное победить многих,когда угрожает опасность ему или его семье
        "fighting_skills":9350,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Frost",
        "subtitle": "MK 11", //сильнее т-1000 и колоса, слабее ермака, хищника, чужого, рембо,пугало, плюща ядовитого и синдел
        "power": 9340, //из-за ее тупости постоянной атаковать не подумав 
        "intelligence": 7400,
        "dexterity": 8800,
        "special_skills":9340,
        "fighting_skills":9340,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Kung Lao", //слабее фреди крюгера
        "subtitle": "MK 11",
        "power": 9100,
        "intelligence": 8400,
        "dexterity": 8800,
        "special_skills":9100, //связь с рейденом и магия шляпы
        "fighting_skills":9100,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Sonya Blade",
        "subtitle": "MK 11",
        "power": 8950, //слабее горо
        "intelligence": 8300,
        "dexterity": 7900,
        "special_skills":8950,
        "fighting_skills":8950,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Jax Briggs", 
        "subtitle": "MK 11", //слабее капитана холода и эйроне блека
        "power": 8850, //если есть руки металлически, то он сильнее
        "intelligence": 8300,
        "dexterity": 7900,
        "special_skills":8850,
        "fighting_skills":8850, //за мощные руки +50 до конца возможное
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Baraka",
        "subtitle": "MK 11",
        "power": 8800, 
        "intelligence": 7900,
        "dexterity": 7900,
        "special_skills":8800, 
        "fighting_skills":8800, 
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Cassie Cage",
        "subtitle": "MK 11",
        "power": 9000, // слабее такеды
        "intelligence": 8300,
        "dexterity": 8350, //полет может появится только с зеленым сиянием. 8800(полет) - 7900(обычный чел) = 900 ; Так как слабо, то 900/2 = 450; 7900+450=8350
        "special_skills":9000,
        "fighting_skills":9000,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Janet Cage",
        "subtitle": "MK 11",
        "power": 9000, // слабее такеды
        "intelligence": 8300,
        "dexterity": 8350, //полет может появится только с зеленым сиянием. 8800(полет) - 7900(обычный чел) = 900 ; Так как слабо, то 900/2 = 450; 7900+450=8350
        "special_skills":9000,
        "fighting_skills":9000,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Jaquie Briggs",
        "subtitle": "MK 11",
        "power": 8750,
        "intelligence": 8300,
        "dexterity": 8300,
        "special_skills":8750,
        "fighting_skills":8750,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Kano",
        "subtitle": "MK 11",
        "power": 9100, //слабее фреди крюгера
        "intelligence": 7900,
        "dexterity": 9200, //может полететь на транспорте или портале мб?
        "special_skills": 9100,
        "fighting_skills": 9100,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Kabal",
        "subtitle": "MK 11",
        "power": 8900, //слабее кенши, бейна
        "intelligence": 7700, 
        "dexterity": 8800, //+900 за скорость такую сверх быструю
        "special_skills":8900,
        "fighting_skills":8900, 
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Jade",
        "subtitle": "MK 11",
        "power": 9050, //слабе кунг лао
        "intelligence": 8400,
        "dexterity": 8800,
        "special_skills":9050,
        "fighting_skills":9050,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Kollector",
        "subtitle": "MK 11",
        "power": 9100, //может к себе притянуть, хук, зеленая энергия, забирает души других, может телепортироваться далеко
        "intelligence": 8500,
        "dexterity": 9200, //телепорт на небольшие расстония и обычный телепорт возможно есть, но всегда может использовать
        "special_skills":9100, 
        "fighting_skills":8800,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Erron Black",
        "subtitle": "MK 11",
        "power": 8900,
        "intelligence": 8500, //наемник из 19 века с долголетием и стрельбой сильной
        "dexterity": 7900,
        "special_skills":8900,
        "fighting_skills":8800,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Sheeva",
        "subtitle": "MK 11",
        "power": 8990,
        "intelligence": 7900,
        "dexterity": 8800,
        "special_skills":8990,
        "fighting_skills":8990,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "kira",
        "subtitle": "MK",
        "power": 8750,
        "intelligence": 7800, 
        "dexterity": 7900,
        "special_skills":8750,
        "fighting_skills":8750,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Goro",
        "subtitle": "MK 11",
        "power": 8990,
        "intelligence": 7900,
        "dexterity": 8800,
        "special_skills":8990,
        "fighting_skills":8990,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Kintaro",
        "subtitle": "MK 11",
        "power": 9000, // слабее такеды
        "intelligence": 7900,
        "dexterity": 8800,
        "special_skills":9000,
        "fighting_skills":9000,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Ferra / Torr",
        "subtitle": "MK 11",
        "power": 8850,
        "intelligence": 7300,
        "dexterity": 7900,
        "special_skills":8850,
        "fighting_skills":8800,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Takeda",
        "subtitle": "MK 11",
        "power": 9050,
        "intelligence": 8300,
        "dexterity": 8800,
        "special_skills": 9050,
        "fighting_skills": 9050,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Motaro", //сильный, сильно неуезвимый, телепорт на ближайшие расстояния
        "subtitle": "MK 11",
        "power": 9000, // слабее такеды
        "intelligence": 7900,
        "dexterity": 8800,
        "special_skills":9000,
        "fighting_skills":9000,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Conan",
        "subtitle": "MK 1",
        "power": 8850,
        "intelligence": 8400, 
        "dexterity": 7900,
        "special_skills":8850, //естьу мнение возрождение от мага, но это такое себе, он слаб
        "fighting_skills":8850,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Darrius",
        "subtitle": "MK 1",
        "power": 8750,
        "intelligence": 8300, 
        "dexterity": 7900,
        "special_skills":8750, 
        "fighting_skills":8750, 
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Moloch",
        "subtitle": "MK 1",
        "power": 8800,
        "intelligence": 6900, 
        "dexterity": 7900, 
        "special_skills":8800, 
        "fighting_skills":8800,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Ghostface", //внутри несколко персонажей из клана черный дракон от кано
        "subtitle": "MK 11",
        "power": 8850,
        "intelligence": 7800, 
        "dexterity": 8800,
        "special_skills":8850, 
        "fighting_skills":8800,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Peacemaker",
        "subtitle": "MK 1",
        "power": 8900,
        "intelligence": 7600, //планировать не умеет атаки
        "dexterity": 8800, 
        "special_skills":8900,
        "fighting_skills":8600,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Reiko",
        "subtitle": "MK 1",
        "power": 8950, //слабее горо
        "intelligence": 7800, //эмоционально нестабилен моежт быть и безумен
        "dexterity": 7900,
        "special_skills":8950,
        "fighting_skills":8950,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Tanya",
        "subtitle": "MK 1",
        "power": 8750,
        "intelligence": 8400, 
        "dexterity": 8800, 
        "special_skills":8750,
        "fighting_skills":8750,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Madam Bo",
        "subtitle": "MK 11",
        "power": 9050,
        "intelligence": 8700,
        "dexterity": 7900,
        "special_skills": 9050,
        "fighting_skills": 9050,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Mavado",
        "subtitle": "",
        "power": 8800,
        "intelligence": 8300, 
        "dexterity": 7900, 
        "special_skills":8800, 
        "fighting_skills":8800,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Kenshi",
        "subtitle": "MK 11",
        "power": 8950,
        "intelligence": 8400, //мб меч говорит ему о чем-то божественном +100
        "dexterity": 7900,
        "special_skills":8950,
        "fighting_skills":8950,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Li Mei", //тренил борай чо ее
        "subtitle": "MK 11",
        "power": 9000, // слабее такеды
        "intelligence": 8400,
        "dexterity": 8800,
        "special_skills":9000,
        "fighting_skills":9000,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Ashrah",
        "subtitle": "MK 1",
        "power": 8850,
        "intelligence": 7400, //меч застяавляет убивать демонов, она ничего не может сделать...
        "dexterity": 8800,
        "special_skills":8850,
        "fighting_skills":8850,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Sareena",
        "subtitle": "MK 1",
        "power": 8800,
        "intelligence": 8400, 
        "dexterity": 7900, //если она демон, то может летать, смотря на часть игры, то 9000
        "special_skills":8800, 
        "fighting_skills":8800,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Mileena",
        "subtitle": "MK 11",
        "power": 9050,
        "intelligence": 7900,
        "dexterity": 8800,
        "special_skills":9050,
        "fighting_skills":9050,
        "image":"scorp11.jpg"
    },
    {
        "id": 29,
        "title": "Superman",
        "subtitle": "DC 2",
        "power": 9600,
        "intelligence": 8500,
        "dexterity": 9600,
        "special_skills":9600,
        "fighting_skills":9600,
        "image":"batmanvsdc.jpg"
    },
    {
        "id": 29,
        "title": "Supergirl",
        "subtitle": "DC 2",
        "power": 9600,
        "intelligence": 8500,
        "dexterity": 9599,
        "special_skills":9599,
        "fighting_skills":9599,
        "image":"batmanvsdc.jpg"
    },
    {
        "id": 29,
        "title": "Omniman",
        "subtitle": "DC 2",
        "power": 9650, //сильнее супера
        "intelligence": 7800,
        "dexterity": 9600,
        "special_skills":9600,
        "fighting_skills":9650,
        "image":"batmanvsdc.jpg"
    },
    {
        "id": 29,
        "title": "Homelander",
        "subtitle": "DC 2",
        "power": 9500, //слабее супера и других мощных персов dc
        "intelligence": 6400,
        "dexterity": 9500,
        "special_skills":9500,
        "fighting_skills":9500,
        "image":"batmanvsdc.jpg"
    },

    {
        "id": 43,
        "title": "Kratos", //может управлять временем и убивал богов = поэтому чуть сильнее цитрион
        "subtitle": "MK 9",
        "power": 9760,
        "intelligence": 8500,
        "dexterity": 9760,
        "special_skills": 9760,
        "fighting_skills": 9760,
         "image":"alienx.jpg"
    },
    {
        "id": 45,
        "title": "Spawn",
        "subtitle": "MK 11",
        "power": 9760,
        "intelligence": 8500,
        "dexterity": 9760,
        "special_skills": 9760,
        "fighting_skills": 9760,
        "image":"alienx.jpg"
    },

    {
        "id": 30,
        "title": "Raiden",
        "subtitle": "MK 11",
        "power": 9700,
        "intelligence":9700,
        "dexterity": 9700,
        "special_skills": 9700,
        "fighting_skills":9700,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Cetrion", //дочь хроники, которая управляет временем = поэтому сильная такая
        "subtitle": "MK 11", // но кажется, что этого перса могут слить, если захотят имать не поможет, а вот герасу помогут если что
        "power": 9750,
        "intelligence": 9750,
        "dexterity": 9750,
        "special_skills": 9750,
        "fighting_skills": 9750,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Geras", //слуга хроники, которая управляет временем = поэтому сильный такой
        "subtitle": "MK 11",
        "power": 9800,
        "intelligence": 9800,
        "dexterity": 9800,
        "special_skills": 9800,
        "fighting_skills": 9800,
        "image":"scorp11.jpg"
    },
    {
        "id": 30,
        "title": "Fujin",
        "subtitle": "MK 11",
        "power": 9700,
        "intelligence":9700,
        "dexterity": 9700,
        "special_skills": 9700,
        "fighting_skills":9700,
        "image":"scorp11.jpg"
    },
    {
        "id": 44,
        "title": "Shinnok",
        "subtitle": "MK X",
        "power": 9710,
        "intelligence":9710,
        "dexterity": 9710,
        "special_skills": 9710,
        "fighting_skills":9710,
        "image":"alienx.jpg"
    },
    {
        "id": 30,
        "title": "Raiden",
        "subtitle": "С амулетом шиннока MK 11",
        "power": 9710,
        "intelligence":9710,
        "dexterity": 9710,
        "special_skills": 9710,
        "fighting_skills":9710,
        "image":"scorp11.jpg"
    },
    {
        "id": 45, 
        "title": "Kronika",
        "subtitle": "MK 11",
        "power": 9850,
        "intelligence": 9850,
        "dexterity": 9850,
        "special_skills": 9850,
        "fighting_skills": 9850,
        "image":"alienx.jpg"
    },
   ];
   export {data};