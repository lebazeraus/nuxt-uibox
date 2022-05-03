<script setup>
import { ref } from "@vue/composition-api"

const isOpen = ref(false)
</script>

<template>
<div :class="$style.css_root">
  <pre v-if="isOpen" :class="$style.css_pre">
    <UIALabel color="gray">@Pídeme</UIALabel><slot/>
  </pre>
  <div :class="$style.css_icon_button">
    <UIAIcon v-if="isOpen" @click="isOpen = false" bg="green" br-radius="50" color="white" name="times" padding="8" size="40"/>
    <UIAIcon v-else @click="isOpen = true" bg="black" br-radius="50" color="white" name="brackets-curly" padding="8" size="40"/>
  </div>
</div>
</template>

<style module>
.css_pre, .css_icon_button {
  bottom: 24px;
  left: 24px;
  position: fixed;
  z-index: 100;
}

.css_pre {
  background: rgba(var(--black), 96%);
  border-radius: 4px;
  color: rgb(var(--white));
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  left: 24px;
  overflow: auto;
  padding: 24px;
  top: 24px;
  white-space: break-spaces;
}

.css_icon_button {
  cursor: pointer;
}
</style>
