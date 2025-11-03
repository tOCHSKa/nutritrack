<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Résultat pour "banane"</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- Chargement -->
      <ion-text v-if="loading">Chargement...</ion-text>

      <!-- Produit trouvé -->
      <ion-card v-else-if="food">
        <ion-card>
            <ion-card-content style="display:flex; justify-content:center;">
                <ion-img :src="food.image" style="width:150px; height:auto;"></ion-img>
            </ion-card-content>
        </ion-card>
        <ion-card-header>
          <ion-card-title>{{ food.name }}</ion-card-title>
          <ion-card-subtitle>{{ food.brands }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <p><strong>Pays :</strong> {{ food.countries }}</p>
          <p><strong>Fabriqué à :</strong> {{ food.manufacturing_places }}</p>
          <p><strong>Ingrédients :</strong> {{ food.ingredients_text }}</p>

          <h3>Valeurs nutritionnelles (pour 100g)</h3>
          <ion-list lines="none">
            <ion-item>Calories : {{ food.calories_kcal_100g }} kcal</ion-item>
            <ion-item>Protéines : {{ food.protein_100g }} g</ion-item>
            <ion-item>Glucides : {{ food.sugars_100g }} g de sucres</ion-item>
            <ion-item>Matières grasses : {{ food.fat_100g }} g (dont {{ food.saturated_fat_100g }} g saturées)</ion-item>
            <ion-item>Sel : {{ food.salt_100g }} g</ion-item>
          </ion-list>

          <p>NutriScore : <strong>{{ food.nutriscore_grade?.toUpperCase() }}</strong> ({{ food.nutriscore_score }})</p>
          <p>EcoScore : <strong>{{ food.ecoscore_grade?.toUpperCase() }}</strong> ({{ food.ecoscore_score }})</p>
        </ion-card-content>
      </ion-card>

      <!-- Aucun résultat -->
      <ion-text v-else>
        Aucun résultat trouvé 😢
      </ion-text>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonText,
  IonList,
  IonItem,
  IonImg
} from '@ionic/vue';

const food = ref<any | null>(null);
const loading = ref(false);

async function fetchBanane() {
  loading.value = true;
  try {
    const url = `http://localhost:3000/api/food?query=banane`;
    console.log('Appel URL:', url);

    const response = await axios.get(url);
    console.log('Réponse reçue:', response.data);

    const p = response.data.product;
    console.log('Produit:', p);

    if (p) {
      food.value = {
        id: p.id,
        name: p.name,
        brands: p.brands,
        calories_kcal_100g: p.calories_kcal_100g,
        protein_100g: p.protein_100g,
        sugars_100g: p.sugars_100g,
        fat_100g: p.fat_100g,
        saturated_fat_100g: p.saturated_fat_100g,
        salt_100g: p.salt_100g,
        countries: p.countries,
        manufacturing_places: p.manufacturing_places,
        labels: p.labels,
        nutriscore_grade: p.nutriscore_grade,
        nutriscore_score: p.nutriscore_score,
        ecoscore_grade: p.ecoscore_grade,
        ecoscore_score: p.ecoscore_score,
        image: p.image,
        ingredients_text: p.ingredients_text,
        ingredients_list: p.ingredients_list,
      };
      console.log('Food mis à jour:', food.value);
    } else {
      food.value = null;
    }
  } catch (err) {
    console.error('Erreur backend local:', err);
    food.value = null;
  } finally {
    loading.value = false;
  }
}

onMounted(fetchBanane);
</script>
