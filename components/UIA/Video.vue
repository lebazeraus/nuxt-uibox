<script setup>
// A
import { CSSBorderRadius } from "~/composables/useCSS"

const props = defineProps({
  src: { type: String },
  title: { type: String }
})
</script>

<template>
  <div :class="[$style.css_a_video_yt, CSSBorderRadius._8]">
    <iframe
      :class="$style.css_a_video_yt_iframe"
      :src="props.src"
      :title="props.title"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<style module>
.css_a_video_yt {
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 */
  position: relative;
  width: 100%;
}

.css_a_video_yt_iframe {
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}
</style>
