<script setup>
import { CSSAlignItems, CSSArtifactMiselanea, CSSGap, CSSGridTemplateColumns } from "~/composables/useCSS"

const props = defineProps({
  active: { type: Boolean },
  bgHover: { type: String, default: 'graylight' },
  color: { type: String, default: 'gray' },
  colorActive: { type: String, default: 'black' },
  colorHover: { type: String, default: 'black' },
  isRadio: { type: Boolean }
})
</script>

<template>
<div :class="[CSSAlignItems.center, CSSArtifactMiselanea.grid, CSSGap._8, CSSGridTemplateColumns.max_1fr]">
  <UIAIcon
    @click="$emit('click', !props.active)"
    :bg-hover="props.bgHover"
    :br-radius="props.isRadio ? 50 : 4"
    :class="[CSSArtifactMiselanea.cursor_pointer]"
    :color="props.active ? props.colorActive : props.color"
    :color-hover="props.colorHover"
    :name="props.isRadio ? props.active ? 'check-circle' : 'circle' : props.active ? 'check-square' : 'square-full'" />
  <UIALabel line-clamp="1"><slot/></UIALabel>
</div>
</template>