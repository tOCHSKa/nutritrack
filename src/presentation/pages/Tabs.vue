<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>

      <!-- Tab Bar -->
      <ion-tab-bar slot="bottom" class="relative bg-gray-100 h-16 flex justify-evenly items-center px-4 shadow-inner" style="--color-selected: #91CF49;">
        
        <!-- Accueil -->
        <ion-tab-button tab="home" href="/home" class="bg-gray-100">
          <ion-icon :icon="home"></ion-icon>
          <ion-label>Accueil</ion-label>
        </ion-tab-button>

        <!-- Progression -->
        <ion-tab-button tab="progress" href="/progress" class="bg-gray-100">
          <ion-icon :icon="analyticsOutline"></ion-icon>
          <ion-label>Progrès</ion-label>
        </ion-tab-button>

        <!-- Espace vide pour le bouton central -->
        <ion-tab-button tab="scan" href="/scan" class="bg-gray-100">
          <ion-icon :icon="scanOutline" size="large"></ion-icon>
          <ion-label>Scan</ion-label>
        </ion-tab-button>

        <!-- Bonus -->
        <ion-tab-button tab="bonus" href="/bonus" class="bg-gray-100">
          <ion-icon :icon="starOutline"></ion-icon>
          <ion-label>Bonus</ion-label>
        </ion-tab-button>

        <!-- Menu -->
        <ion-tab-button tab="menu" href="/menu" class="bg-gray-100">
          <ion-icon :icon="gridOutline"></ion-icon>
          <ion-label>Menu</ion-label>
        </ion-tab-button>

      </ion-tab-bar>

      <!-- Bouton Scan central flottant -->
      <!-- <div class="absolute bottom-2 -right-6 transform -translate-x-1/2 z-50">
        <ion-button shape="round" class=" w-16 h-16 p-0" href="/scan">
          <ion-icon :icon="scanOutline" color="white" style="font-size:32px;"></ion-icon>
        </ion-button>
      </div> -->
      
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon, IonButton } from '@ionic/vue';
import { home, analyticsOutline, starOutline, gridOutline, scanOutline } from 'ionicons/icons';
</script>

<style scoped>
ion-tab-bar {
  padding: 0 1rem;
}

ion-tab-button ion-icon {
  font-size: 24px;
}

ion-tab-button ion-label {
  font-size: 12px;
  font-weight: bold;
}
</style>
