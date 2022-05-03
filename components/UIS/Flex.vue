<template>
  <div :class="$style.css_s_flex">
    <slot/>
  </div>
</template>

<style module>
.css_s_flex {
  align-content: flex-start;
  align-items: center;
  display: flex;
  flex-flow: wrap;
}
</style>
