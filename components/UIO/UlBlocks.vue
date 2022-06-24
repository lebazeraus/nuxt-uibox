<script setup>
// O
import { computed } from "@vue/composition-api"
import { CSSArtifactMiselanea, CSSBorderRadius, CSSColor, CSSGridTemplateColumns, CSSPadding } from "~/composables/useCSS"

const props = defineProps({
  bg: { type: String, default: 'white' },
  brColor: { type: String, default: 'graylight' },
  byColumns: { type: Boolean },
  floating: { type: Boolean },
  isHiden: { type: Boolean },
  items: { type: Array },
})

const emit = defineEmits()

const getCSSOUlBlocks = computed(() => {
  return [
    CSSArtifactMiselanea.grid,
    (props.byColumns && props.items.length > 1) ? CSSGridTemplateColumns.max_auto : null,
    CSSBorderRadius._4,
    CSSColor[`bg_${props.bg}`],
    CSSColor[`br_${props.brColor}`],
  ].filter($ => $)
})

function select($) {
  emit('select', $)
}
</script>

<template>
<ul :class="[$style.css_o_ul, { [$style['css_o_ul--floating']]: props.floating, [$style['css_o_ul--is-hiden']]: props.isHiden }, getCSSOUlBlocks]" tabindex="0">
  <div v-for="($, i) in props.items" :key="i">
    <UIALabel v-if="$.text" line-clamp="1" margin-bottom="8" margin-left="16" margin-top="8">{{ $.text }}</UIALabel>
    <div v-for="($$, ii) in $.items" @click="select($$)" :key="ii">
      <UIALi v-bind="$$">
        <br><small v-if="$$.label">{{ $$.label }}</small>
      </UIALi>
    </div>
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
  width: max-content;
  z-index: 4;
} .css_o_ul--is-hiden {
  /* floating */
  margin-top: -8px;
  /* --- */
  opacity: 0;
  pointer-events: none;
}

.css_inputFilter {
  border: 1px solid lightgray;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  padding: 8px 16px;
  width: 100%;
}

@media screen and (max-width: 1152px) {
  .css_o_ul {
    grid-template-columns: 1fr !important;
  }
}
</style>
