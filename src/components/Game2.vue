<template lang="">
   <div class="wrapper-main">
<transition name="fade">
<div class='game-wrap'>
    <div class="game-upper" v-show='start && randomSelectionCards && game_over == false'>
      <div class="wrapper-motion">
        <div class="motion-category">
            {{  language == 'eng' ? 'Category' : 'Категория'  }} - {{  language == 'eng' ? allCategoryEnglish[selectCategory] : allCategory[selectCategory]  }}
        </div>  
       </div>
    
        <div class="wrapper-cards">
            <div>
                <div class='card-state-player'>
                    {{  language == 'eng' ? 'Player1' : 'Игрок1'  }} - {{ pointsPlayer1 }}
                </div>
                <Card v-if='selectCardPlayer1' @bonus-event="handleBonusEvent" :stronger='0' :actives='false' :win='winPlayer1' :category='selectCategory' :card='selectCardPlayer1' :player='1'/>
                </div>
                     <img class='card-vs' :class="{'animation': animation_vs}" :src="`/img/vs.webp`" alt="">
                 <div>
                <div class='card-state-player'>
                    {{  language == 'eng' ? 'Player2' : 'Игрок2'  }} - {{ pointsPlayer2 }}
                </div>
             <Card v-if='selectCardPlayer2' @bonus-event="handleBonusEvent" :stronger='0' :actives='false' :win='winPlayer2' :category='selectCategory' :card='selectCardPlayer2' :player='2'/>
             </div>
        </div>
      <div class="wrapper-buttons"> 
        <transition name="fade">
      <div class="button fight" v-show='fightState' @click="playFight">
        {{  language == 'eng' ? 'Fight' : 'В бой'  }}
      </div>  
    </transition>
      </div>
  
    </div>
    <div class="wrapper-text-win" v-show='game_over==true && game_over_text != ""'>
        <div class='text-win-text'>
           {{ game_over_text }}
        </div>
        <div class="text-win-button" @click="reloadHandler"> {{  language == 'eng' ? 'Start over' : 'Начать заного'  }} </div>
        <div class="text-win-button red" @click="relocateHome"> {{  language == 'eng' ? 'Select another game' : 'Выбрать другую игру'  }}</div>
    </div>

</div>
</transition>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'; 
import Card from './Card.vue'
import { data } from '@/assets/card.js'
import { useModalStore } from '@/stores/modal'
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute()

const language = route.params.language==  'eng' ? 'eng' : 'rus'

const modalStore = useModalStore()

const round = ref(0)
const start = ref(false)
const game_over = ref(false)
const game_over_text = ref('')
const selectCardPlayer1 = ref(null)
const selectCardPlayer2 = ref(null)
const animation_vs = ref(false)

const winPlayer1 = ref(false)
const winPlayer2 = ref(false)

const pointsPlayer1 = ref(0)
const pointsPlayer2 = ref(0)

const fightState = ref(false)

const allCategory = [
    'Сила','Интеллект','Скорость и ловкость','Особые умения','Бойцовские навыки'
]
const allCategoryEnglish = [
    'Power','Intelligence','Speed ​​and agility','Special skills','Fighting skills'
]
const categoryCard = [
    'power','intelligence','dexterity','special_skills','fighting_skills'
]
const selectCategory = ref(0);

const getRandomCardsFisher = (arr, count) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, count);
};

let randomSelectionCards = ref(null)
let randomSelectionCardsPlayer1 = null
let randomSelectionCardsPlayer2 = null

const playRound = () => {
        selectCardPlayer1.value = randomSelectionCardsPlayer1[round.value]
        selectCardPlayer2.value = randomSelectionCardsPlayer2[round.value]
        fightState.value = true
}

const reloadHandler = () =>{
    window.location.reload();
}
const relocateHome = () =>{
    router.push('/')
}

