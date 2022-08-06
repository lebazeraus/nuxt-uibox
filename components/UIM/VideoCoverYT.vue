<script setup>
import { ref } from "@nuxtjs/composition-api"
import { CSSBorderRadius, CSSColor, CSSMaxWidth, CSSPadding } from "~/composables/useCSS"

const props = defineProps({
  autoplay: { type: Boolean },
  id: { type: String },
  srcCover: { type: String }
})

const videoIsVisible = ref(false)
</script>

<template>
  <div :class="CSSMaxWidth._1152">
    <UIAImg v-if="!videoIsVisible" br-radius="4" :src="props.srcCover" width-percent="100"/>
    <UIAIcon
      v-if="!videoIsVisible"
      @click.native="videoIsVisible = true"
      bg="white"
      bs-hover="white"
      br-radius="50"
      :class="$style.css_m_video_cover_yt"
      color="primary"
      name="play"
      padding="16"
      size="64"
    />
    <UIAVideoYT v-else :autoplay="props.autoplay" :id="props.id"/>
  </div>
</template>

<style module>
.css_m_video_cover_yt {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
