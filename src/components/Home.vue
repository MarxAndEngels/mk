<template>
    <div>
        <div class="menu">
      <router-link :to="`${selectedOptionPlayers}/${selectedOptionLanguage}/game1`">
        <span>1.</span> {{ selectedOptionLanguage == 'rus' ? 'Игра 1' : 'Game 1' }}</router-link>

              <router-link :to="`${selectedOptionPlayers}/${selectedOptionLanguage}/bonuses/game1`">
          <span>2.</span> {{ selectedOptionLanguage == 'rus' ? 'Игра 1 c бонус картами' : 'Game 1 with bonuses' }}</router-link>
              <router-link :to="`${selectedOptionPlayers}/${selectedOptionLanguage}/game2`">
          <span>3.</span> {{ selectedOptionLanguage == 'rus' ? 'Игра 2' : 'Game 2' }}</router-link>
      <router-link :to="`${selectedOptionPlayers}/${selectedOptionLanguage}/bonuses/game2`">
        <span>
          4.
        </span>
         {{ selectedOptionLanguage == 'rus' ? 'Игра 2 c бонус картами' : 'Game 2 with bonuses' }}</router-link>
      <router-link :to="`${selectedOptionPlayers}/${selectedOptionLanguage}/bonuses/game1/pc`">
        <span>
          5.
        </span>
         {{ selectedOptionLanguage == 'rus' ? 'Играть против компьютера' : 'Play against the computer' }}</router-link>
         <router-link to="/test">test</router-link>

    <!-- <div class="text-select">
        {{ selectedOptionLanguage == 'rus' ? 'Количество игроков:' : 'Count players:' }}
        {{ selectedOptionPlayers || '0' }}
    </div>
    <div
      v-for="option in optionsPLayers"
      :key="option"
      class="radio-option"
    >
      <input
        type="radio"
        :id="option"
        :value="option"
        v-model="selectedOptionPlayers"
        class="radio-input"
        name='player-group'
        role="radio"
        :aria-checked="selectedOptionPlayers === option"
      />
      <label :for="option" class="radio-label">
        {{ option }}
      </label>
    </div> -->

    <div class="text-select">
        {{ selectedOptionLanguage == 'rus' ? 'Выбранный язык:' : 'Language:' }}
     {{ selectedOptionLanguage == 'rus' ? 'Русский' : 'English' }}
    </div>
    <div
      v-for="option in optionsLanguage"
      :key="option"
      class="radio-option"
    >
      <input
        type="radio"
        :id="option"
        :value="option"
        v-model="selectedOptionLanguage"
        class="radio-input"
        name='language-group'
        role="radio"
        :aria-checked="selectedOptionLanguage === option"
      />
      <label :for="option" class="radio-label">
        {{ option }}
      </label>
    </div>

  </div>
    </div>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue';

// Список доступных опций
const optionsPLayers = [2, 3];
// Хранит выбранный вариант
const selectedOptionPlayers = ref(2);

// Список доступных опций
const optionsLanguage = ['rus', 'eng'];
// Хранит выбранный вариант
const selectedOptionLanguage = ref('rus');


onMounted(() => {
  const savedPlayers = localStorage.getItem('selectedPlayers');
  const savedLanguage = localStorage.getItem('selectedLanguage');

  if (savedPlayers !== null) {
    selectedOptionPlayers.value = parseInt(savedPlayers, 10);
  }

  if (savedLanguage) {
    selectedOptionLanguage.value = savedLanguage;
  }
});

watch(
  () => selectedOptionPlayers.value,
  (newVal) => {
    localStorage.setItem('selectedPlayers', newVal);
  }
);

watch(
  () => selectedOptionLanguage.value,
  (newVal) => {
    localStorage.setItem('selectedLanguage', newVal);
  }
);
</script>
<style scoped>
.menu{
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
}

.menu .radio-input,.menu label {
  cursor: pointer;
}
.menu a{
  font-family: 'Press Start 2P', sans-serif;
  text-decoration: none;
  color: black;
  font-size: 40px;
  padding: 10px 20px;
  transition: all 0.4s ease;
}
.menu a span{
  color: #1e9b3d;
}
.menu a:hover {
  background-color: #1e9b3d;
  color: white;
}
.menu a:hover span{
  color: white;
}

.text-select{
  margin-top: 20px;
}

@media (max-width: 768px) {
  .menu a{
  font-size: 24px;
}
}
</style>