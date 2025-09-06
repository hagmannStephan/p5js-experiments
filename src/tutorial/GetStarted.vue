<template>
  <div ref="canvas"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import p5 from "p5";

const canvas = ref(null);

onMounted(() => {
  new p5((s) => {
    // Setup runs once when it gets mounted
    // Here setup creates a canvas the size of 400x400px
    s.setup = () => s.createCanvas(600, 400);
    // Called directly after setup and executes 60 times per second until stopped
    // In here the background of the canvas gets set to light blue
    s.draw = () => {
        // Sky (Background)
        s.background(135, 206, 235);    // Light blue

        // Sun (Circle)
        s.fill("yellow");
        s.stroke("orange");
        s.strokeWeight(20);
        s.circle(550, 50, 100); // x, y, size, (0/0) is the top left corner

        // Grass (Rect)
        s.stroke("black");
        s.strokeWeight(1);
        s.fill("green");
        s.rect(0, 200, 600, 200) // x, y, width, height

        // Emojis (Text)
        s.textSize(75);
        s.text("🌷", 100, 250);
        s.text("🐝", s.mouseX, s.mouseY);   // Follow mouse
    }
  }, canvas.value);
});
</script>
