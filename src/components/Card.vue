<template>
  <div class="card" v-if="card" :class="{'english':  language == 'eng'}">
    <div class="card-name">
    {{ card.title  }}
      <div class="card-subname" v-if="card.subtitle">
        ({{ card.subtitle  }})
      </div>
    </div>
    <Transition name="fade">
    <div class="card-bonus" v-show="stronger >= 1 && actives" @click="handleBonus">
      {{  language == 'eng' ? 'Improve' : 'Усилить'  }} ({{ stronger }})
    </div>
  </Transition>
    <Transition name="fade">
    <div class="card-animation" v-show="win">
      {{  language == 'eng' ? 'Winner' : 'Победитель!'  }}
    </div>
    </Transition>
    <div class="card-number-player">
      {{ player }}
    </div>
    <img class="card-image" :src="`/img/card/${card.image}`" alt="">
    <div class="characteristic">
      <div class="characteristic-item-wrap" :class="{'active': category == 0 || ppa}">
        <div class="characteristic-item-wrap-skill">
          {{  language == 'eng' ? 'Power' : 'Сила'  }}
        </div> 
        <div class="characteristic-item-wrap-count">
            {{ card.power }}
        </div> 
      </div>
      <div class="characteristic-item-wrap" :class="{'active': category == 1 || ipa}">
        <div class="characteristic-item-wrap-skill">
          {{  language == 'eng' ? 'Intelligence' : 'Интеллект'  }}
        </div> 
        <div class="characteristic-item-wrap-count">
          {{ card.intelligence }}
        </div> 
      </div>
      <div class="characteristic-item-wrap" :class="{'active': category == 2 || dpa}">
        <div class="characteristic-item-wrap-skill">
          {{  language == 'eng' ? 'Speed ​​and agility' : 'Скорость и ловкость'  }}
        </div> 
        <div class="characteristic-item-wrap-count">
          {{ card.dexterity }}
        </div> 
      </div>
      <div class="characteristic-item-wrap" :class="{'active': category == 3 || spa}">
        <div class="characteristic-item-wrap-skill">
          {{  language == 'eng' ? 'Special skills' : 'Особые умения'  }}
        </div> 
        <div class="characteristic-item-wrap-count">
          {{ card.special_skills }}
        </div> 
      </div>
      <div class="characteristic-item-wrap last" :class="{'active': category == 4 || fpa}">
        <div class="characteristic-item-wrap-skill">
          {{  language == 'eng' ? 'Fighting skills' : 'Бойцовские навыки'  }}
        </div> 
        <div class="characteristic-item-wrap-count">
          {{ card.fighting_skills }}
        </div> 
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
const props = defineProps({
  card: {
    type: Object,
    required: true
  },
  player: {
    type: Number,
    required: false
  },
  category: {
    type: Number,
    required: false
  },
  win: {
    type: Boolean,
    required: false
  },
  stronger: {
    type: Number,
    required: false,
  },
  actives:{
    type: Boolean,
    required: false
  },
  ppa:{
    type: Boolean,
    default:false,
  },
  ipa:{
    type: Boolean,
    default:false,
  },
  dpa:{
    type: Boolean,
    default:false,
  },
  spa:{
    type: Boolean,
    default:false,
  },
  fpa:{
    type: Boolean,
    default:false,
  },
})

const route = useRoute()

const language = route.params.language==  'eng' ? 'eng' : 'rus'

const emit = defineEmits(['bonus-event'])

const handleBonus = () => {
  emit('bonus-event', props.player) // Передаем данные
}
</script>
<style scoped>
  .card{
    position: relative;
    width: 260px;
    img{
      border-radius: 10px;
    }
  }
  .card-name{
    position: absolute;
    color: white; 
    font-size: 20px;
    top: 6px;
    background-color: rgba(0, 0, 0, 0.65);
    width: auto;
    text-align: center;
    width: 240px;
    left: 10px;
    padding: 10px 0px;
    border-radius: 10px;
    font-size: 16px;
    /* margin: 0 30px; */
  }
  .card-subname{
    font-size: 14px;
    margin-top: 2px;
  }
  .characteristic{
    width: 240px;
    padding: 10px 0px;
    height: 136px;
    position: absolute;
    bottom: 10px;
    border-radius: 10px;
    left: 10px;
    z-index: 3;
    font-size: 14px;
    background-color: rgba(0, 0, 0, 0.7);
    /* padding: 16px; */
    
  }
  .characteristic-item-wrap{
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    margin-bottom: 10px;
    font-weight: 400;
  }

  .characteristic-item-wrap.active .characteristic-item-wrap-skill{
    color: #1e9b3d;
  }
  .characteristic-item-wrap.active .characteristic-item-wrap-count{
    color: #1e9b3d;
  }
  .characteristic-item-wrap.last{
    margin-bottom: 0;
  }
  .characteristic-item-wrap-skill{
    color: #e3e344;
  }
  .characteristic-item-wrap-count{
    color: white;
  }
  .card-image{
    width: 260px;
  }

  .card-bonus{
    background-color: #1e9b3d;
    border-radius: 20px;
    width: auto;
    
    height: 24px;
    color: white;
    position: absolute;
    top: 158px;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    right: 10px;
    padding: 0 10px;
    cursor: pointer;
  }
  .card-animation{
    position: absolute;
    background-color: #1e9b3d;
    color: white;
    padding: 8px 28px;
    border-radius: 20px;
    top: 102px;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
  }
  .card-animation img{
    max-width: 140px;
  }

  .card-number-player{
    color: white;
    position: absolute;
    top: 158px;
    background-color: #1e9b3d;
    left: 10px;
    border-radius: 50%;
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    .card-name{
      font-size: 15px;
    }
    .card-subname{
      font-size: 13px;
    }
    .card-image{
      width: 100%;
    }
    .card {
      width: 100%;
    }
    .card-name{
      width: calc(100% - 20px);
    }

    .card-animation{
      font-size: 15px;
      padding: 8px 14px;
    }
    .characteristic{
      position: static;
      width: 100%;
      height: 100%;
      font-size: 13px;
      background-color: #232323;
    }
    .card-number-player, .card-bonus{
      top: auto;
      bottom: 170px;
    }

    .characteristic.english{
      height: 152px;
    }
    }

    @media (max-width: 444px) {
      .card-number-player, .card-bonus{
      bottom: 190px;
    }

    .card.english .card-number-player, .card-bonus{
      top: auto;
      bottom: 170px;
      
    }
    }
    @media (max-width: 437px) {
      .card-number-player, .card-bonus{
      bottom: 204px;
    }

    .card.english .card-number-player, .card.english .card-bonus{
      top: auto;
      bottom: 170px;
      
    }
    }

    @media (max-width: 379px) {
      .card-image{
      width: 142px;
    }
    .card {
      width: 142px;
    }
    .card-name{
      width: 122px;
    }
    .characteristic{
      width: 122px;
      position: static;
    }
    .characteristic{
      width: 142px;
      height: auto;
    }
    .card-number-player, .card-bonus{
      top: 150px;
    }
    .card.english .card-number-player, .card.english .card-bonus{
      bottom: 190px;
      
    }
    }
</style>
