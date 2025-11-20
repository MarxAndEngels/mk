<script setup>
import { ref, computed } from 'vue'
// Здесь можно описать логику, если нужно (например, получение текущего маршрута)
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { useModalStore } from '@/stores/modal'
import Modal from './components/Modal.vue';

const modalStore = useModalStore()
// Вычисляемое свойство для отслеживания состояния модалки
const modal = computed(() => modalStore.modal)
const router = useRouter()
const route = useRoute()
// const close = () => {
//   modalStore.closeModal() 
// }
</script>

<template>
  <div id="app">
    <!-- Навигационное меню -->
    <router-link v-if="route.name != 'Home'" to="/">Games</router-link>
    <Modal v-show="modal && modal.open && route.name != 'Home'"/>
    <!-- Место для отображения компонентов -->
    <router-view />
  </div>
</template>

<style>
/* Стили для навигации */
nav {
  margin-bottom: 20px;
}
</style>