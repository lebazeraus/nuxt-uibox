<script setup>
import { computed, onMounted, ref } from "@vue/composition-api"
import { CSSTextAlign, CSSColor } from "~/composables/useCSS"
import { useElementBounding } from '@vueuse/core'

const props = defineProps({
  bg: { type: String, default: 'white' },
  bgRoot: { type: String, default: 'white' },
  bgActive: { type: String, default: 'accent' },
  bgHover: { type: String, default: 'graylight' },
  bgHoverActive: { type: String, default: 'primary' },
  color: { type: String, default: 'gray' },
  colorActive: { type: String, default: 'black' },
  indexActive: { type: Number },
  items: { type: Array, default: () => [] },
  justify: { type: String },
  propForText: { type: String, default: 'text' },
  sticky: { type: Boolean }
})

const elTabs = ref()
const { top } = props.sticky ? useElementBounding(elTabs) : { top: -10000000000 }
const isSticky = ref(false)

const getCSSOTabs = computed(() => {
  return [
    CSSColor[`bg_${props.bgRoot}`],
    CSSTextAlign[props.justify]
  ].filter($ => $)
})

onMounted(() => {
  setTimeout(() => {
    isSticky.value = props.sticky
  }, 1e3)
})

</script>

<template>
<div :class="{[$style['css_shadow']]: isSticky && top <= 0 }" ref="elTabs">
  <div :class="[$style.css_tabs, getCSSOTabs]">
    <UIMTab
      v-for="($, i) in props.items"
      @click="$emit('click', i)"
      :active="props.indexActive === i"
      :bg="props.bg"
      :bg-active="props.bgActive"
      :bg-hover="props.bgHover"
      :bg-hover-active="props.bgHoverActive"
      :class="$style.css_tab"
      :color="props.color"
      :color-active="props.colorActive"
      :icon="$.icon ? { color: props.color, colorActive: props.bgHoverActive, name: $.icon.name, size: 18 } : null"
      :key="i"
      :to="$.to"
      >{{ $[props.propForText] }}</UIMTab>
  </div>
</div>
</template>

<style module>
.css_shadow {
  position: sticky;
  z-index: 2
}

.css_tabs {
  font-size: 0;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 16px 0;
  scroll-behavior: smooth;
  white-space: nowrap;
} .css_tabs::-webkit-scrollbar {
  display: none;
}

.css_tab {
  margin-left: 16px;
}
.css_tab:last-child {
  margin-right: 16px;
}

@media screen and (min-width: 960px) {
  .css_shadow {
    box-shadow: 0 2px 8px -4px rgba(var(--black), 16%);
    top: 0;
  }
}
</style>
