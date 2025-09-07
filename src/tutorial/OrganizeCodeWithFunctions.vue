<template>
    <div ref="canvas"></div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import p5 from "p5";

const canvas = ref(null);

onMounted(() => {
  new p5((s) => {
    s.setup = () => s.createCanvas(600, 400);
    s.draw = () => {
        s.background(135, 206, 235);
    }
  }, canvas.value);
});
</script>