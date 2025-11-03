<template>
  <ion-page>
    <ion-content fullscreen>
      <!-- Indicateurs -->
      <div class="absolute top-7 right-4 z-20 flex gap-2">
        <div
          v-for="(s, index) in slides"
          :key="index"
          :class="['indicator',
            currentSlide === index ? 'w-6 h-2 rounded-full bg-[#91CF49]' : 'w-2 h-2 rounded-full bg-gray-300'
          ]">
        </div>
      </div>

      <!-- Swiper -->
      <swiper
        class="w-full h-full relative"
        ref="swiperRef"
        @slideChange="onSlideChange"
        @touchStart="onSwiperTouchStart"
      >

        <!-- Top left icon -->
        <ion-text class="absolute top-0 left-0 z-11 p-4 flex items-center gap-2">
          <ion-icon :icon="restaurantOutline" size="small" class="icon-top-left" ></ion-icon>
          <p class="text-2xl">NutriTrack</p>
        </ion-text>

        <!-- Slide 1 -->
        <swiper-slide class="relative flex flex-col bg-[#F9F9F9]">
          <ion-text class="absolute top-28 left-0 z-10 items-start flex flex-col text-5xl px-4 gap-2">
            <p>Your Daily Guide </p>
            <p class="flex gap-2 items-center">
              To 
              <span class="bg-[#91CF49] border-2 border-[#91CF49] flex items-center justify-center rounded-full">
                <ion-icon :icon="flame" color="black"></ion-icon>
              </span> 
              Smarter
            </p>
            <p>Eating</p>
          </ion-text>

          <img
            src="@/assets/images/image1.png"
            alt="Image 1"
            class="absolute inset-x-0 bottom-0 w-full h-full object-cover z-0"
          />
  <div
    @touchstart="startDrag"
    @touchmove.prevent="onDrag"
    @touchend="endDrag"
    class="absolute bottom-8 left-1/2 transform -translate-x-1/2 h-12 w-72 bg-white z-10 rounded-full flex items-center justify-center overflow-hidden"
  >
    <!-- Chevron coulissant -->
    <div
      class="absolute left-1 bg-[#91CF49] w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ease-out"
      :style="{ transform: `translateX(${chevronX}px)` }"
    >
      <ion-icon :icon="chevronForwardOutline" size="small" color="white"></ion-icon>
    </div>

    <!-- Checkmark fixe -->
    <div class="absolute right-1 bg-[#EFF0F0] w-10 h-10 rounded-full flex items-center justify-center">
      <ion-icon :icon="checkmarkOutline" size="small" color="white"></ion-icon>
    </div>

    <ion-text class="text-center text-lg font-semibold select-none">
      Get Started
    </ion-text>
  </div>


        </swiper-slide>

        <!-- Slide 2 -->
        <swiper-slide class="flex items-center justify-center bg-[#F9F9F9]">
            <ion-text class="absolute top-28 left-0 z-10 items-start flex flex-col text-5xl px-4 gap-2">
            <p>Track Your</p>
            <p class="flex gap-2 items-center">
              Weekly Calories
            </p>
            <p class="text-[#91CF49]  font-semibold">Effortlessly</p>
          </ion-text>
          <ion-text class="absolute top-76 left-0 z-10 items-start flex flex-col text-xl px-4 leading-6">
            <p>Scan your meals, logs your foods</p>
            <p>And watch your progress grow.</p>
          </ion-text>
          <ion-text class="absolute top-92 left-0 z-10 items-start flex flex-col text-xl px-4 leading-6">
            <p>Get instant insight And </p>
            <p>build healthier habits.</p>
          </ion-text>

          <img
            src="@/assets/images/image2.png"
            alt="Image 2"
            class="absolute inset-x-0 bottom-0 w-full h-full object-cover z-0"
          />

          <ion-button 
            class="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-[white] w-70 h-10 rounded-full flex items-center justify-center z-10"
            fill="clear"
            style="--color: black; --border-radius: 50%;">
            <div class="absolute left-3 h-7 w-7 rounded-full flex items-center justify-center">
              <ion-icon :icon="searchOutline" color="black"></ion-icon>
            </div>
                <ion-text class="text-center text-lg font-semibold text-black">Start Tracking</ion-text>
            </ion-button>
          <div class="shadow-lg absolute bottom-[1.8rem] left-1/2 transform -translate-x-1/2 bg-[#91CF49] w-72 h-14 rounded-full flex items-center justify-center z-0">
          </div>
        </swiper-slide>

        <!-- Slide 3 -->
        <swiper-slide class="flex items-center justify-center">
          <ion-card class="w-10/12">
            <ion-card-header>
              <ion-card-title>Slide 3</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <p>Content of slide 3</p>
            </ion-card-content>
          </ion-card>
        </swiper-slide>

      </swiper>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { IonContent, IonPage, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonText } from '@ionic/vue';
import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';
import { flame, restaurantOutline, chevronForwardOutline, checkmarkOutline, searchOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';

const slides = [1, 2, 3];
const currentSlide = ref(0);
const swiperRef = ref<any>(null);


// Bloquer le swipe vers la gauche sur le slide 0
function onTouchMove(event: any) {
  const swiper = swiperRef.value.swiper;
  if (!swiper) return;

  // Si on est sur le premier slide et swipe vers la droite (slide précédent)
  if (currentSlide.value === 0 && swiper.touches.diff < 0) {
    swiper.allowSlidePrev = false;
  } else {
    swiper.allowSlidePrev = true;
  }
}

function onSwiperTouchStart(swiper: any, event: any) {
  if (currentSlide.value === 0) {
    swiper.allowSlidePrev = false; // impossible d’aller à gauche
  } else {
    swiper.allowSlidePrev = true;  // autorisé sur les autres slides
  }
}

function onSlideChange(swiper: any) {
  currentSlide.value = swiper.realIndex;
  // Toujours réactiver slidePrev pour swiper après un changement
  swiper.allowSlidePrev = true;
}


const router = useRouter();


const chevronX = ref(0)
let startX = 0
let dragging = false

const MAX_DISTANCE = 240 // largeur de glissement max

function startDrag(e: TouchEvent) {
  dragging = true
  startX = e.touches[0].clientX
}

function onDrag(e: TouchEvent) {
  if (!dragging) return
  const deltaX = e.touches[0].clientX - startX
  chevronX.value = Math.min(Math.max(deltaX, 0), MAX_DISTANCE)
}

function endDrag() {
  dragging = false
  if (chevronX.value > MAX_DISTANCE * 0.75) {
    // Animation jusqu’au bout
    chevronX.value = MAX_DISTANCE
    // 👉 ici tu peux ajouter une action (naviguer, déclencher un son, etc.)
    router.push('/tabs/home')
  } else {
    // Retour doux au point de départ
    chevronX.value = 0
  }
}
</script>

<style scoped>
ion-icon {
  font-size: 38px;
  color: #91CF49;
}

.icon-top-left {
  font-size: 24px;
  color: #91CF49;
}

.indicator {
  transition: all 0.3s ease;
}

.text-stroke {
  -webkit-text-stroke: 0.5px black;
}

</style>
