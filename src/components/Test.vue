<template>
    <center>
        <div v-for="el of cards">
        <Card :win='false' :category='0' :card='el' :player='1'/>
        <br>
    </div>
    <div>
        <div v-for="el of cardsBonus">
        <CardBonus :card="el"/>
        <br>
    </div>
        <!-- <CardBonus :card="cardsBonus"/> -->
    </div>
    </center>

</template>
<script setup>
import { ref, onMounted } from 'vue'; 
import Card from './Card.vue'
import CardBonus from './CardBonus.vue'
import { data } from '@/assets/card.js'
import { bonuses } from '@/assets/cardBonus.js'

const cards = ref();
const cardsBonus = ref();

onMounted(()=>{
    // cards.value = data.filter(character => character.subtitle.includes("Injustice"));
    cards.value = data
    console.log(cards.value.length)
    //536 - 214 = 322
    // cardsBonus.value = bonuses.filter(character => character.title.includes("Кинжалы Милины"))[0];
    // cardsBonus.value = bonuses.filter(character => character.ability.includes("power"));
    // cardsBonus.value = bonuses
})
</script>
