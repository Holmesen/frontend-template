<!--  -->
<template>
  <button>
    <span class="button_top"> Button </span>
  </button>
</template>

<script lang="ts" setup></script>

<style scoped lang="less">
/* Variables */
@button_radius: 0.75em;
@button_color: #e8e8e8;
@button_outline_color: #000;

button {
  font-size: 17px;
  font-weight: bold;
  background: var(@button_outline_color);
  border: none;
  border-radius: var(@button_radius);
}

.button_top {
  box-sizing: border-box;
  display: block;
  padding: 0.75em 1.5em;
  color: var(@button_outline_color);
  background: var(@button_color);
  border: 2px solid var(@button_outline_color);
  border-radius: var(@button_radius);
  transition: transform 0.1s ease;
  transform: translateY(-0.2em);
}

button:hover .button_top {
  /* Pull the button upwards when hovered */
  transform: translateY(-0.33em);
}

button:active .button_top {
  /* Push the button downwards when pressed */
  transform: translateY(0);
}
</style>
