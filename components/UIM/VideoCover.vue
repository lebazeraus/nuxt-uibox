<script setup>
// M
import { ref } from "@vue/composition-api"
import { CSSArtifactMiselanea, CSSBorderRadius, CSSColor, CSSMaxWidth, CSSPadding } from "~/composables/useCSS"

const props = defineProps({
  src: { type: String },
  srcCover: { type: String },
  borderRadius: { type: Boolean, default: 8 }
})

const videoIsVisible = ref(false)
</script>

<template>
  <div :class="[CSSArtifactMiselanea.position_relative, CSSMaxWidth._1152]">
    <UIAImg v-if="!videoIsVisible" :br-radius="props.borderRadius" :src="props.srcCover" width-percent="100"/>
    <div v-if="props.src && !videoIsVisible" :class="$style.css_m_video_cover_yt">
      <UIAIcon
        @click.native="videoIsVisible = true"
        bg="white"
        bs-hover="white"
        br-radius="50"
        color="primary"
        name="play"
        padding="16"
        size="64"
      />
    </div>
    <UIAVideo v-else-if="props.src" :src="props.src"/>
  </div>
</template>

<style module>
.css_m_video_cover_yt {
  bottom: 0;
  height: 64px;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  width: 64px;
}
</style>
