<script setup>
import { CSSAlignItems, CSSGap, CSSGridTemplateColumns, CSSMaxWidth, CSSPadding } from "~/composables/useCSS"
// O
const props = defineProps({
  background: { type: Object },
  logo: { type: Object },
  copy: { type: Object },
  button: { type: Object },
  videoYT: { type: Object }
})

function slide() {
  const { scrollHeight, offsetTop } = document.getElementById('header')
  window.scrollTo(0, scrollHeight + offsetTop)
}
</script>

<template>
  <UISBackgroundImage v-bind="props.background">
    <div :class="CSSPadding._24">
      <div :class="CSSMaxWidth._1152">
        <div :class="[CSSAlignItems.center, CSSGridTemplateColumns.auto_fill_360, CSSGap._48]">
          <UIMLogoCopyButton :logo="props.logo" :copy="props.copy" :button="props.button"/>
          <div>
            <UIMVideoCoverYT v-bind="props.videoYT"/>
          </div>
        </div>
        <div :class="CSSPadding._24">
          <UIALabel @click.native="slide()" align="center" color="white">Deslize</UIALabel>
          <UIAIcon is-center color="white" name="angle-down" size="32" style="cursor:pointer;"/>
        </div>
      </div>
    </div>
  </UISBackgroundImage>
</template>
