<script setup lang="ts">
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/vue'
const { availableLocales, locale } = useI18n()
const locales = availableLocales
isDark.value = false
locale.value = locales[locales.indexOf('es')]
</script>

<template>
  <IonApp>
    <IonSplitPane content-id="main-content">
      <IonRouterOutlet id="main-content" />
    </IonSplitPane>
  </IonApp>
</template>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>
