<script setup>
const props = defineProps({
  image: { type: String },
  curtainColor: { type: String },
  size: { type: String, default: 'auto' },
})
</script>

<template>
  <div :class="$style.css_s_background_image" :style="`background-image: url(${props.image}); background-size: ${props.size};`">
    <slot/>
  </div>
</template>

<style module>
.css_s_background_image {
  background-position-x: left;
  background-position-y: top;
  background-repeat: no-repeat;
  position: relative;
} .css_s_background_image:before {
  background-color: rgba(var(--secondary-color), 88%);
  bottom: 0;
  content: '';
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
