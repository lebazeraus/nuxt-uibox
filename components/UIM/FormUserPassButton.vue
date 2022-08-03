<script setup>
import { useStore } from '@nuxtjs/composition-api'
import { computed, reactive } from '@nuxtjs/composition-api'
import { CSSArtifactMiselanea, CSSGap, CSSPadding } from "~/composables/useCSS"

const Store = useStore()

const { Status } = Store.state

Store.commit('Status/login', Status.IDLE)

const props = defineProps({
  user: { type: Object },
  pass: { type: Object },
  button: { type: Object }
})

const fields = reactive({
  user: { value: '' },
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
<form @submit.prevent="disabledButton ? () => {} : $emit('signIn', fields)" :class="[CSSPadding._24]">
  <div :class="[CSSArtifactMiselanea.grid, CSSGap._24]">
    <UIMField v-bind="props.user" :model="fields.user"/>
    <UIMField v-bind="props.pass" :model="fields.pass"/>
    <UIMLoading v-if="Status.login === 'SENDING'"/>
    <UIAButton
      v-else
      :disabled="disabledButton"
      type="submit"
      v-bind="props.button"
    />
  </div>
</form>
</template>
