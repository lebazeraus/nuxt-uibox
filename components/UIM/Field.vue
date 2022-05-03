<script setup>
// M
const props = defineProps({
  label: { type: Object },
  input: { type: Object },
  model: { type: Object }
})
</script>

<template>
  <div>
    <UIALabel v-bind="props.label" margin-bottom="4"/>
    <UIAInput v-bind="props.input" v-model="props.model.value"/>
  </div>
</template>