const playFight = () => {
    // if(round.value != 6){

    // }
    animation_vs.value = true

    fightState.value = false

    setTimeout(()=>{
        animation_vs.value = false
        if(round.value != 5){
        //сравнивает силу, интелеект и т.д. по порядку
            if(selectCardPlayer1.value[categoryCard[round.value]] > selectCardPlayer2.value[categoryCard[round.value]]){
                pointsPlayer1.value = pointsPlayer1.value + 1
                winPlayer1.value = true
                //если первый выигрывает
            }
            if(selectCardPlayer1.value[categoryCard[round.value]] < selectCardPlayer2.value[categoryCard[round.value]]){
                pointsPlayer2.value = pointsPlayer2.value + 1
                winPlayer2.value = true
                //если второй выигрывает
            }
            if(selectCardPlayer1.value[categoryCard[round.value]] == selectCardPlayer2.value[categoryCard[round.value]]){
                pointsPlayer2.value = pointsPlayer2.value + 1
                pointsPlayer1.value = pointsPlayer1.value + 1

                winPlayer1.value = true
                winPlayer2.value = true
                //если ничья
            }
        //сравнивает силу, интелеект и т.д. по порядку

            setTimeout(() => {
                winPlayer1.value = false     
                winPlayer2.value = false  
                round.value = round.value + 1
                selectCategory.value = round.value
                playRound()
                if(round.value == 5){
                    selectCategory.value = 0
                }   
            }, 5000);
        }
        else if(round.value == 5){
            //если 6 раунд
            if(selectCardPlayer1.value[categoryCard[0]] > selectCardPlayer2.value[categoryCard[0]]){
                pointsPlayer1.value = pointsPlayer1.value + 1
                winPlayer1.value = true
                //если первый выигрывает
            }
            if(selectCardPlayer1.value[categoryCard[0]] < selectCardPlayer2.value[categoryCard[0]]){
                pointsPlayer2.value = pointsPlayer2.value + 1
                winPlayer2.value = true
                //если второй выигрывает
            }
            if(selectCardPlayer1.value[categoryCard[0]] == selectCardPlayer2.value[categoryCard[0]]){
                pointsPlayer2.value = pointsPlayer2.value + 1
                pointsPlayer1.value = pointsPlayer1.value + 1
                winPlayer1.value = true
                winPlayer2.value = true
                //если ничья
            }

            setTimeout(() => {
                winPlayer1.value = false     
                winPlayer2.value = false  
                round.value = 6
                selectCategory.value = 0
                game_over.value = true
            }, 5000);
            //если 6 раунд
        }
    setTimeout(() => {
    if(game_over.value == true){
        if(pointsPlayer1.value > pointsPlayer2.value){
            game_over_text.value = 'Участник 1 выиграл!'
        }
        if(pointsPlayer2.value > pointsPlayer1.value){
            game_over_text.value = 'Участник 2 выиграл!'
        }
        if(pointsPlayer2.value == pointsPlayer1.value){
            game_over_text.value = 'Ничья! Победила дружба!'
        }

        if(language == 'eng' && pointsPlayer1.value > pointsPlayer2.value){
             game_over_text.value = 'Participant 1 won!'
        }
        if(language == 'eng' && pointsPlayer2.value > pointsPlayer1.value){
             game_over_text.value = 'Participant 2 wins!'
        }
        if(language == 'eng' && pointsPlayer2.value == pointsPlayer1.value){
             game_over_text.value = 'Draw! Friendship wins!'
        }
    }
    }, 5000);
    },1700) 
    


}

const selectPlayerHandler = () =>{
    start.value = true
    //получает рандомные карты
    randomSelectionCards.value = getRandomCardsFisher(data, 12)
    randomSelectionCardsPlayer1 = randomSelectionCards.value.slice(0, 6);
    randomSelectionCardsPlayer2 = randomSelectionCards.value.slice(6, 12);
    playRound()

}

onMounted(()=>{
    selectPlayerHandler()
})

const handleBonusEvent = (payload) =>{
   
}

