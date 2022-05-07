<script setup>
// M
const props = defineProps({
  icon: { type: Object },
  label: { type: Object },
  input: { type: Object },
  model: { type: Object }
})
</script>

<template>
  <div>
    <UIALabel v-bind="props.label" margin-bottom="4"/>
    <div style="position: relative">
      <UIAIcon v-if="props.icon" v-bind="props.icon" style="bottom: 12px; left: 12px; position: absolute;" size="18"/>
      <UIAInput v-bind="props.input" v-model="props.model.value" :padding-left="props.icon ? 40 : 16"/>
    </div>
  </div>
</template>
