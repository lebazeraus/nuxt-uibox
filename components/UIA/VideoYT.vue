<script setup>
import { CSSBorderRadius } from "~/composables/useCSS"

const props = defineProps({
  autoplay: { type: Boolean },
  id: { type: String },
  title: { type: String }
})
</script>

<template>
  <div :class="$style.css_a_video_yt">
    <iframe
      :class="$style.css_a_video_yt_iframe"
      :src="`https://www.youtube.com/embed/${props.id}?autoplay=${props.autoplay ? 1 : 0}`"
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
