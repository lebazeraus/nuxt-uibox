<script setup>
// S
import { computed } from "@vue/composition-api"
import { CSSMaxHeight, CSSMinHeight } from "~/composables/useCSS"

const props = defineProps({
  image: { type: String },
  curtainColor: { type: String },
  maxHeight: { type: [String, Number] },
  minHeight: { type: [String, Number] },
  size: { type: String, default: 'auto' },
  y: { type: String, default: 'top' },
})

const getCSSSBackgroundImage = computed(() => {
  return [
    CSSMaxHeight[`_${props.maxHeight}`],
    CSSMinHeight[`_${props.minHeight}`]
  ].filter($ => $)
})
</script>

<template>
  <div :class="[$style.css_s_background_image, {[$style['css_s_background_image--curtain']]: props.curtainColor}, getCSSSBackgroundImage]"
    :style="`background-image: url(${props.image}); background-position-y: ${props.y}; background-size: ${props.size};`">
    <slot/>
  </div>
</template>

<style module>
.css_s_background_image {
  background-position-x: center;
  background-repeat: no-repeat;
  position: relative;
} .css_s_background_image--curtain:before {
  background-color: rgba(var(--secondary-color), 88%);
  bottom: 0;
  content: '';
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
