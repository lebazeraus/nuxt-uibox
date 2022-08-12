<script setup>
import { CSSAlignItems, CSSArtifactMiselanea, CSSGap, CSSGridTemplateColumns } from "~/composables/useCSS"

const props = defineProps({
  coverHeight: { type: [String, Number, Boolean], default: 144 },
  avatarUrl: { type: String },
  coverUrl: { type: [String, Array] },
  desc: { type: String },
  info: { type: Object },
  infoVisible: { type: Boolean },
  title: { type: String },
  to: { type: String }
})

function oneCoverUrl() {
  if (Array.isArray(props.coverUrl)) {
    return props.coverUrl?.[0]?.url || '/'
  } else {
    return props.coverUrl
  }
} 
</script>

<template>
<NuxtLink v-slot="{ navigate }" :class="[$style.css_card, props.to ? CSSArtifactMiselanea.cursor_pointer : null]" custom :to="props.to">
  <div @click="navigate" role="link">
    <UIAImg
      br-radius="8"
      :height="props.coverHeight"
      object-fit="cover"
      margin-bottom="16"
      :src="oneCoverUrl()"
      width-percent="100">
      <div :class="[$style.css_info, { [$style['css_info--visible']] : props.infoVisible }]">
        <UIAP color="white" font-weight="600" line-clamp="1" size="14">{{ props.info.title }}</UIAP>
        <UIAP color="white" size="12">{{ props.info.desc }}</UIAP>
      </div>
    </UIAImg>
    <div :class="[CSSAlignItems.center, CSSArtifactMiselanea.grid, CSSGap._8, CSSGridTemplateColumns[props.avatarUrl ? 'max_1fr' : null]]">
      <UIAImg v-if="props.avatarUrl" br-radius="50" height="32" :src="props.avatarUrl" width="32"/>
      <div>
        <UIAP line-clamp="1" size="14">{{ props.title }}</UIAP>
        <UIAP v-if="props.desc" color="gray" size="12">{{ props.desc }}</UIAP>
        <slot/>
      </div>
    </div>
  </div>
</NuxtLink>
</template>


<style module>
.css_card:hover .css_info {
  opacity: 1;
}

.css_info {
  background: rgba(var(--black), .72);
  background: -moz-linear-gradient(top, rgba(var(--black), 0) 0%, rgba(var(--black), .72) 100%);
  background: -webkit-linear-gradient(top, rgba(var(--black), 0) 0%, rgba(var(--black), .72) 100%);
  background: linear-gradient(to bottom, rgba(var(--black), 0) 0%, rgba(var(--black), .72) 100%);
  border-radius: 0 0 8px 8px;
  bottom: 0;
  left: 0;
  margin-bottom: 16px;
  opacity: 0;
  padding: 24px 16px 16px;
  position: absolute;
  right: 0;
  transition: opacity .3s;
}

.css_info--visible {
  opacity: 1;
}
</style>
