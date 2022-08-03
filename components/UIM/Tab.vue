<script setup>
import { useRoute } from "@nuxtjs/composition-api"
import { computed } from "@nuxtjs/composition-api"
import { CSSArtifactDisabled, CSSArtifactMiselanea, CSSBorderRadius, CSSColor } from "~/composables/useCSS"

const props = defineProps({
  active: { type: Boolean },
  bg: { type: String },
  bgActive: { type: String },
  bgHover: { type: String },
  bgHoverActive: { type: String },
  brColor: { type: String },
  bsHover: { type: String },
  bsFocus: { type: String },
  center: { type: Boolean },
  color: { type: String },
  colorActive: { type: String },
  colorHover: { type: String },
  disabled: { type: Boolean },
  exactActive: { type: Boolean },
  icon: { type: Object },
  iconRight: { type: Object },
  isBlock: { type: Boolean },
  to: { type: String }
})

const $route = useRoute()
const isActive = computed(() => {
  if (props.active) {
    return true
  } else {
    const { fullPath, path } = $route.value
    return props.exactActive ? (fullPath === props.to) : (path.indexOf(props.to) >= 0)
  }
})

const getCSSMTab = computed(() => {
  if (props.disabled) {
    return [CSSArtifactDisabled.tab]
  } else {
    return [
      props.center ? CSSArtifactMiselanea.center_with_margins : null,
      CSSArtifactMiselanea[props.isBlock ? 'block' : 'inline_block'],
      CSSBorderRadius._8,
      CSSColor[`bg_${isActive.value ? props.bgActive : props.bg}`],
      CSSColor[`bg_hover_${isActive.value ? props.bgHoverActive : props.bgHover}`],
      CSSColor[`br_${props.brColor}`],
      CSSColor[`bs_hover_${props.bsHover}`],
      CSSColor[`bs_focus_${props.bsFocus}`]
    ].filter($ => $)
  }
})
</script>

<template>
<div @click="props.disabled || props.to ? () => {} : $emit('click')" :class="[$style.css_m_tab, getCSSMTab]">
  <component :is="!props.disabled && props.to ? 'nuxt-link' : 'div'" :to="props.to">
    <UISGrid
      align-items="center"
      :columns="props.icon ? 'max_1fr' : props.iconRight ? '_1fr_max' : null"
      gap="8"
      padding-bottom="8"
      :padding-left="props.icon ? 8 : 16"
      padding-right="16"
      padding-top="8">
      <UIAIcon
        v-if="props.icon"
        :color="isActive ? props.icon.colorActive : props.icon.color"
        :name="props.icon.name"
        :size="props.icon.size"/>
      <UIALabel
        :color="isActive ? props.colorActive : props.color"
        :color-hover="props.colorHover"><slot/></UIALabel>
      <UIAIcon
        v-if="props.iconRight"
        :color="isActive ? props.iconRight.colorActive : props.iconRight.color"
        :name="props.iconRight.name"
        :size="props.iconRight.size"/>
    </UISGrid>
  </component>
</div>
</template>

<style module>
.css_m_tab {
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
}
</style>
