<template>
    <div>
      <!-- Модальное окно -->
      <transition name="fade">
        <div v-show="modal" class="modal-overlay" @click.self="handleOverlayClick">
          <div class="modal-content">
            <button class="close-btn" @click="modalStore.closeModal">×</button>
            
            <CardBonus :card="modal" v-show="modal"/>
            <!-- <div class="modal-actions">
              <button @click="modalStore.closeModal" class="action-btn primary">Ок</button>
              <button @click="modalStore.closeModal" class="action-btn secondary">Отмена</button>
            </div> -->
          </div>
        </div>
      </transition>

    </div>
  </template>
  
  <script setup>
  import { bonuses } from '@/assets/cardBonus.js'
  import { computed } from 'vue'
  import { useModalStore } from '@/stores/modal'
  import { ref, onMounted } from 'vue'; 
  import CardBonus from '../components/CardBonus.vue'
  const cardSelect = ref();
  
  const modalStore = useModalStore()
  const modal = computed(() => modalStore.modal)
  
  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('modal-overlay')) {
      modalStore.closeModal()
    }
  }

  // if(modal.open){
  //   cardSelect.value = modal.value
  // }


  // if(modalResult.value){
  //     cardSelect.value = modalResult.value
  //   }


//   onMounted(()=>{
//     // cardSelect.value = bonuses.filter(info => info.title.includes("Amulet of Shinnok"))[0];
//     console.log(modalData.value)

// })

  </script>
  
  <style scoped>
  /* Кнопка открытия модалки */
  .open-modal-btn {
    padding: 12px 24px;
    background: #42b983;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s ease;
    margin: 20px;
  }
  
  .open-modal-btn:hover {
    background: #369c67;
  }
  
  /* Оверлей модального окна */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  /* Содержимое модального окна */
  .modal-content {
    background: white;
    padding: 30px;
    padding-top: 38px;
    border-radius: 12px;
    position: relative;
    max-width: 264px;
    width: 90%;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    animation: zoomIn 0.3s ease forwards;
  }
  
  /* Кнопка закрытия */
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
    color: #666;
  }
  
  /* Заголовок */
  .modal-content h2 {
    margin-top: 0;
    color: #333;
  }
  
  /* Текст */
  .modal-content p {
    color: #555;
    line-height: 1.6;
  }
  
  /* Кнопки действий */
  .modal-actions {
    margin-top: 25px;
    display: flex;
    gap: 15px;
    justify-content: flex-end;
  }
  
  .action-btn {
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  
  /* Основная кнопка */
  .primary {
    background: #42b983;
    color: white;
  }
  
  /* Вторичная кнопка */
  .secondary {
    background: #e0e0e0;
    color: #333;
  }
  
  /* Анимация появления */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  
  @keyframes zoomIn {
    from {
      transform: scale(0.95);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  /* Адаптивность */
  @media (max-width: 600px) {
    .modal-content {
      padding: 20px;
      padding-top: 38px;
      max-width: 242px;
    }
  }
  </style>