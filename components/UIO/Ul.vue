<script setup>
// O
import { computed, ref } from "@vue/composition-api"
import { CSSBorderRadius, CSSColor, CSSMinWidth, CSSPadding } from "~/composables/useCSS"

const props = defineProps({
  bg: { type: String, default: 'white' },
  brColor: { type: String, default: 'graylight' },
  floating: { type: Boolean },
  isHiden: { type: Boolean },
  items: { type: Array },
  minWidth: { type: [String, Number] },
  isRight: { type: Boolean }
})

const emit = defineEmits()

const filter = ref('')

const getCSSOUl = computed(() => {
  return [
    CSSBorderRadius._4,
    CSSColor[`bg_${props.bg}`],
    CSSColor[`br_${props.brColor}`],
    CSSMinWidth[`_${props.minWidth}`]
  ].filter($ => $)
})

function select($) {
  emit('select', $)
  filter.value = ''
}
</script>

<template>
<ul :class="[$style.css_o_ul, { [$style['css_o_ul--floating']]: props.floating, [$style['css_o_ul--is-right']]: props.isRight, [$style['css_o_ul--is-hiden']]: props.isHiden }, getCSSOUl]" tabindex="0">
  <slot/>
  <div v-if="props.items.length > 16" :class="CSSPadding._8">
    <input v-model="filter" :class="$style.css_inputFilter" placeholder="Filter"/>
  </div>
  <div v-for="($, i) in props.items" :key="i">
    <UIALi @click="select($)" v-show="!filter || $.text.toLowerCase().indexOf(filter.toLowerCase()) >= 0" v-bind="$">
      <br><small v-if="$.label">{{ $.label }}</small>
    </UIALi>
  </div>
</ul>
</template>

<style module>
.css_o_ul {
  border-style: solid;
  border-width: 1px;
  margin: 0;
  max-height: 240px;
  outline: none;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 8px 0;
  transition: margin .3s, opacity .3s;
}
.css_o_ul--floating {
  margin-top: 8px;
  box-shadow: 0 4px 8px -2px rgba(var(--black), 8%);
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 4;
} .css_o_ul--is-hiden {
  /* floating */
  margin-top: -8px;
  /* --- */
  opacity: 0;
  pointer-events: none;
} .css_o_ul--is-right {
  right: 0;
}

.css_inputFilter {
  border: 1px solid rgb(var(--nuxt-uibox-color-graylight));
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  padding: 8px 16px;
  width: 100%;
}
</style>
