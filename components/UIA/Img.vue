<script setup>
import { computed, ref } from "@vue/composition-api"
import { CSSArtifactMiselanea, CSSBorderRadius, CSSColor, CSSMargin, CSSMaxHeight, CSSMaxWidth, CSSMinHeight, CSSObjectFit, CSSPadding, CSSWidth } from "~/composables/useCSS"

const props = defineProps({
  align: { type: String },
  bg: { type: String },
  brRadius: { type: [String, Number] },
  fit: { type: String },
  filterBrightness96: { type: Boolean, default: true },
  height: { type: [String, Number, Boolean] },
  margin: { type: [String, Number] },
  marginBottom: { type: [String, Number] },
  marginTop: { type: [String, Number] },
  maxHeight: { type: [String, Number] },
  minHeight: { type: [String, Number] },
  maxWidth: { type: [String, Number] },
  objectFit: { type: String },
  padding: { type: [String, Number] },
  paddingRight: { type: [String, Number] },
  sizes: { type: String },
  src: { type: String },
  widthPercent: { type: [String, Number] },
  width: { type: [String, Number] }
})

const isError = ref(false)

const getCSSAImg = computed(() => {
  return [
    CSSArtifactMiselanea[`${props.align}_with_margins`],
    CSSArtifactMiselanea.user_select_none,
    CSSArtifactMiselanea[props.filterBrightness96 ? 'filter_brightness_96' : null],
    CSSColor[`bg_${props.bg}`],
    CSSBorderRadius[`_${props.brRadius}`],
    CSSMargin[`_${props.margin}`],
    CSSMargin[`bottom_${props.marginBottom}`],
    CSSMargin[`top_${props.marginTop}`],
    CSSMaxHeight[`_${props.maxHeight}`],
    CSSMaxWidth[`_${props.maxWidth}`],
    CSSMinHeight[`_${props.minHeight}`],
    CSSObjectFit[`${props.objectFit}`],
    CSSPadding[`_${props.padding}`],
    CSSPadding[`right_${props.paddingRight}`],
    CSSWidth[`_${props.widthPercent}_percent`]
  ].filter($ => $)
})

// xs: 320,
// sm: 640,
// md: 768,
// lg: 1024,
// xl: 1280,
// xxl: 1536,
// '2xl': 1536
</script>

<template>
<div :class="$style.css_a_img">
  <nuxt-img
    @error="isError = true"
    :class="[getCSSAImg]"
    :fit="props.fit"
    :height="props.height || null"
    :sizes="props.sizes"
    :src="isError ? 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0OHY0OEgwVjB6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=' : props.src"
    :style="{ display: props.align ? 'block' : 'inline-block'}"
    :width="props.width"
    />
    <slot/>
</div>
</template>

<style module>
.css_a_img {
  display: block;
  font-size: 0;
  position: relative;
}
</style>
