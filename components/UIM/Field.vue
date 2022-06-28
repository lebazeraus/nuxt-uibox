<script setup>
// M
import { CSSAlignItems, CSSArtifactMiselanea, CSSGap, CSSGridTemplateColumns } from "~/composables/useCSS"

const props = defineProps({
  icon: { type: Object },
  label: { type: [Object, Boolean] },
  input: { type: Object },
  model: { type: Object }
})
</script>

<template>
  <div>
    <div :class="[CSSAlignItems.center, CSSArtifactMiselanea.grid, CSSGap._8, CSSGridTemplateColumns._1fr_max]">
      <UIALabel v-if="props.label !== false" margin-bottom="4">{{ props.label.text }}</UIALabel>
      <UIAIcon v-if="props.model.isValid" color="green" name="check-circle" size="12"/>
    </div>
    <div style="position: relative">
      <UIAIcon v-if="props.icon" v-bind="props.icon" style="bottom: 12px; left: 12px; position: absolute;" size="18"/>
      <UIAInput @isValid="props.model.isValid = $event" v-bind="props.input" v-model="props.model.value" :padding-left="props.icon ? 40 : 16"/>
    </div>
  </div>
</template>
