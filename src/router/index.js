// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Game1BonusesVsPc from '../components/Game1BonusesVsPc.vue';
import Game2Bonuses from '../components/Game2Bonuses.vue';
import Game1Bonuses from '../components/Game1Bonuses.vue';
import Game2 from '../components/Game2.vue';
import Game1 from '../components/Game1.vue';
import Test from '../components/Test.vue';

// Определение маршрутов
const routes = [
  {
    path: '/', // Путь к странице
    name: 'Home', // Имя маршрута (опционально)
    component: Home, // Компонент, который будет отображаться
  },
  {
    path: '/2/:language/bonuses/game2',
    name: 'Game2Bonuses',
    component: Game2Bonuses,
  },
  {
    path: '/2/:language/bonuses/game1/pc',
    name: 'Game1BonusesVsPc',
    component: Game1BonusesVsPc,
  },
  {
    path: '/2/:language/bonuses/game1',
    name: 'Game1Bonuses',
    component: Game1Bonuses,
  },
  {
    path: '/2/:language/game2',
    name: 'Game2',
    component: Game2,
  },
  {
    path: '/2/:language/game1',
    name: 'Game1',
    component: Game1,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
];

const router = createRouter({
 history: createWebHashHistory(), // решает проблемы с роутингом
  routes,
});

export default router;