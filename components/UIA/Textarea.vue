<template>
  <textarea :class="$style.css_a_textarea"/>
</template>

<style module>
.css_a_textarea {
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  font-size: 14px;
  min-height: 80px;
  outline: none;
  padding: 12px 16px;
  resize: vertical;
  transition: border .3s, box-shadow .3s ease-in;
  width: 100%;
} .css_a_textarea:focus {
  cursor: text;
}
</style>
