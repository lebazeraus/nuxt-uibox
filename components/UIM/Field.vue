<script setup>
// M
import { CSSArtifactMiselanea } from "~/composables/useCSS"

const props = defineProps({
  icon: { type: Object },
  label: { type: [Object, Boolean] },
  input: { type: Object },
  model: { type: Object }
})
</script>

<template>
  <div>
    <UIALabel v-if="props.label !== false" v-bind="props.label" margin-bottom="4"/>
    <div :class="[CSSArtifactMiselanea.position_relative]">
      <UIAIcon v-if="props.icon" v-bind="props.icon" size="18" style="bottom: 12px; left: 12px; position: absolute;"/>
      <UIAInput @isValid="props.model.isValid = $event" v-bind="props.input" v-model="props.model.value" :padding-left="props.icon ? 40 : 16"/>
      <UIAIcon v-if="props.model.isValid" color="green" name="check-circle" size="12" style="right: 4px; top: 4px; position: absolute;"/>
    </div>
  </div>
</template>
