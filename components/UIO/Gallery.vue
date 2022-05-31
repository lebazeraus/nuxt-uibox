<script setup>
import 'viewerjs/dist/viewer.css'
import { CSSArtifactMiselanea, CSSAlignItems, CSSBorderRadius, CSSColor, CSSGap, CSSGridTemplateColumns, CSSMaxWidth, CSSPadding } from "~/composables/useCSS"

const props = defineProps({
  autoFill: { type: [String, Number], default: 320 },
  button: { type: Boolean, default: true },
  fullscreen: { type: Boolean },
  inline: { type: Boolean },
  items: { type: Array },
  keyboard: { type: Boolean, default: true },
  movable: { type: Boolean },
  navbar: { type: Boolean, default: true },
  propsName: { type: Array, default: () => (['cover', 'title'])},
  rotatable: { type: Boolean },
  scalable: { type: Boolean },
  title: { type: Boolean, default: true },
  toolbar: { type: Boolean },
  tooltip: { type: Boolean },
  transition: { type: Boolean, default: true },
  zoomable: { type: Boolean }
})
</script>

<template>
<div :class="[CSSArtifactMiselanea.grid, CSSGap._24, CSSGridTemplateColumns[`auto_fill_${props.autoFill}`]]" v-viewer="props">
  <div v-for="($, i) in props.items" :class="[CSSArtifactMiselanea.cursor_pointer]" :key="i">
    <img :alt="$[props.propsName[1]]" :class="[$style.css_img, CSSBorderRadius._8, CSSColor.bs_hover_secondary]" :data-source="$[props.propsName[0]]" :src="$[props.propsName[0]]">
    <UIALabel margin-top="8">{{ $[props.propsName[1]] }}</UIALabel>
  </div>
</div>
</template>

<style module>
.css_img {
  width: 100%;
  object-fit: cover;
  transition: box-shadow .3s;
  height: 192px;
}

div[class*="viewer-title"] {
  color: #fff !important;
  font-size: 16px !important;
}
</style>
