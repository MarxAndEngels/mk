<template>
  <div class="card bonus" v-if="card">
    <div class="card-name">
    {{  route.params.language == 'eng' ? card.title_eng : card.title  }}
    </div>
    <img class="card-image" :src="`/img/bonuses/${card.image}`" alt="">
    <div class="card-animation">
      <!-- <img class="card-image" :src="`/img/animation/start1.gif`" alt=""> -->
    </div>
    <div class="card-ability">
      <!-- <div class="card-ability-energy-wrap">
        <img class="card-ability-energy" src="/img/energy.svg" alt="">
      </div> -->
      <div class="card-ability-wrap">
      {{  route.params.language == 'eng' ? card.description_eng : card.description  }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { ref,onMounted } from 'vue'; 
defineProps({
  card: {
    type: Object,
    required: true
  },
})

const route = useRoute()

const language = ref(null)

</script>
<style scoped>

@keyframes bounce {
  0% {
    top: -32px;
    /* opacity: 0; */
  }
  33% {
    top: -62px;
    /* opacity: 0; */
  }
  66% {
    top: -26px;
    /* opacity: 0; */
  }
  100% {
    top: -32px;
  }
}
  .card{
    position: relative;
    width: 260px;
    img{
      border-radius: 10px;
    }

  }
  /* .card.bonus{
    height: 300px;
  } */
  .card-name{
    position: absolute;
    color: white; 
    font-size: 20px;
    box-shadow: 0 0 2px #312c2c;
    top: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    width: auto;
    text-align: center;
    width: 240px;
    left: 10px;
    padding: 10px 0px;
    border-radius: 10px;
    font-size: 16px;
    /* margin: 0 30px; */
  }
  .card-name.bg{
    top: 22px;
  }
  .card-subname{
    font-size: 14px;
    margin-top: 2px;
  }
  .card-ability{
    width: 240px;
    padding: 10px 0px;
    height: auto;
    position: absolute;
    bottom: 15px;
    border-radius: 10px;
    flex-direction: column;
    left: 10px;
    z-index: 3;
    font-size: 14px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e3e344;
    /* padding: 16px; */
  }

  .card-ability-wrap{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding-top: 4px; */
    font-size: 16px;
  }

  .card-image{
    width: 260px;
  }

  .card-animation{
    position: absolute;
    /* background-color: #232323; */
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
  .card-ability-energy-wrap{
    background-color: #232323;
    padding: 6px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -30px;
    animation: bounce 0.8s ease;
  }
  .card-ability-energy{
    width: 100%;
    height:100%;
  }

  @media (max-width: 768px) {
    .card-image{
      width: 240px;
    }
    .card {
      width: 240px;
    }
    .card-name{
      width: 220px;
    }
    .card-ability{
      width: 220px;
      height: auto;
      font-size: 13px;
    }
    .card-ability-wrap{
      font-size: 14px;
    }
    }
</style>
