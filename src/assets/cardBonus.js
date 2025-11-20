let bonuses = [
    {
        "id":1,
        "title":'Амулет Шиннока',
        "title_eng":'Amulet of Shinnok',
        "description": 'Побеждает раунд',
        "description_eng": 'Wins the round',
        "ability": 'allability20000',
        'point': 20000,
        "image": 'amulet1.jpg'
    },
    {
        "id":2,
        "title":`Корона Кроники`,
        "title_eng":`Kronika's Crown`,
        "description": 'Побеждает раунд',
        "description_eng": 'Wins the round',
        "ability": 'allability20000',
        'point': 20000,
        "image": 'crown1.jpg'
    },
    {
        "id":3,
        "title":`Амулет Рейдена (MK 9)`,
        "title_eng":`Amulet of Raiden (MK 9)`,
        "description": '+300 к особым умениям',
        "description_eng": 'special skills +300',
        "ability": 'special_skills',
        'point': 300,
        "image": 'amulet2.jpg'
    },
    {
        "id":4,
        "title":`Сенто`,
        "title_eng":`Sento`,
        "description": '+300 к особым умениям',
        "description_eng": 'special skills +300',
        "ability": 'special_skills',
        'point': 300,
        "image": 'sento1.jpg'
    },
    {
        "id":5,
        "title":`Барака атакует противника когтями`, 
        "title_eng":`Baraka attacks the enemy with his claws`,
        "description": '-200 к скорости и ловкости противника',
        "description_eng": '-200 enemy speed ​​and agility',
        "ability": 'dexterity_enemy',
        'point': 200,
        "image": 'claws1.jpg'
    },
    {
        "id":6,
        "title":`Сайрекс поймал противника в сетку`, //сетка она делает слабее
        "title_eng":`Cyrex caught the opponent in a net`,
        "description": '-300 силы противника',
        "description_eng": '-300 enemy power',
        "ability": 'power_enemy',
        'point': 300,
        "image": 'net1.jpg'
    },
    // {
    //     "id":7,
    //     "title":`Бомба Сайрекса`,
    //     "title_eng":`Cyrex's bomb`,
    //     "description": '+100 к силе',
    //     "description_eng": 'power +100',
    //     "ability": 'power',
    //     'point': 100,
    //     "image": 'bomb1.jpg'
    // },
    {
        "id":8,
        "title":`Сайрекс атакует противника пилой`,
        "title_eng":`Cyrex attacks the enemy with a saw`,
        "description": '-200 к скорости и ловкости противника',
        "description_eng": '-200 enemy speed ​​and agility',
        "ability": 'dexterity_enemy',
        'point': 200,
        "image": 'saw1.jpg'
    },
    {
        "id":9,
        "title":`Эрмак атаковал противника телекинезом`,
        "title_eng":`Ermak attacked the enemy with telekinesis`,
        "description": '-300 силы противника',
        "description_eng": '-300 enemy power',
        "ability": 'power_enemy',
        'point': 300,
        "image": 'telekinesis1.jpg'
    },
    // {
    //     "id":10,
    //     "title":`Перчатка Фредди Крюгера`,
    //     "title_eng":`The Freddy Krueger glove`,
    //     "description": '+200 к силе',
    //     "description_eng": 'power +200',
    //     "ability": 'power',
    //     'point': 200,
    //     "image": 'glove1.jpg'
    // },
    {
        "id": 54,
        "title":`Тепловое зрение Хищника`,
        "title_eng":`Predator Thermal Vision`,
        "description": '+300 к особым умениям',
        "description_eng": 'special skills +300',
        "ability": 'special_skills',
        'point': 300,
        "image": 'predator3.jpg'
    },
    {
        "id":11,
        "title":`Посох Джейд`,
        "title_eng":`Jade's staff`,
        "description": '+300 к особым умениям',
        "description_eng": 'special skills +300',
        "ability": 'special_skills',
        'point': 300,
        "image": 'staff1.jpg'
    },
    {
        "id":11,
        "title":`Магическая книга знаний Шанг Цунга`,
        "title_eng":`Shang Tsung's magical book of knowledge`,
        "description": '+300 к интеллекту',
        "description_eng": 'intelligence +300',
        "ability": 'intelligence',
        'point': 300,
        "image": 'st2.jpg'
    },
    {
        "id":11,
        "title":`Магическая книга знаний Куан Чи`,
        "title_eng":`Quan Chi's magical book of knowledge`,
        "description": '+300 к интеллекту',
        "description_eng": 'intelligence +300',
        "ability": 'intelligence',
        'point': 300,
        "image": 'qc1.jpg'
    },
    {
        "id": 54,
        "title":`Дымовые гранаты Бэтмена`,
        "title_eng":`Batman's smoke grenades`,
        "description": '+300 к особым умениям',
        "description_eng": 'special skills +300',
        "ability": 'special_skills',
        'point': 300,
        "image": 'batman10.jpg'
    },
    {
        "id": 54,
        "title":`Лассо истины`,
        "title_eng":`Lasso of Truth`,
        "description": '+300 к особым умениям',
        "description_eng": 'special skills +300',
        "ability": 'special_skills',
        'point': 300,
        "image": 'ww1.jpg'
    },
    {
        "id":26,
        "title":`Джокер атаковал противника электрической перчаткой`,
        "title_eng":`Joker attacked the enemy with an electric glove`,
        "description": '-300 силы противника',
        "description_eng": '-300 enemy power',
        "ability": 'power_enemy',
        'point': 300,
        "image": 'joker5.jpg'
    },
    {
        "id":26,
        "title":`Бэйн ломает спину противнику`,
        "title_eng":`Bane breaks the enemy's back`,
        "description": '-300 силы противника',
        "description_eng": '-300 enemy power',
        "ability": 'power_enemy',
        'point': 300,
        "image": 'bane1.jpg'
    },
    {
        "id":11,
        "title":`Знания душ Эрмака`,
        "title_eng":`Knowledge of Ermac's souls`,
        "description": '+300 к интеллекту',
        "description_eng": 'intelligence +300',
        "ability": 'intelligence',
        'point': 300,
        "image": 'ermac3.jpg'
    },
    {
        "id":11,
        "title":`Куан Чи планирует атаку`,
        "title_eng":`Quan Chi plans an attack`,
        "description": '+300 к интеллекту',
        "description_eng": 'intelligence +300',
        "ability": 'intelligence',
        'point': 300,
        "image": 'qc2.jpg'
    },
    {
        "id":26,
        "title":`Куан Чи ввел противника в транс`,
        "title_eng":`Quan Chi put his opponent into a trance`,
        "description": '-300 силы противника',
        "description_eng": '-300 enemy power',
        "ability": 'power_enemy',
        'point': 300,
        "image": 'qc3.jpg'
    },
    {
        "id":12,
        "title":`Ты получаешь удар по яйцам. Ты проигрываешь раунд.`,
        "title_eng":`Kick you in the balls. You lose a round`,
        "description": 'Проигрывает раунд',
        "description_eng": 'Loses round',
        "ability": 'alllose',
        'point': 100,
        "image": 'balls1.jpg'
    },
    {
        "id":12,
        "title":`Ты получаешь удар по яйцам. Ты проигрываешь раунд.`,
        "title_eng":`Kick you in the balls. You lose a round`,
        "description": 'Проигрывает раунд',
        "description_eng": 'Loses round',
        "ability": 'alllose',
        'point': 100,
        "image": 'balls1.jpg'
    },
    {
        "id":12,
        "title":`Ты получаешь удар по яйцам. Ты проигрываешь раунд.`,
        "title_eng":`Kick you in the balls. You lose a round`,
        "description": 'Проигрывает раунд',
        "description_eng": 'Loses round',
        "ability": 'alllose',
        'point': 100,
        "image": 'balls1.jpg'
    },
    {
        "id":12,
        "title":`Ты получаешь удар по яйцам. Ты проигрываешь раунд.`,
        "title_eng":`Kick you in the balls. You lose a round`,
        "description": 'Проигрывает раунд',
        "description_eng": 'Loses round',
        "ability": 'alllose',
        'point': 100,
        "image": 'balls1.jpg'
    },
    {
        "id":12,
        "title":`Ты получаешь удар по яйцам. Ты проигрываешь раунд.`,
        "title_eng":`Kick you in the balls. You lose a round`,
        "description": 'Проигрывает раунд',
        "description_eng": 'Loses round',
        "ability": 'alllose',
        'point': 100,
        "image": 'balls1.jpg'
    },
    {
        "id":12,
        "title":`Ты получаешь удар по яйцам. Ты проигрываешь раунд.`,
        "title_eng":`Kick you in the balls. You lose a round`,
        "description": 'Проигрывает раунд',
        "description_eng": 'Loses round',
        "ability": 'alllose',
        'point': 100,
        "image": 'balls1.jpg'
    },
    {
        "id":12,
        "title":`Ты получаешь удар по яйцам. Ты проигрываешь раунд.`,
        "title_eng":`Kick you in the balls. You lose a round`,
        "description": 'Проигрывает раунд',
        "description_eng": 'Loses round',
        "ability": 'alllose',
        'point': 100,
        "image": 'balls1.jpg'
    },
    {
        "id":12,
        "title":`Ты получаешь удар по яйцам. Ты проигрываешь раунд.`,
        "title_eng":`Kick you in the balls. You lose a round`,
        "description": 'Проигрывает раунд',
        "description_eng": 'Loses round',
        "ability": 'alllose',
        'point': 100,
        "image": 'balls1.jpg'
    },
    {
        "id":12,
        "title":`Ты получаешь удар по яйцам. Ты проигрываешь раунд.`,
        "title_eng":`Kick you in the balls. You lose a round`,
        "description": 'Проигрывает раунд',
        "description_eng": 'Loses round',
        "ability": 'alllose',
        'point': 100,
        "image": 'balls1.jpg'
    },
    {
        "id":12,
        "title":`Ты получаешь удар по яйцам. Ты проигрываешь раунд.`,
        "title_eng":`Kick you in the balls. You lose a round`,
        "description": 'Проигрывает раунд',
        "description_eng": 'Loses round',
        "ability": 'alllose',
        'point': 100,
        "image": 'balls1.jpg'
    },
    {
        "id":12,
        "title":`Ты получаешь удар по яйцам. Ты проигрываешь раунд.`,
        "title_eng":`Kick you in the balls. You lose a round`,
        "description": 'Проигрывает раунд',
        "description_eng": 'Loses round',
        "ability": 'alllose',
        'point': 100,
        "image": 'balls1.jpg'
    },
    {
        "id":12,
        "title":`Ты получаешь удар по яйцам. Ты проигрываешь раунд.`,
        "title_eng":`Kick you in the balls. You lose a round`,
        "description": 'Проигрывает раунд',
        "description_eng": 'Loses round',
        "ability": 'alllose',
        'point': 100,
        "image": 'balls1.jpg'
    },
    {
        "id":12,
        "title":`Ты получаешь удар по яйцам. Ты проигрываешь раунд.`,
        "title_eng":`Kick you in the balls. You lose a round`,
        "description": 'Проигрывает раунд',
        "description_eng": 'Loses round',
        "ability": 'alllose',
        'point': 100,
        "image": 'balls1.jpg'
    },
    {
        "id":12,
        "title":`Ты получаешь удар по яйцам. Ты проигрываешь раунд.`,
        "title_eng":`Kick you in the balls. You lose a round`,
        "description": 'Проигрывает раунд',
        "description_eng": 'Loses round',
        "ability": 'alllose',
        'point': 100,
        "image": 'balls1.jpg'
    },
    {
        "id":12,
        "title":`Ты получаешь удар по яйцам. Ты проигрываешь раунд.`,
        "title_eng":`Kick you in the balls. You lose a round`,
        "description": 'Проигрывает раунд',
        "description_eng": 'Loses round',
        "ability": 'alllose',
        'point': 100,
        "image": 'balls1.jpg'
    },
    {
        "id":12,
        "title":`Ты получаешь удар по яйцам. Ты проигрываешь раунд.`,
        "title_eng":`Kick you in the balls. You lose a round`,
        "description": 'Проигрывает раунд',
        "description_eng": 'Loses round',
        "ability": 'alllose',
        'point': 100,
        "image": 'balls1.jpg'
    },
    {
        "id":12,
        "title":`Ты получаешь удар по яйцам. Ты проигрываешь раунд.`,
        "title_eng":`Kick you in the balls. You lose a round`,
        "description": 'Проигрывает раунд',
        "description_eng": 'Loses round',
        "ability": 'alllose',
        'point': 100,
        "image": 'balls1.jpg'
    },
    {
        "id":13,
        "title":`Ты получаешь удар по голове. Ты проигрываешь раунд.`,
        "title_eng":`Your head is broken. You lose a round`,
        "description": 'Проигрывает раунд',
        "description_eng": 'Loses round',
        "ability": 'alllose',
        'point': 100,
        "image": 'broke1.jpg'
    },
    {
        "id":14,
        "title":`Джакс атакует противника ударом по земле`,
        "title_eng":`Jax attacks the enemy with a ground slam`,
        "description": '-200 к скорости и ловкости противника',
        "description_eng": '-200 enemy speed ​​and agility',
        "ability": 'dexterity_enemy',
        'point': 200,
        "image": 'jax1.jpg'
    },
    {
        "id":15,
        "title":`Очки Джонни Кейджа`,
        "title_eng":`Goggles Johnny Cage`,
        "description": '+10 к особым умениям',
        "description_eng": 'special skills +10',
        "ability": 'special_skills',
        'point': 10,
        "image": 'cage1.jpg'
    },
    {
        "id":16,
        "title":`Автограф Джонни Кейджа`,
        "title_eng":`Autograph by Johnny Cage`,
        "description": '+10 к особым умениям',
        "description_eng": 'special skills +10',
        "ability": 'special_skills',
        'point': 10,
        "image": 'cage2.jpg'
    },
    {
        "id":17,
        "title":`Дублеры Джонни Кейджа`,
        "title_eng":`Johnny Cage understudies`,
        "description": '+300 к особым умениям',
        "description_eng": 'special skills +300',
        "ability": 'special_skills',
        'point': 300,
        "image": 'cage3.jpg'
    },
    {
        "id":26,
        "title":`Куан Чи ударил противника черепами`,
        "title_eng":`Quan Chi hits his opponent with skulls`,
        "description": '-300 силы противника',
        "description_eng": '-300 enemy power',
        "ability": 'power_enemy',
        'point': 300,
        "image": 'qc4.jpg'
    },
    {
        "id":26,
        "title":`Китана подняла противника веером`,
        "title_eng":`Kitana lifted her opponent into a fan`,
        "description": '-300 силы противника',
        "description_eng": '-300 enemy power',
        "ability": 'power_enemy',
        'point': 300,
        "image": 'kitana4.jpg'
    },
    {
        "id":11,
        "title":`Планирование миссии Бэтменом`,
        "title_eng":`Batman's mission planning`,
        "description": '+300 к интеллекту',
        "description_eng": 'intelligence +300',
        "ability": 'intelligence',
        'point': 300,
        "image": 'batman1.jpg'
    },
    {
        "id":11,
        "title":`Планирование миссии Джокером`,
        "title_eng":`Joker's mission planning`,
        "description": '+300 к интеллекту',
        "description_eng": 'intelligence +300',
        "ability": 'intelligence',
        'point': 300,
        "image": 'joker3.jpg'
    },
    {
        "id":11,
        "title":`Планирование миссии Шанг Цунгом`,
        "title_eng":`Shang Tsung's mission planning`,
        "description": '+300 к интеллекту',
        "description_eng": 'intelligence +300',
        "ability": 'intelligence',
        'point': 300,
        "image": 'st3.jpg'
    },
    {
        "id":18,
        "title":`Оружие Кабала`,
        "title_eng":`Kabal's weapon`,
        "description": '+200 к особым умениям',
        "description_eng": 'special skills +200',
        "ability": 'special_skills',
        'point': 200,
        "image": 'kabal1.jpg'
    },
    {
        "id":19,
        "title":`Джонни Кейдж ударил противника ногой`,
        "title_eng":`Johnny Cage kicked the opponent`,
        "description": '-300 силы противника',
        "description_eng": '-300 enemy power',
        "ability": 'power_enemy',
        'point': 300,
        "image": 'cage4.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":20,
        "title":`Китана целует противника`,
        "title_eng":`Kitana kisses the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'kitana1.jpg'
    },
    {
        "id":21,
        "title":`Кано атакует противника ножом`,
        "title_eng":`Kano attacks the opponent with a knife`,
        "description": '-200 к скорости и ловкости противника',
        "description_eng": '-200 enemy speed ​​and agility',
        "ability": 'dexterity_enemy',
        'point': 200,
        "image": 'kano1.jpg'
    },
    {
        "id":22,
        "title":`Кано атакует противника лазером`,
        "title_eng":`Cano attacks the enemy with a laser`,
        "description": '-200 бойцовских навыков противника',
        "description_eng": '-200 enemy fighting skills',
        "ability": 'fighting_skills_enemy',
        'point': 200,
        "image": 'kano2.jpg'
    },
    {
        "id":23,
        "title":`Оружие Китаны`,
        "title_eng":`Kitana's weapon`,
        "description": '+300 к особым умениям',
        "description_eng": 'special skills +300',
        "ability": 'special_skills',
        'point': 300,
        "image": 'kitana2.jpg'
    },
    {
        "id":24,
        "title":`Шляпа Кун Лао`,
        "title_eng":`Kung Lao's hat`,
        "description": '+300 к особым умениям',
        "description_eng": 'special skills +300',
        "ability": 'special_skills',
        'point': 300,
        "image": 'lao1.jpg'
    },
    {
        "id":25,
        "title":`Кинжалы Милины`,
        "title_eng":`Milina's daggers`,
        "description": '+200 к особым умениям',
        "description_eng": 'special skills +200',
        "ability": 'special_skills',
        'point': 200,
        "image": 'mileena1.jpg'
    },
    {
        "id":26,
        "title":`Лю Кенг ударил противника ногами`,
        "title_eng":`Liu Kang kicked the enemy`,
        "description": '-300 силы противника',
        "description_eng": '-300 enemy power',
        "ability": 'power_enemy',
        'point': 300,
        "image": 'liu1.jpg'
    },
    {
        "id":27,
        "title":`Ночной Волк стреляет в противника из лука`,
        "title_eng":`Night Wolf shoots at enemy from bow`,
        "description": '-200 бойцовских навыков противника',
        "description_eng": '-200 enemy fighting skills',
        "ability": 'fighting_skills_enemy',
        'point': 200,
        "image": 'nightwolf1.jpg'
    },
    {
        "id":28,
        "title":`Куан Чи атаковал противника силой преисподней`,
        "title_eng":`Quan Chi attacked the enemy with the power of the underworld`,
        "description": '-300 силы противника',
        "description_eng": '-300 enemy power',
        "ability": 'power_enemy',
        'point': 300,
        "image": 'underworld1.jpg'
    },
    {
        "id":29,
        "title":`Рейден атаковал противника электрическим полётом`,
        "title_eng":`Raiden attacked the enemy with an electric flight`,
        "description": '-300 силы противника',
        "description_eng": '-300 enemy power',
        "ability": 'power_enemy',
        'point': 300,
        "image": 'raiden1.jpg'
    },
    {
        "id":30,
        "title":`Рейден ударил противника молнией`,
        "title_eng":`Raiden hits his enemy with lightning`,
        "description": '-300 силы противника',
        "description_eng": '-300 enemy power',
        "ability": 'power_enemy',
        'point': 300,
        "image": 'raiden2.jpg'
    },
    {
        "id":31,
        "title":`Рейн атаковал противника водяным пузырем`,
        "title_eng":`Rain attacked the enemy with a water bubble`,
        "description": '-300 силы противника',
        "description_eng": '-300 enemy power',
        "ability": 'power_enemy',
        'point': 300,
        "image": 'rain1.jpg'
    },
    {
        "id":32,
        "title":`Рейн атаковал противника молниями`,
        "title_eng":`Rain attacked the enemy with lightning`,
        "description": '-300 силы противника',
        "description_eng": '-300 enemy power',
        "ability": 'power_enemy',
        'point': 300,
        "image": 'rain2.jpg'
    },
    {
        "id":33,
        "title":`Рептилия атакует противника ядом`,
        "title_eng":`Reptile attacks enemy with poison`,
        "description": '-200 бойцовских навыков противника',
        "description_eng": '-200 enemy fighting skills',
        "ability": 'fighting_skills_enemy',
        'point': 200,
        "image": 'reptile1.jpg'
    },
    {
        "id":34,
        "title":`Скорпион атакует противника гарпуном`,
        "title_eng":`Scorpion attacks enemy with harpoon`,
        "description": '-200 бойцовских навыков противника',
        "description_eng": '-200 enemy fighting skills',
        "ability": 'fighting_skills_enemy',
        'point': 200,
        "image": 'scrop1.jpg'
    },
    {
        "id":35,
        "title":`Невидимость Рептилии`,
        "title_eng":`Reptile's invisibility`,
        "description": '+300 к особым умениям',
        "description_eng": 'special skills +300',
        "ability": 'special_skills',
        'point': 300,
        "image": 'reptile2.jpg'
    },
    {
        "id":36,
        "title":`Сила адского огня Скорпиона`,
        "title_eng":`The Force of Scorpio's Hellfire`,
        "description": '+300 к силе',
        "description_eng": 'power +300',
        "ability": 'power',
        'point': 300,
        "image": 'scrop2.jpg'
    },
    {
        "id":37,
        "title":`Сектор атакует противника прямой ракетой`,
        "title_eng":`Sektor attacks the enemy with a direct missile`,
        "description": '-200 к скорости и ловкости противника',
        "description_eng": '-200 enemy speed ​​and agility',
        "ability": 'dexterity_enemy',
        'point': 200,
        "image": 'sektor1.jpg'
    },
    {
        "id":38,
        "title":`Сектор атакует противника огнеметом`,
        "title_eng":`Sektor attacks the opponent with a flamethrower`,
        "description": '-200 бойцовских навыков противника',
        "description_eng": '-200 enemy fighting skills',
        "ability": 'fighting_skills_enemy',
        'point': 200,
        "image": 'sektor2.jpg'
    },
    {
        "id":39,
        "title":`Шан Цзун атакует противника огненными черепами`,
        "title_eng":`Shang Tsung attacks the enemy with fire skulls`,
        "description": '-200 бойцовских навыков противника',
        "description_eng": '-200 enemy fighting skills',
        "ability": 'fighting_skills_enemy',
        'point': 200,
        "image": 'st1.jpg'
    },
    {
        "id":40,
        "title":`Замороженный позвоночник и череп от оружия Саб-Зиро`,
        "title_eng":`Frozen spine and skull from Sub-Zero’s weapon`,
        "description": '+100 к особым умениям',
        "description_eng": 'special skills +100',
        "ability": 'special_skills',
        'point': 100,
        "image": 'sub1.jpg'
    },
    {
        "id":41,
        "title":`Саб-Зиро оставляет клона для противника`,
        "title_eng":`Sub-Zero leaves a clone for the enemy`,
        "description": '-200 к скорости и ловкости противника',
        "description_eng": '-200 enemy speed ​​and agility',
        "ability": 'dexterity_enemy',
        'point': 200,
        "image": 'sub2.jpg'
    },
    {
        "id":42,
        "title":`Саб-Зиро атакует противника подкатом`,
        "title_eng":`Sub-Zero attacks the enemy with a slide`,
        "description": '-200 бойцовских навыков противника',
        "description_eng": '-200 enemy fighting skills',
        "ability": 'fighting_skills_enemy',
        'point': 200,
        "image": 'sub3.jpg'
    },
    {
        "id":43,
        "title":`Саб-Зиро атакует противника ледяным шаром`,
        "title_eng":`Sub-Zero attacks the opponent with an ice ball`,
        "description": '-200 бойцовских навыков противника',
        "description_eng": '-200 enemy fighting skills',
        "ability": 'fighting_skills_enemy',
        'point': 200,
        "image": 'sub4.jpg'
    },
    {
        "id":44,
        "title":`Страйкер ударил противника электрошокером`,
        "title_eng":`Stryker hits opponent with taser`,
        "description": '-300 силы противника',
        "description_eng": '-300 enemy power',
        "ability": 'power_enemy',
        'point': 300,
        "image": 'stryker1.jpg'
    },
    {
        "id": 45,
        "title":`Страйкер заминировал противника`,
        "title_eng":`Stryker set up the enemy`,
        "description": '-300 силы противника',
        "description_eng": '-300 enemy power',
        "ability": 'power_enemy',
        'point': 300,
        "image": 'stryker2.jpg'
    },
    {
        "id": 46,
        "title":`Страйкер атакует противника пистолетом`,
        "title_eng":`Stryker attacks the opponent with a pistol`,
        "description": '-200 к скорости и ловкости противника',
        "description_eng": '-200 enemy speed ​​and agility',
        "ability": 'dexterity_enemy',
        'point': 200,
        "image": 'stryker3.jpg'
    },
    {
        "id": 47,
        "title":`Страйкер ослепляет противника`,
        "title_eng":`Striker blinds enemy`,
        "description": '-300 силы противника',
        "description_eng": '-300 enemy power',
        "ability": 'power_enemy',
        'point': 300,
        "image": 'stryker4.jpg'
    },
    {
        "id": 48,
        "title":`Соня атакует противника дроном`,
        "title_eng":`Sonya attacks enemy with drone`,
        "description": '-200 к скорости и ловкости противника',
        "description_eng": '-200 enemy speed ​​and agility',
        "ability": 'dexterity_enemy',
        'point': 200,
        "image": 'sonya1.jpg'
    },
    {
        "id": 49,
        "title":`Соня целует противника`,
        "title_eng":`Sonya attacks enemy with drone`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'sonya2.jpg'
    },
    {
        "id": 50,
        "title":`Невидимость Смоука`,
        "title_eng":`Smoke's invisibility`,
        "description": '+300 к особым умениям',
        "description_eng": 'special skills +300',
        "ability": 'special_skills',
        'point': 300,
        "image": 'smoke1.jpg'
    },
    {
        "id":11,
        "title":`Знание кольца Зеленого Фонаря`,
        "title_eng":`Green Lantern ring knowledge`,
        "description": '+300 к интеллекту',
        "description_eng": 'intelligence +300',
        "ability": 'intelligence',
        'point': 300,
        "image": 'gl1.jpg'
    },
    {
        "id":11,
        "title":`Компьютер Бэтмена`,
        "title_eng":`Batman's сomputer`,
        "description": '+300 к интеллекту',
        "description_eng": 'intelligence +300',
        "ability": 'intelligence',
        'point': 300,
        "image": 'batman2.jpg'
    },
    {
        "id":11,
        "title":`Рецепт главного токсина Пугало`,
        "title_eng":`Recipe for Scarecrow's master toxin`,
        "description": '+300 к интеллекту',
        "description_eng": 'intelligence +300',
        "ability": 'intelligence',
        'point': 300,
        "image": 'scarecrow1.jpg'
    },
    {
        "id":11,
        "title":`Лаборатория Джокера`,
        "title_eng":`Joker's Lab`,
        "description": '+300 к интеллекту',
        "description_eng": 'intelligence +300',
        "ability": 'intelligence',
        'point': 300,
        "image": 'joker4.jpg'
    },
    {
        "id": 54,
        "title":`Cканирование происходящего Терминатором Т-800`,
        "title_eng":`Scanning what's happening with the T-800 Terminator`,
        "description": '+300 к особым умениям',
        "description_eng": 'special skills +300',
        "ability": 'special_skills',
        'point': 300,
        "image": 't8002.jpg'
    },
    {
        "id": 51,
        "title":`Скарлет клеточно поглощает противника`,
        "title_eng":`Skarlet cellularly absorbs the enemy`,
        "description": '-300 силы противника',
        "description_eng": '-300 enemy power',
        "ability": 'power_enemy',
        'point': 300,
        "image": 'skarlet1.jpg'
    },
    {
        "id": 52,
        "title":`Скарлет атакует противника кровавым шаром`,
        "title_eng":`Skarlet attacks the enemy with a bloody ball`,
        "description": '-200 к скорости и ловкости противника',
        "description_eng": '-200 enemy speed ​​and agility',
        "ability": 'dexterity_enemy',
        'point': 200,
        "image": 'skarlet2.jpg'
    },
    {
        "id": 53,
        "title":`Синдел атакует противника волосами`,
        "title_eng":`Sindel attacks the enemy with her hair`,
        "description": '-200 бойцовских навыков противника',
        "description_eng": '-200 enemy fighting skills',
        "ability": 'fighting_skills_enemy',
        'point': 200,
        "image": 'sindel1.jpg'
    },
    {
        "id": 54,
        "title":`Левитирование Cиндел`,
        "title_eng":`Levitation of Sindel`,
        "description": '+300 к скорости и ловкости',
        "description_eng": '+300 speed ​​and agility',
        "ability": 'dexterity',
        'point': 300,
        "image": 'sindel2.jpg'
    },
    {
        "id": 54,
        "title":`Бэтмобиль`,
        "title_eng":`Batmobile`,
        "description": '+300 к скорости и ловкости',
        "description_eng": '+300 speed ​​and agility',
        "ability": 'dexterity',
        'point': 300,
        "image": 'batman4.jpg'
    },
    {
        "id": 54,
        "title":`Бэтцикл`,
        "title_eng":`Batcycle`,
        "description": '+300 к скорости и ловкости',
        "description_eng": '+300 speed ​​and agility',
        "ability": 'dexterity',
        'point': 300,
        "image": 'batman5.jpg'
    },
    {
        "id": 54,
        "title":`Бэтплан`,
        "title_eng":`Batplane`,
        "description": '+300 к скорости и ловкости',
        "description_eng": '+300 speed ​​and agility',
        "ability": 'dexterity',
        'point': 300,
        "image": 'batman6.jpg'
    },
    {
        "id": 54,
        "title":`Бэткоготь`,
        "title_eng":`Batclaw`,
        "description": '+200 к скорости и ловкости',
        "description_eng": '+200 speed ​​and agility',
        "ability": 'dexterity',
        'point': 200,
        "image": 'batman7.jpg'
    },
    {
        "id": 54,
        "title":`Плащ Бэтмена`,
        "title_eng":`Batman's Cape`,
        "description": '+200 к скорости и ловкости',
        "description_eng": '+200 speed ​​and agility',
        "ability": 'dexterity',
        'point': 200,
        "image": 'batman8.jpg'
    },
    {
        "id": 55,
        "title":`Cиндел атаковала противника воплем`,
        "title_eng":`Sindel attacked the enemy with a scream`,
        "description": '-300 силы противника',
        "description_eng": '-300 enemy power',
        "ability": 'power_enemy',
        'point': 300,
        "image": 'sindel3.jpg'
    },
    {
        "id": 56,
        "title":`Знамя бараки`,
        "title_eng":`Flag of the barracks`,
        "description": '+300 к силе',
        "description_eng": 'power +300',
        "ability": 'power',
        'point': 300,
        "image": 'baraka1.jpg'
    },
    {
        "id": 57,
        "title":`Кэсси Кейдж ударяет противника в пах`,
        "title_eng":`Cassie Cage kicks enemy in the balls`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'ccage1.jpg'
    },
    {
        "id": 58,
        "title":`Эррон Блэк атакует противника пистолетом`,
        "title_eng":`Erron Black attacks the enemy with a pistol`,
        "description": '-200 бойцовских навыков противника',
        "description_eng": '-200 enemy fighting skills',
        "ability": 'fighting_skills_enemy',
        'point': 200,
        "image": 'eblack1.jpg'
    },
    {
        "id": 59,
        "title":`Фрост атакует противника ледяными кинжалами`,
        "title_eng":`Frost attacks the enemy with ice daggers`,
        "description": '-150 к скорости и ловкости противника',
        "description_eng": '-150 enemy speed ​​and agility',
        "ability": 'dexterity_enemy',
        'point': 150,
        "image": 'frost1.jpg'
    },
    {
        "id": 60,
        "title":`Герас ловит противника в временную ловушку`,
        "title_eng":`Geras traps the enemy in a time trap`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'geras1.jpg'
    },
    {
        "id": 61,
        "title":`Герас атакует противника большим кулаком`,
        "title_eng":`Geras attacks the enemy with a large fist`,
        "description": '-200 бойцовских навыков противника',
        "description_eng": '-200 enemy fighting skills',
        "ability": 'fighting_skills_enemy',
        'point': 200,
        "image": 'geras2.jpg'
    },
    {
        "id": 62,
        "title":`Джонни Кейдж ударил своего противника по яйцам`,
        "title_eng":`Johnny Cage kicked his enemy in the balls`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'cage5.jpg'
    },
    {
        "id": 63,
        "title":`Джакс начинает захватывать противников`,
        "title_eng":`Jax begins to capture opponents`,
        "description": '-200 к скорости и ловкости противника',
        "description_eng": '-200 enemy speed ​​and agility',
        "ability": 'dexterity_enemy',
        'point': 200,
        "image": 'jax2.jpg'
    },
    {
        "id": 64,
        "title":`Джокер пугает противника ненастоящим оружием`,
        "title_eng":`Joker scares enemy with fake weapon`,
        "description": '-10 к скорости и ловкости противника',
        "description_eng": '-10 enemy speed ​​and agility',
        "ability": 'dexterity_enemy',
        'point': 10,
        "image": 'joker1.jpg'
    },
    {
        "id": 65,
        "title":`Джокер атакует противника перчаткой`,
        "title_eng":`Joker attacks the enemy with a glove`,
        "description": '-80 к скорости и ловкости противника',
        "description_eng": '-80 enemy speed ​​and agility',
        "ability": 'dexterity_enemy',
        'point': 80,
        "image": 'joker2.jpg'
    },
    {
        "id": 66,
        "title":`Китана атакует противника веером`,
        "title_eng":`Kitana attacks the enemy with a fan`,
        "description": '-200 бойцовских навыков противника',
        "description_eng": '-200 enemy fighting skills',
        "ability": 'fighting_skills_enemy',
        'point': 200,
        "image": 'kitana3.jpg'
    },
    {
        "id":11,
        "title":`Лаборатория Шанг Цунга`,
        "title_eng":`Shang Tsung's Lab`,
        "description": '+300 к интеллекту',
        "description_eng": 'intelligence +300',
        "ability": 'intelligence',
        'point': 300,
        "image": 'st4.jpg'
    },
    {
        "id":11,
        "title":`Лаборатория Лекса Лютора`,
        "title_eng":`Lex Luthor's Lab`,
        "description": '+300 к интеллекту',
        "description_eng": 'intelligence +300',
        "ability": 'intelligence',
        'point': 300,
        "image": 'lex1.jpg'
    },
    {
        "id":11,
        "title":`Рэмбо планирует миссию`,
        "title_eng":`Rambo plans a mission`,
        "description": '+300 к интеллекту',
        "description_eng": 'intelligence +300',
        "ability": 'intelligence',
        'point': 300,
        "image": 'rambo3.jpg'
    },
    {
        "id":11,
        "title":`Кано планирует нападение`,
        "title_eng":`Kano plans an attack`,
        "description": '+300 к интеллекту',
        "description_eng": 'intelligence +300',
        "ability": 'intelligence',
        'point': 300,
        "image": 'kano3.jpg'
    },
    {
        "id":11,
        "title":`Шао Кан планирует нападение`,
        "title_eng":`Shao Kahn plans an attack`,
        "description": '+300 к интеллекту',
        "description_eng": 'intelligence +300',
        "ability": 'intelligence',
        'point': 300,
        "image": 'shao4.jpg'
    },
    {
        "id": 54,
        "title":`Телепорт Скорпиона`,
        "title_eng":`Scorpion teleport`,
        "description": '+300 к скорости и ловкости',
        "description_eng": '+300 speed ​​and agility',
        "ability": 'dexterity',
        'point': 300,
        "image": 'scrop3.jpg'
    },
    {
        "id": 54,
        "title":`Телепорт Рейдена`,
        "title_eng":`Raiden teleport`,
        "description": '+300 к скорости и ловкости',
        "description_eng": '+300 speed ​​and agility',
        "ability": 'dexterity',
        'point': 300,
        "image": 'raiden4.jpg'
    },
    {
        "id": 54,
        "title":`Система слежения Бэтмена`,
        "title_eng":`Batman tracking system`,
        "description": '+300 к особым умениям',
        "description_eng": 'special skills +300',
        "ability": 'special_skills',
        'point': 300,
        "image": 'batman9.jpg'
    },
    {
        "id": 67,
        "title":`Луч Котал Кана`,
        "title_eng":`Ray Kotal Kahn`,
        "description": '+300 к силе',
        "description_eng": 'power +300',
        "ability": 'power',
        'point': 300,
        "image": 'kkahn1.jpg'
    },
    {
        "id": 68,
        "title":`Кун Лао атакует противника шляпой`,
        "title_eng":`Kung Lao attacks the enemy with his hat`,
        "description": '-200 бойцовских навыков противника',
        "description_eng": '-200 enemy fighting skills',
        "ability": 'fighting_skills_enemy',
        'point': 200,
        "image": 'lao2.jpg'
    },
    {
        "id": 69,
        "title":`Противник упал в кислоту. Он проигрывает раунд`,
        "title_eng":`The enemy fell into the acid. He loses the round`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'lose1.jpg'
    },
    {
        "id": 70,
        "title":`Молот Шао Кана`,
        "title_eng":`Shao Kahn's Hammer`,
        "description": '+300 к особым умениям',
        "description_eng": 'special skills +300',
        "ability": 'special_skills',
        'point': 300,
        "image": 'shao1.jpg'
    },
    {
        "id": 71,
        "title":`Шао Кан высмеял противника`,
        "title_eng":`Shao Kang laughed at the enemy`,
        "description": 'Противник проигрывает раунд',
        "description_eng": 'Enemy loses round',
        "ability": 'alllose_enemy',
        'point': 100,
        "image": 'shao2.jpg'
    },
    {
        "id": 72,
        "title":`Спаун атакует противника цепями из ада`,
        "title_eng":`Spawn attacks the enemy with chains from hell`,
        "description": '-200 бойцовских навыков противника',
        "description_eng": '-200 enemy fighting skills',
        "ability": 'fighting_skills_enemy',
        'point': 200,
        "image": 'spawn1.jpg'
    },
    {
        "id":11,
        "title":`Коталь Кан планирует нападение`,
        "title_eng":`Kotal Kahn plans an attack`,
        "description": '+300 к интеллекту',
        "description_eng": 'intelligence +300',
        "ability": 'intelligence',
        'point': 300,
        "image": 'kkahn2.jpg'
    },
    {
        "id":11,
        "title":`Детективное чутье Бэтмена`,
        "title_eng":`Batman's detective sense`,
        "description": '+300 к интеллекту',
        "description_eng": 'intelligence +300',
        "ability": 'intelligence',
        'point': 300,
        "image": 'batman3.jpg'
    },
    {
        "id":11,
        "title":`Рейден планирует миссию`,
        "title_eng":`Raiden plans a mission`,
        "description": '+300 к интеллекту',
        "description_eng": 'intelligence +300',
        "ability": 'intelligence',
        'point': 300,
        "image": 'raiden3.jpg'
    },
    {
        "id":11,
        "title":`Ядовитый Плющ планирует нападение`,
        "title_eng":`Poison Ivy plans an attack`,
        "description": '+250 к интеллекту',
        "description_eng": 'intelligence +250',
        "ability": 'intelligence',
        'point': 250,
        "image": 'pi1.jpg'
    },
    {
        "id":11,
        "title":`Донателло планирует миссию`,
        "title_eng":`Donatello plans a mission`,
        "description": '+300 к интеллекту',
        "description_eng": 'intelligence +300',
        "ability": 'intelligence',
        'point': 300,
        "image": 'don1.jpg'
    },
    {
        "id":11,
        "title":`Ночной Волк планирует миссию`,
        "title_eng":`Nightwolf plans a mission`,
        "description": '+300 к интеллекту',
        "description_eng": 'intelligence +300',
        "ability": 'intelligence',
        'point': 300,
        "image": 'nwolf1.jpg'
    },
    {
        "id":11,
        "title":`Брейниак планирует нападение`,
        "title_eng":`Brainiac plans an attack`,
        "description": '+300 к интеллекту',
        "description_eng": 'intelligence +300',
        "ability": 'intelligence',
        'point': 300,
        "image": 'brainiac1.jpg'
    },
    {
        "id": 73,
        "title":`Терминатор T-800 атакует противника дробовиком`,
        "title_eng":`Terminator T-800 attacks the enemy with a shotgun`,
        "description": '-200 бойцовских навыков противника',
        "description_eng": '-200 enemy fighting skills',
        "ability": 'fighting_skills_enemy',
        'point': 200,
        "image": 't8001.jpg'
    },
    {
        "id": 74,
        "title":`Эрмак атакует противника шаром душ`,
        "title_eng":`Ermac attacks the enemy with a soul ball`,
        "description": '-200 бойцовских навыков противника',
        "description_eng": '-200 enemy fighting skills',
        "ability": 'fighting_skills_enemy',
        'point': 200,
        "image": 'ermac1.jpg'
    },
    {
        "id": 75,
        "title":`Маска Джейсона Вурхиза`,
        "title_eng":`Jason Voorhees Mask`,
        "description": '+300 к особым умениям',
        "description_eng": 'special skills +300',
        "ability": 'special_skills',
        'point': 300,
        "image": 'mask1.jpg'
    },
    {
        "id": 76,
        "title":`Джейсон Вурхиз преследует противника`,
        "title_eng":`Jason Voorhees pursues the enemy`,
        "description": '-300 к скорости и ловкости противника',
        "description_eng": '-300 enemy speed ​​and agility',
        "ability": 'dexterity_enemy',
        'point': 300,
        "image": 'jason1.jpg'
    },
    {
        "id": 77,
        "title":`Джейсон Вурхиз душит противника`,
        "title_eng":`Jason Voorhees chokes his opponent`,
        "description": '-300 силы противника', //уже не увернешься и плачевно может закончиться -300
        "description_eng": '-300 enemy power',
        "ability": 'power_enemy',
        'point': 300,
        "image": 'jason2.jpg'
    },
    {
        "id": 78,
        "title":`Невидимость Хищника`,
        "title_eng":`Predator's invisibility`,
        "description": '+300 к особым умениям',
        "description_eng": 'special skills +300',
        "ability": 'special_skills',
        'point': 300,
        "image": 'predator1.jpg'
    },
    {
        "id": 79,
        "title":`Хищник атакует противника зарядом плазмы`,
        "title_eng":`Predator attacks the enemy with a plasma charge`,
        "description": '-200 бойцовских навыков противника', //можно уворачиваться от всего этого, поэтому -200
        "description_eng": '-200 enemy fighting skills',
        "ability": 'fighting_skills_enemy',
        'point': 200,
        "image": 'predator2.jpg'
    },
    {
        "id": 80,
        "title":`Хоумлендер атакует противника лазером`,
        "title_eng":`Homelander attacks the enemy with a laser`,
        "description": '-200 бойцовских навыков противника',
        "description_eng": '-200 enemy fighting skills',
        "ability": 'fighting_skills_enemy',
        'point': 200,
        "image": 'homelander1.jpg'
    },
    {
        "id": 81,
        "title":`Шлем Миротворца`,
        "title_eng":`Peacemaker's helmet`,
        "description": '+300 к особым умениям',
        "description_eng": 'special skills +300',
        "ability": 'special_skills',
        'point': 300,
        "image": 'peacemaker1.jpg'
    },
    {
        "id": 82,
        "title":`Мотаро атакует противника лазером из хвоста`,
        "title_eng":`Motaro attacks the enemy with a laser from his tail`,
        "description": '-200 бойцовских навыков противника',
        "description_eng": '-200 enemy fighting skills',
        "ability": 'fighting_skills_enemy',
        'point': 200,
        "image": 'motaro1.jpg'
    },
    {
        "id": 83,
        "title":`Робокоп атакует противника пистолетом Auto 9`,
        "title_eng":`Robocop attacks an enemy with an Auto 9 pistol`,
        "description": '-200 бойцовских навыков противника',
        "description_eng": '-200 enemy fighting skills',
        "ability": 'fighting_skills_enemy',
        'point': 200,
        "image": 'robocop1.jpg'
    },
    {
        "id": 84,
        "title":`Робокоп атакует противника штурмовой пушкой Кобра`,
        "title_eng":`Robocop attacks an enemy with a Cobra assault cannon`,
        "description": '-200 бойцовских навыков противника',
        "description_eng": '-200 enemy fighting skills',
        "ability": 'fighting_skills_enemy',
        'point': 200,
        "image": 'robocop2.jpg'
    },
    {
        "id": 85,
        "title":`Робокоп атакует противника ножом`,
        "title_eng":`Robocop attacks enemy with knife`,
        "description": '-200 к скорости и ловкости противника',
        "description_eng": '-200 enemy speed ​​and agility',
        "ability": 'dexterity_enemy',
        'point': 200,
        "image": 'robocop3.jpg'
    },
    {
        "id": 86,
        "title":`Рэмбо стреляет в противника из лука`,
        "title_eng":`Rambo shoots an enemy with a bow`,
        "description": '-200 бойцовских навыков противника',
        "description_eng": '-200 enemy fighting skills',
        "ability": 'fighting_skills_enemy',
        'point': 200,
        "image": 'rambo1.jpg'
    },
    {
        "id": 87,
        "title":`Рэмбо стреляет в противника из спрятанного М60`,
        "title_eng":`Rambo shoots an enemy with a hidden M60`,
        "description": '-200 бойцовских навыков противника',
        "description_eng": '-200 enemy fighting skills',
        "ability": 'fighting_skills_enemy',
        'point': 200,
        "image": 'rambo2.jpg'
    },
    {
        "id": 88,
        "title":`Шлем Шао Кана`,
        "title_eng":`Shao Kahn's helmet`,
        "description": '+300 к особым умениям',
        "description_eng": 'special skills +300',
        "ability": 'special_skills',
        'point': 300,
        "image": 'shao3.jpg'
    },
    {
        "id":89,
        "title":`Песочные часы`,
        "title_eng":`The Hourglass`,
        "description": 'Побеждает раунд',
        "description_eng": 'Wins the round',
        "ability": 'allability20000',
        'point': 20000,
        "image": 'hour1.jpg'
    },
    {
        "id":90,
        "title":`Kamidogu`,
        "title_eng":`Kamidogu`,
        "description": 'Побеждает раунд',
        "description_eng": 'Wins the round',
        "ability": 'allability20000',
        'point': 20000,
        "image": 'kamidogu1.jpg'
    },
    {
        "id":91,
        "title":`Babality`,
        "title_eng":`Babality`,
        "description": 'Побеждает раунд',
        "description_eng": 'Wins the round',
        "ability": 'allability20000',
        'point': 20000,
        "image": 'babality1.jpg'
    },
    {
        "id":91,
        "title":`Babality`,
        "title_eng":`Babality`,
        "description": 'Побеждает раунд',
        "description_eng": 'Wins the round',
        "ability": 'allability20000',
        'point': 20000,
        "image": 'babality1.jpg'
    },
    {
        "id":91,
        "title":`Babality`,
        "title_eng":`Babality`,
        "description": 'Побеждает раунд',
        "description_eng": 'Wins the round',
        "ability": 'allability20000',
        'point': 20000,
        "image": 'babality1.jpg'
    },
    {
        "id":91,
        "title":`Babality`,
        "title_eng":`Babality`,
        "description": 'Побеждает раунд',
        "description_eng": 'Wins the round',
        "ability": 'allability20000',
        'point': 20000,
        "image": 'babality1.jpg'
    },
    {
        "id":91,
        "title":`Babality`,
        "title_eng":`Babality`,
        "description": 'Побеждает раунд',
        "description_eng": 'Wins the round',
        "ability": 'allability20000',
        'point': 20000,
        "image": 'babality1.jpg'
    },
    {
        "id":91,
        "title":`Babality`,
        "title_eng":`Babality`,
        "description": 'Побеждает раунд',
        "description_eng": 'Wins the round',
        "ability": 'allability20000',
        'point': 20000,
        "image": 'babality1.jpg'
    },
    {
        "id":91,
        "title":`Babality`,
        "title_eng":`Babality`,
        "description": 'Побеждает раунд',
        "description_eng": 'Wins the round',
        "ability": 'allability20000',
        'point': 20000,
        "image": 'babality1.jpg'
    },
    {
        "id":91,
        "title":`Babality`,
        "title_eng":`Babality`,
        "description": 'Побеждает раунд',
        "description_eng": 'Wins the round',
        "ability": 'allability20000',
        'point': 20000,
        "image": 'babality1.jpg'
    },
    {
        "id":91,
        "title":`Babality`,
        "title_eng":`Babality`,
        "description": 'Побеждает раунд',
        "description_eng": 'Wins the round',
        "ability": 'allability20000',
        'point': 20000,
        "image": 'babality1.jpg'
    },
    {
        "id":91,
        "title":`Babality`,
        "title_eng":`Babality`,
        "description": 'Побеждает раунд',
        "description_eng": 'Wins the round',
        "ability": 'allability20000',
        'point': 20000,
        "image": 'babality1.jpg'
    },
    {
        "id":91,
        "title":`Babality`,
        "title_eng":`Babality`,
        "description": 'Побеждает раунд',
        "description_eng": 'Wins the round',
        "ability": 'allability20000',
        'point': 20000,
        "image": 'babality1.jpg'
    },
    {
        "id":91,
        "title":`Babality`,
        "title_eng":`Babality`,
        "description": 'Побеждает раунд',
        "description_eng": 'Wins the round',
        "ability": 'allability20000',
        'point': 20000,
        "image": 'babality1.jpg'
    },
    {
        "id":91,
        "title":`Babality`,
        "title_eng":`Babality`,
        "description": 'Побеждает раунд',
        "description_eng": 'Wins the round',
        "ability": 'allability20000',
        'point': 20000,
        "image": 'babality1.jpg'
    },
    {
        "id":91,
        "title":`Babality`,
        "title_eng":`Babality`,
        "description": 'Побеждает раунд',
        "description_eng": 'Wins the round',
        "ability": 'allability20000',
        'point': 20000,
        "image": 'babality1.jpg'
    },
    {
        "id":91,
        "title":`Babality`,
        "title_eng":`Babality`,
        "description": 'Побеждает раунд',
        "description_eng": 'Wins the round',
        "ability": 'allability20000',
        'point': 20000,
        "image": 'babality1.jpg'
    },
    {
        "id":91,
        "title":`Babality`,
        "title_eng":`Babality`,
        "description": 'Побеждает раунд',
        "description_eng": 'Wins the round',
        "ability": 'allability20000',
        'point': 20000,
        "image": 'babality1.jpg'
    },
    {
        "id":91,
        "title":`Babality`,
        "title_eng":`Babality`,
        "description": 'Побеждает раунд',
        "description_eng": 'Wins the round',
        "ability": 'allability20000',
        'point': 20000,
        "image": 'babality1.jpg'
    },
    {
        "id":91,
        "title":`Babality`,
        "title_eng":`Babality`,
        "description": 'Побеждает раунд',
        "description_eng": 'Wins the round',
        "ability": 'allability20000',
        'point': 20000,
        "image": 'babality1.jpg'
    },
    {
        "id":91,
        "title":`Babality`,
        "title_eng":`Babality`,
        "description": 'Побеждает раунд',
        "description_eng": 'Wins the round',
        "ability": 'allability20000',
        'point': 20000,
        "image": 'babality1.jpg'
    },
    {
        "id":92,
        "title":`Babality`,
        "title_eng":`Babality`,
        "description": 'Побеждает раунд',
        "description_eng": 'Wins the round',
        "ability": 'allability20000',
        'point': 20000,
        "image": 'babality2.jpg'
    },

];
export {bonuses};