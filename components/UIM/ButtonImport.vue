<template>
<UIAButton bg="graylight" br-color="graylight" br-hover="gray" color="black" bs-hover="gray" is-small>Seleccionar archivo <slot/><input accept="image/png, image/jpeg, image/jpg" :class="$style.css_inputTypeFile" type="file" @input="$emit('input', $event)"></UIAButton>
</template>

<style module>
.css_inputTypeFile {
  bottom: 0;
  cursor: pointer;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}
</style>
