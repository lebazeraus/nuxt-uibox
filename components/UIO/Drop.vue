<script setup>
// M
import { useRouter } from "@nuxtjs/composition-api"
import { computed, ref, watch } from "@nuxtjs/composition-api"
import { useFocusWithin } from '@vueuse/core'
import { CSSArtifactDisabled, CSSBorderRadius, CSSColor } from "~/composables/useCSS"

const props = defineProps({
  bg: { type: String, default: 'white' },
  bgRoot: { type: String, default: 'white' },
  bgActive: { type: String, default: 'accent' },
  bgHover: { type: String, default: 'gray' },
  bgHoverActive: { type: String, default: 'primary' },
  brColor: { type: String, default: 'white' },
  color: { type: String, default: 'gray' },
  colorActive: { type: String, default: 'black' },
  indexActive: { type: Number },
  items: { type: Array, default: () => [] },
  justify: { type: String },
  paddingTop: { type: [String, Number], default: 16 },
  paddingBottom: { type: [String, Number], default: 16 },
  sticky: { type: Boolean },
  text: { type: String },
  to: { type: String }
})

const emit = defineEmits()

const target = ref()
const Router = useRouter()
const { focused } = useFocusWithin(target)
const isFocus = ref(false)

watch(focused, focused => {
  if (props.to) {
    Router.push(props.to)
    emit('close')
  } else {
    isFocus.value = focused
  }
})

function select($) {
  isFocus.value = false
  emit('close')
  if ($.href) {
    window.open($.href, '_blank')
  }
}

function over(focused) {
  if (!props.to) {
    isFocus.value = focused
    if (focused) {
      target.value?.children?.[1]?.focus()
    }
  }
}
</script>

<template>
  <div @mouseover="over(true)" :class="[$style.css_drop]" ref="target">
    <UIMTab
      :bg="props.bg"
      :bg-active="props.bgActive"
      :bg-hover="props.bgHover"
      :bg-hover-active="props.bgHoverActive"
      :br-color="props.brColor"
      :color="props.color"
      :color-active="props.colorActive"
      :icon-right="props.items.length ? { color: props.color, colorActive: props.colorActive, name: 'angle-down', size: 18 } : null"
      is-block
      tabindex="0"
      :to="props.to"
    >{{ props.text }}</UIMTab>
    <UIOUlBlocks @select="select($event)" by-columns floating :is-hiden="!isFocus" :items="props.items"/>
  </div>
</template>

<style module>
.css_drop, .css_field {
  position: relative;
}
</style>
