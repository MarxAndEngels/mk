<template lang="">
   <div class="wrapper-main">
<transition name="fade">
<div class='game-wrap'>
    <div class="game-upper" v-show='start && randomSelectionCards && game_over == false'>
      <div class="wrapper-motion">
        <div class="motion-category" v-if='round+1 != 6'>
            {{  language == 'eng' ? 'Round' : 'Раунд'  }} - {{  round+1  }}
        </div>  
        <div class="motion-category" v-else-if='round+1 == 6'>
            {{  language == 'eng' ? 'Final Round' : 'Последний раунд'  }}
        </div>  
       </div>

       <transition name="fade">
       <div class="motion-category-red" v-show='textAlertPc'>
          {{  language == 'eng' ? 'The computer will use the bonus card!' : 'Компьютер будет использовать карту бонусов!'  }}
       </div>
    </transition>
    
        <div class="wrapper-cards with-pc">
            <div>
                <div class='card-state-player'>
                    {{  language == 'eng' ? 'Player1 (you)' : 'Игрок1 (вы)'  }} - {{ pointsPlayer1 }}
                </div>
                <Card v-if='selectCardPlayer1' @bonus-event="handleBonusEvent" :stronger='countCardBonusesPlayer1' :actives='activeCardBonusesPlayer1' :win='winPlayer1' :category='10' :card='selectCardPlayer1' :player='1'
                :ppa="powerPlayer1Active"
             :ipa="intelligencePlayer1Active"
             :dpa="dexterityPlayer1Active"
             :spa="special_skillsPlayer1Active"
             :fpa="fighting_skillsPlayer1Active"
                />
                </div>
                     <img class='card-vs' :class="{'animation': animation_vs}" :src="`/img/vs.webp`" alt="">
                 <div>
                <div class='card-state-player'>
                    {{  language == 'eng' ? 'Computer' : 'Компьютер'  }} - {{ pointsPlayer2 }}
                </div>
             <Card v-if='selectCardPlayer2' @bonus-event="handleBonusEvent"  :stronger='countCardBonusesPlayer2' :actives='activeCardBonusesPlayer2' :win='winPlayer2' :category='10' :card='selectCardPlayer2' :player='2'
             :ppa="powerPlayer2Active"
             :ipa="intelligencePlayer2Active"
             :dpa="dexterityPlayer2Active"
             :spa="special_skillsPlayer2Active"
             :fpa="fighting_skillsPlayer2Active"
             class='player-2'
             />
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
import { bonuses } from '@/assets/cardBonus.js'
import { data } from '@/assets/card.js'
import { useModalStore } from '@/stores/modal'
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';

   const bonusesResult = bonuses.filter(card => !(card.ability.includes("alllose")));
//    const dataResult = data.filter(card => card.title.includes("Scorpion"));

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
const selectCardBonusesPlayer1 = ref(null)
const selectCardBonusesPlayer2 = ref(null)
const animation_vs = ref(false)

const countCardBonusesPlayer1 = ref(2);
const countCardBonusesPlayer2 = ref(2);

const activeCardBonusesPlayer1 = ref(true)
const activeCardBonusesPlayer2 = ref(true)

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
// const selectCategory = ref(0);
const powerPlayer1Active = ref(false);
const powerPlayer2Active = ref(false);
const intelligencePlayer1Active = ref(false);
const intelligencePlayer2Active = ref(false);
const dexterityPlayer1Active = ref(false);
const dexterityPlayer2Active = ref(false);
const special_skillsPlayer1Active = ref(false);
const special_skillsPlayer2Active = ref(false);
const fighting_skillsPlayer1Active = ref(false);
const fighting_skillsPlayer2Active = ref(false);

const textAlertPc = ref(false)

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

let randomSelectionCardsBonuses = ref(null)
let randomSelectionCardsBonusesPlayer1 = null
let randomSelectionCardsBonusesPlayer2 = null

