<script setup>
import { computed } from "@nuxtjs/composition-api"
import { CSSColor, CSSMaxWidth } from "~/composables/useCSS"

const props = defineProps({
  bg: { type: String },
  maxWidth: { type: [String, Number], default: 1152 }
})

const getCSSSContent = computed(() => {
  return [
    CSSColor[`bg_${props.bg}`],
    CSSMaxWidth[`_${props.maxWidth}`]
  ]
})
</script>

<template>
  <div :class="[$style.css_s_content, getCSSSContent]">
    <slot/>
  </div>
</template>

<style module>
.css_s_content {
  margin: 0 auto;
  position: relative;
}
</style>
