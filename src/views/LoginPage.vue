<template>
  <ion-page class="bg-[#F9F9F9] flex flex-col justify-between min-h-screen px-6 py-10">
    
    <!-- Logo + titre -->
    <div class="flex flex-col items-center mt-8 text-center">
      <h1 class="text-3xl font-bold mt-2">Sign In</h1>
      <p class="opacity-80 mt-1 text-base max-w-xs">
        Hi, Welcome back — you've been missed!
      </p>
    </div>

    <!-- Inputs -->
    <div class="w-full max-w-sm mx-auto mt-8 space-y-5 flex flex-col gap-2">
      <InputField 
        label="Email" 
        placeholder="Email" 
        type="text" 
        v-model="email" 
        for="email"
      />

      <InputField
        label="Password"
        placeholder="Password"
        type="password"
        v-model="password"
        for="password"
      >
        <template #text>
          <a href="#" class="text-gray-500 underline">Forgot Password ?</a>
        </template>
      </InputField>

      <!-- Bouton Sign In principal -->
      <ion-button fill="clear" size="small" style="--padding-top: 14px;--padding-bottom: 14px;"
        @click="handleLogin"
        class="w-full bg-[#91CF49] text-white text-md font-semibold mt-3 shadow-md rounded-full hover:scale-[1.02] active:scale-95 transition-transform"
      >
        Sign In
      </ion-button>
    </div>

      <div class="flex items-center mx-auto my-4">
        <p class="relative text-sm text-gray-500 
        before:content-[''] before:block before:absolute before:-left-17 before:top-1/2 before:w-16 before:h-px before:bg-gray-500 before:bg-opacity-10
        after:content-[''] after:block after:absolute after:left-21 after:top-1/2 after:w-16 after:h-px after:bg-gray-500 after:bg-opacity-10
        ">
          Or sign in with
        </p>
      </div>


    <!-- Boutons sociaux -->
    <div class="w-full max-w-sm mx-auto  flex justify-center gap-2 h-[60px]">
      <SocialButton :onClick="loginWithGoogle">
        <GoogleSVG class="w-6 h-6" />
      </SocialButton>

      <SocialButton :onClick="loginWithApple">
        <AppleSVG class="w-6 h-6 mb-1" />
      </SocialButton>

      <SocialButton :onClick="loginWithFacebook">
        <FacebookSVG class="w-6 h-6" />
      </SocialButton>
    </div>

    <!-- Footer -->
    <div class="text-xs opacity-80 text-center mt-1 px-4 leading-relaxed">
      Don't have an account? 
      <span class="underline" @click="goToRegister" >Sign Up</span>.
    </div>

  </ion-page>
</template>

<script setup lang="ts">
import { IonPage } from '@ionic/vue'
import { useRouter } from 'vue-router';
import SocialButton from '@/assets/components/SocialButton.vue';
import GoogleSVG from '@/assets/components/GoogleSVG.vue';
import FacebookSVG from '@/assets/components/FacebookSVG.vue';
import AppleSVG from '@/assets/components/AppleSVG.vue';
import InputField from '@/assets/components/InputField.vue';
import { ref } from 'vue';
const router = useRouter();

const email = ref('');
const password = ref('');



const handleLogin = async () => {
  console.log(email.value, password.value)
}

const loginWithGoogle = async () => {
  console.log('Connexion via Google…')
  // TODO: Implémenter Capacitor Google Auth
}

const loginWithApple = async () => {
  console.log('Connexion via Apple…')
  // TODO: Implémenter Capacitor Apple Sign-In
}

const loginWithFacebook = async () => {
  console.log('Connexion via Facebook…')
  // TODO: Implémenter Capacitor Facebook Sign-In
}

const goToRegister = () => {
  router.push('/register')
}
</script>

<style scoped>
ion-input::part(native) {
  font-size: 16px;
}

a {
  color: inherit;
}
</style>