const playRound = () => {
        selectCardPlayer1.value = randomSelectionCardsPlayer1[round.value]
        selectCardPlayer2.value = randomSelectionCardsPlayer2[round.value]
        fightState.value = true

        if(countCardBonusesPlayer1.value >= 1){
            activeCardBonusesPlayer1.value = true 
        }
        if(countCardBonusesPlayer2.value >= 1){
            activeCardBonusesPlayer2.value = true 
        }
}

const reloadHandler = () =>{
    pointsPlayer1.value = 0
    pointsPlayer2.value = 0
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
    activeCardBonusesPlayer1.value = false
    activeCardBonusesPlayer2.value = false

    setTimeout(()=>{
        animation_vs.value = false
        if(round.value != 6){

        let countCategoryWin1 = 0
        let countCategoryWin2 = 0

        for (let i = 0; i < 5; i++) { 

            setTimeout(()=>{
                if(selectCardPlayer1.value[categoryCard[i]] > selectCardPlayer2.value[categoryCard[i]]){
                countCategoryWin1++

                if(i == 0){
                    powerPlayer1Active.value = true
                }
                if(i == 1){
                    intelligencePlayer1Active.value = true
                }
                if(i == 2){
                    dexterityPlayer1Active.value = true
                }
                if(i == 3){
                    special_skillsPlayer1Active.value = true
                }
                if(i == 4){
                    fighting_skillsPlayer1Active.value = true
                }
            }
            if(selectCardPlayer1.value[categoryCard[i]] < selectCardPlayer2.value[categoryCard[i]]){
                countCategoryWin2++

                if(i == 0){
                    powerPlayer2Active.value = true
                }
                if(i == 1){
                    intelligencePlayer2Active.value = true
                }
                if(i == 2){
                    dexterityPlayer2Active.value = true
                }
                if(i == 3){
                    special_skillsPlayer2Active.value = true
                }
                if(i == 4){
                    fighting_skillsPlayer2Active.value = true
                }
            }
            if(selectCardPlayer1.value[categoryCard[i]] == selectCardPlayer2.value[categoryCard[i]]){
                countCategoryWin1++
                countCategoryWin2++

                if(i == 0){
                    powerPlayer1Active.value = true
                    powerPlayer2Active.value = true
                }
                if(i == 1){
                    intelligencePlayer1Active.value = true
                    intelligencePlayer2Active.value = true
                }
                if(i == 2){
                    dexterityPlayer1Active.value = true
                    dexterityPlayer2Active.value = true
                }
                if(i == 3){
                    special_skillsPlayer1Active.value = true
                    special_skillsPlayer2Active.value = true
                }
                if(i == 4){
                    fighting_skillsPlayer1Active.value = true
                    fighting_skillsPlayer2Active.value = true
                }
            }
            },i*1500)
        
        }

        

        setTimeout(() => {

            if(countCategoryWin1 > countCategoryWin2){
            winPlayer1.value = true
            pointsPlayer1.value = pointsPlayer1.value + 1
        }
        if(countCategoryWin2 > countCategoryWin1){
            winPlayer2.value = true
            pointsPlayer2.value = pointsPlayer2.value + 1
        }
        if(countCategoryWin2 == countCategoryWin1){
            winPlayer1.value = true
            winPlayer2.value = true
            pointsPlayer1.value = pointsPlayer1.value + 1
            pointsPlayer2.value = pointsPlayer2.value + 1
        }
            }, 7000);

            setTimeout(()=>{
                powerPlayer1Active.value = false
                    powerPlayer2Active.value = false
                    intelligencePlayer1Active.value = false
                    intelligencePlayer2Active.value = false
                    dexterityPlayer1Active.value = false
                    dexterityPlayer2Active.value = false
                    special_skillsPlayer1Active.value = false
                    special_skillsPlayer2Active.value = false
                    fighting_skillsPlayer1Active.value = false
                    fighting_skillsPlayer2Active.value = false

                winPlayer1.value = false     
                winPlayer2.value = false  
                round.value = round.value + 1
                if(round.value == 6){
                    game_over.value = true

                    setTimeout(() => {
    if(game_over.value == true){
        if(pointsPlayer1.value > pointsPlayer2.value){
            game_over_text.value = 'Участник 1 выиграл!'
        }
        if(pointsPlayer2.value > pointsPlayer1.value){
            game_over_text.value = 'Компьютер выиграл!'
        }
        if(pointsPlayer2.value == pointsPlayer1.value){
            game_over_text.value = 'Ничья! Победила дружба!'
        }

        if(language == 'eng' && pointsPlayer1.value > pointsPlayer2.value){
             game_over_text.value = 'Participant 1 won!'
        }
        if(language == 'eng' && pointsPlayer2.value > pointsPlayer1.value){
             game_over_text.value = 'The computer wins!'
        }
        if(language == 'eng' && pointsPlayer2.value == pointsPlayer1.value){
             game_over_text.value = 'Draw! Friendship wins!'
        }
    }
    }, 100);
                }

                if(round.value != 6){
                playRound()
                checkСharacteristics()
                }


                
            },10000)
        }
    },1700) 
    


}

