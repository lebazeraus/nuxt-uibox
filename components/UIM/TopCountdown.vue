<script setup>
  import { onMounted, reactive } from "@nuxtjs/composition-api"
  import { CSSAlignItems, CSSArtifactMiselanea, CSSGap } from "~/composables/useCSS"
  const counter = reactive({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    others: {}
  })

  onMounted(() => {
    const deadline = new Date("2022-03-20 12:00:00").getTime()
    const id  = setInterval(() => {
      let now = new Date().getTime()
      let seconds = deadline - now

      counter.days = String(Math.floor(seconds / (1000 * 60 * 60 * 24))).padStart(2, 0)
      counter.hours = String(Math.floor((seconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, 0)
      counter.minutes = String(Math.floor((seconds % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, 0)
      counter.seconds = String(Math.floor((seconds % (1000 * 60)) / 1000)).padStart(2, 0)
      if (seconds < 0) {
        clearInterval(id)
        counter.days = '00'
        counter.hours = '00'
        counter.minutes = '00'
        counter.seconds = '00'
      }
    }, 1e3)
  })
</script>

<template>
<div :class="$style.css_m_top_countdown">
  <div :class="[CSSArtifactMiselanea.flex, CSSGap._4]">
    <UIAP size="18" color="secondary">{{ counter.days }} <UIALabel size="10">Días</UIALabel></UIAP>
    <UIAP size="18" color="secondary">: {{ counter.hours }} <UIALabel size="10"> Horas</UIALabel></UIAP>
    <UIAP size="18" color="secondary">: {{ counter.minutes }} <UIALabel size="10">  Mins.</UIALabel></UIAP>
    <UIAP size="18" color="secondary">: {{ counter.seconds }} <UIALabel size="10">  Segs.</UIALabel></UIAP>
  </div>
  <UIAP> Promoción del 20% desc</UIAP>
</div>
</template>

<style module>
.css_m_top_countdown {
  align-items: center;
  gap: 24px;
  background-color: rgb(var(--primary-color));
  padding: 8px 16px;
  display: flex;
  flex-flow: wrap;
  justify-content: center
}

@media screen and (min-width: 768px) {
  .css_m_top_countdown {
    justify-content: initial
  }  
}
</style>
