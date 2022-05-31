<script setup>
// M
import { useStore } from '@nuxtjs/composition-api'
import { computed, reactive } from '@vue/composition-api'

const Store = useStore()

const { Status } = Store.state

Store.commit('Status/login', Status.IDLE)

const props = defineProps({
  user: { type: Object },
  pass: { type: Object },
  button: { type: Object }
})

const fields = reactive({
  user: { value: '3152740201' },
  pass: { value: '' }
})

const disabledButton = computed(() => {
  return [
    props.pass.input.validate(fields.pass.value),
    props.user.input.validate(fields.user.value)
  ].indexOf(false) >= 0
})

</script>

<template>
<UISPadding>
  <UISGrid gap="24">
    <UIMField v-bind="props.user" :model="fields.user"/>
    <UIMField v-bind="props.pass" :model="fields.pass"/>
    <UIAMLoading v-if="Status.Login === 'SENDING'"/>
    <UIAButton
      v-else
      @click="$emit('signIn', fields)"
      :disabled="disabledButton"
      v-bind="props.button"
    />
  </UISGrid>
</UISPadding>
</template>