const selectPlayerHandler = () =>{
    start.value = true
    //получает рандомные карты
    randomSelectionCards.value = getRandomCardsFisher(data, 12)
    randomSelectionCardsPlayer1 = randomSelectionCards.value.slice(0, 6);
    randomSelectionCardsPlayer2 = randomSelectionCards.value.slice(6, 12);
    playRound()


            //получает рандомные карты
    randomSelectionCardsBonuses.value = getRandomCardsFisher(bonusesResult, 4)
    randomSelectionCardsBonusesPlayer1 = randomSelectionCardsBonuses.value.slice(0, 2);
    randomSelectionCardsBonusesPlayer2 = randomSelectionCardsBonuses.value.slice(2, 4);
        //получает рандомные карты

            //получает кол-во рандомных карт
    countCardBonusesPlayer1.value = randomSelectionCardsBonusesPlayer1.length
    countCardBonusesPlayer2.value = randomSelectionCardsBonusesPlayer2.length
                //получает кол-во рандомных карт
}

const handleBonusEvent = (payload) =>{
    if(payload == 1 && countCardBonusesPlayer1.value >= 1){
        //если выпало победа в раунде, повышаем все показатели
        if(randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer1.value-1].ability == 'allability20000'
            || randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer1.value-1].ability == 'alllose'
        ){
            selectCardPlayer1.value.power = randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer1.value-1].point
            selectCardPlayer1.value.intelligence = randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer1.value-1].point
            selectCardPlayer1.value.dexterity = randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer1.value-1].point
            selectCardPlayer1.value.special_skills = randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer1.value-1].point
            selectCardPlayer1.value.fighting_skills = randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer1.value-1].point
        }
        //если выпало победа в раунде, повышаем все показатели

        //если выпало увеличение силы, повышаем силу
        if(randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer1.value-1].ability == 'power'){
            selectCardPlayer1.value.power = selectCardPlayer1.value.power + randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer1.value-1].point
        }
        //если выпало увеличение силы, повышаем силу

        if(randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer1.value-1].ability == 'special_skills'){
            selectCardPlayer1.value.special_skills = selectCardPlayer1.value.special_skills + randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer1.value-1].point
        }
        if(randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer1.value-1].ability == 'dexterity'){
            selectCardPlayer1.value.dexterity = selectCardPlayer1.value.dexterity + randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer1.value-1].point
        }
        if(randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer1.value-1].ability == 'intelligence'){
            selectCardPlayer1.value.intelligence = selectCardPlayer1.value.intelligence + randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer1.value-1].point
        }
        if(randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer1.value-1].ability == 'fighting_skills'){
            selectCardPlayer1.value.fighting_skills = selectCardPlayer1.value.fighting_skills + randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer1.value-1].point
        }
        if(randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer1.value-1].ability == 'fighting_skills_enemy'){
            selectCardPlayer2.value.fighting_skills = selectCardPlayer2.value.fighting_skills - randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer1.value-1].point
        }
        if(randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer1.value-1].ability == 'dexterity_enemy'){
            selectCardPlayer2.value.dexterity = selectCardPlayer2.value.dexterity - randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer1.value-1].point
        }
        if(randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer1.value-1].ability == 'power_enemy'){
            selectCardPlayer2.value.power = selectCardPlayer2.value.power - randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer1.value-1].point
        }

        if(randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer1.value-1].ability == 'alllose_enemy'){
            selectCardPlayer2.value.power = randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer2.value-1].point
            selectCardPlayer2.value.intelligence = randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer2.value-1].point
            selectCardPlayer2.value.dexterity = randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer2.value-1].point
            selectCardPlayer2.value.special_skills = randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer2.value-1].point
            selectCardPlayer2.value.fighting_skills = randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer2.value-1].point
        }

        activeCardBonusesPlayer1.value = false
        modalStore.openModal(randomSelectionCardsBonusesPlayer1[countCardBonusesPlayer1.value-1])
        countCardBonusesPlayer1.value = countCardBonusesPlayer1.value-1

        if(countCardBonusesPlayer2.value >= 1){
            if(activeCardBonusesPlayer2.value == true){
                checkСharacteristics(true)
            }
        }
    }
    if(payload == 2 && countCardBonusesPlayer2.value >= 1){
        //если выпало победа в раунде, повышаем все показатели
        if(randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].ability == 'allability20000'
             || randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].ability == 'alllose'
        ){
            selectCardPlayer2.value.power = randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].point
            selectCardPlayer2.value.intelligence = randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].point
            selectCardPlayer2.value.dexterity = randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].point
            selectCardPlayer2.value.special_skills = randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].point
            selectCardPlayer2.value.fighting_skills = randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].point
        }
        //если выпало победа в раунде, повышаем все показатели

        //если выпало увеличение силы, повышаем силу
        if(randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].ability == 'power'){
            selectCardPlayer2.value.power = selectCardPlayer2.value.power + randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].point
        }
        //если выпало увеличение силы, повышаем силу

        if(randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].ability == 'special_skills'){
            selectCardPlayer2.value.special_skills = selectCardPlayer2.value.special_skills + randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].point
        }
        if(randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].ability == 'dexterity'){
            selectCardPlayer2.value.dexterity = selectCardPlayer2.value.dexterity + randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].point
        }
        if(randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].ability == 'intelligence'){
            selectCardPlayer2.value.intelligence = selectCardPlayer2.value.intelligence + randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].point
        }

        if(randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].ability == 'fighting_skills'){
            selectCardPlayer1.value.fighting_skills = selectCardPlayer2.value.fighting_skills + randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].point
        }
        if(randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].ability == 'fighting_skills_enemy'){
            selectCardPlayer1.value.fighting_skills = selectCardPlayer1.value.fighting_skills - randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].point
        }
        if(randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].ability == 'dexterity_enemy'){
            selectCardPlayer1.value.dexterity = selectCardPlayer1.value.dexterity - randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].point
        }
        if(randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].ability == 'power_enemy'){
            selectCardPlayer1.value.power = selectCardPlayer1.value.power - randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].point
        }

        if(randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].ability == 'alllose_enemy'){
            selectCardPlayer1.value.power = randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].point
            selectCardPlayer1.value.intelligence = randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].point
            selectCardPlayer1.value.dexterity = randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].point
            selectCardPlayer1.value.special_skills = randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].point
            selectCardPlayer1.value.fighting_skills = randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1].point
        }

        activeCardBonusesPlayer2.value = false
        modalStore.openModal(randomSelectionCardsBonusesPlayer2[countCardBonusesPlayer2.value-1])
        countCardBonusesPlayer2.value = countCardBonusesPlayer2.value-1
    }
    setTimeout(()=>{
        modalStore.closeModal() 
    },5000)

    
}