</script>
<style scoped>
    .game-upper{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
    }
    .wrapper-motion{
        width: 284px;
        border-radius: 20px;
        margin-bottom: 20px;
    }
    .motion , .motion-second, .motion-category{
        background-color: #232323;
        width: 284px;
        height: 42px;
        border-radius: 20px;
        color: white;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    /* .motion{
        background-color: #198754;
        border-radius: 0px 0px 20px 20px;
    }
    .motion-category{
        border-radius: 20px 20px 0 0;
    } */
    .start{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        flex-direction: column;
    }
    .start-count{
        background-color: #232323;
        width: 320px;
        height: 58px;
        border-radius: 30px;
        color: white;
        font-size: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
    }
    .wrapper-count-player{
        display: flex;
        justify-content: space-between;
        gap: 16px;
        width: 320px;
    }
    .count-player{
        width: 100%;
        background-color: #232323;
        border-radius: 30px;
        display: flex;
        height: 50px;
        cursor: pointer;
        color: white;
        justify-content: center;
        align-items: center;
        font-size: 22px;
    }
    .game-points{
        width: 100%;
        height: 100%;
        display: flex;
        gap: 34px;
        margin: 0 auto;
        
        max-width: 300px;
        margin-bottom: 20px;
        justify-content: space-between;
        align-items: center;
    }
    .game-silhouette{
        max-width: 132px;
        width: 100%;
    }
    .game-bottom.three{
        max-width: 446px;
    }
    .wrapper-cards{
        display: flex;
        gap: 36px;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 0 auto;
    }
    .card-vs{
        width: 90px;
        height: 90px;
        /* transition-duration: 2s; */
    }

    .card-vs.animation{
        animation: pulse 1.8s infinite, rotate 1.8s linear infinite;
    }

    @keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.45); /* Эмблема увеличивается */
  }
}
    @keyframes pulse-mobile {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2); /* Эмблема увеличивается */
  }
}
    .wrapper-buttons{
        display: flex;
        justify-content: space-between;
        gap: 12px;
        width: 278px;
        margin-top: 20px;
        margin-bottom: 30px;
    }
    .wrapper-buttons .third{
        display: block;
    }
    .wrapper-buttons .button{
        padding: 10px 22px;
        width: 278px;
    }
    .wrapper-cards-for-third{
            margin-top: 10px;
        }
        
        .card-state-player{
            margin: 0 auto;
            margin-bottom: 10px;
            background: #232323;
    color: white;
    height: 42px;
    border-radius: 20px;
    width: 120px;
    display: flex
;
    align-items: center;
    justify-content: center;
        }
        .wrapper-text-win{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100vh;
            flex-direction: column;
        }

        .text-win-text{
            font-size: 46px;
        }

        .text-win-button{
            margin-top: 20px;
            background-color: #1e9b3d;
            padding: 10px 20px;
            font-size: 16px;
            color: white;
            width: 100%;
            max-width: 260px;
            display: flex;
            cursor: pointer;
            justify-content: center;
            border-radius: 20px;
        }
        .text-win-button.red{
            background-color: #bb2d3b;
        }

    @media (max-width: 768px) {
        .card-vs.animation{
        animation: pulse-mobile 1.8s infinite, rotate 1.8s linear infinite;
    }
        .card-state-player, .motion-category{
            font-size: 15px;
            width: 100%;
            height: 38px;
        }
        .wrapper-motion{
        width: 100%;
        margin-bottom: 12px;
        }
        .motion-category{
            width: 100%;
        }
        .wrapper-buttons{
            margin-top: 12px;
        }
        .wrapper-buttons .button, .wrapper-buttons{
            width: 100%;
        }
        .wrapper-cards{
            overflow-x: scroll;
            /* justify-content: flex-start; */
            /* flex-direction: column; */
            gap: 8px;
        }
        .card-vs{
            width: 40px;
            height: 40px;
        }
        .wrapper-buttons.third{
            margin-top: 0px;
            margin-bottom: 26px;
        }
        .button.fight{
            font-size: 15px;
        }
        .text-win-text{
            font-size: 26px;
        }
    }

    @media (max-width: 342px) {
        .wrapper-cards{
            justify-content: flex-start;
        }
    }   
    </style>