const checkСharacteristics = (fromPlayer=false) =>{
        let countCategoryWin1Pc = 0
        let countCategoryWin2Pc = 0

        if(countCardBonusesPlayer2.value >= 1){

          for (let i = 0; i < 5; i++) { 
                if(selectCardPlayer1.value[categoryCard[i]] > selectCardPlayer2.value[categoryCard[i]]){
                countCategoryWin1Pc++
            }
            if(selectCardPlayer1.value[categoryCard[i]] < selectCardPlayer2.value[categoryCard[i]]){
                countCategoryWin2Pc++
            }
            if(selectCardPlayer1.value[categoryCard[i]] == selectCardPlayer2.value[categoryCard[i]]){
                countCategoryWin1Pc++
                countCategoryWin2Pc++
            }
        }
        console.log(countCategoryWin2Pc < countCategoryWin1Pc)
        if(countCategoryWin2Pc < countCategoryWin1Pc){
            let spacePower = selectCardPlayer1.value.power - selectCardPlayer2.value.power
            if(spacePower <= 300){
               let space = countCategoryWin1Pc - countCategoryWin2Pc
                if( space == 1){
                    playHandleBonus(fromPlayer)
               }else if(round.value == 4 && countCardBonusesPlayer2.value == 2 || round.value == 5 && countCardBonusesPlayer2.value >= 1){
                playHandleBonus(fromPlayer)
                }
            }
            else if(round.value == 4 && countCardBonusesPlayer2.value == 2 || round.value == 5 && countCardBonusesPlayer2.value >= 1){
                playHandleBonus(fromPlayer)
            }
        }
        
        else if(countCategoryWin2Pc == countCategoryWin1Pc){
            playHandleBonus(fromPlayer)
        }

    }
}

const playHandleBonus = (fromPlayer=false) =>{
                        if(fromPlayer){
                        fightState.value = false
                        setTimeout(()=>{
                        textAlertPc.value = true
                        },5000)
                         setTimeout(()=>{
                            textAlertPc.value = false
                            handleBonusEvent(2)
                            fightState.value = true
                        },10000)
                    }else{
                    activeCardBonusesPlayer1.value = false
                    fightState.value = false
                    textAlertPc.value = true
                    setTimeout(()=>{
                        textAlertPc.value = false
                        handleBonusEvent(2)
                        activeCardBonusesPlayer1.value = true
                        fightState.value = true
                    },5000)
                    }
}

onMounted(()=>{
    selectPlayerHandler()
    checkСharacteristics()
})
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
        width: 240px;
        border-radius: 20px;
        margin-bottom: 20px;
    }
    .motion , .motion-second, .motion-category{
        background-color: #232323;
        width: 240px;
        height: 42px;
        border-radius: 20px;
        color: white;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .motion-category-red{
        background-color:#bb2d3b;
        width: 420px;
        border-radius: 20px;
        height: 42px;
        color: white;
        margin-bottom: 20px;
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
        width: 240px;
        margin-top: 20px;
        margin-bottom: 30px;
    }
    .wrapper-buttons .third{
        display: block;
    }
    .wrapper-buttons .button{
        padding: 10px 22px;
        width: 240px;
    }
    .wrapper-cards-for-third{
            margin-top: 10px;
        }

    :deep(.wrapper-cards.with-pc) .player-2 .card-bonus{
        opacity: 0.5;
        pointer-events: none;
    }
        
        .card-state-player{
            margin: 0 auto;
            margin-bottom: 10px;
            background: #232323;
    color: white;
    height: 42px;
    border-radius: 20px;
    width: 140px;
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
       .motion-category-red{
        width: 100%;
        border-radius: 0;
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

