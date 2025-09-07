<template>
  <div ref="canvas"></div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import p5 from "p5";

const canvas = ref(null);

// Part 1: Interactive Sun
// onMounted(() => {
//   //custom variables for y-coordinate of sun & horizon
//   let sunHeight;
//   let horizon = 200;

//   new p5((s) => {
//     s.setup = () => s.createCanvas(400, 400);
//     s.draw = () => {

//       // update to y-coordinate of mouse pointer
//       sunHeight = s.mouseY;s

//       if(sunHeight < horizon){
//         s.background("lightblue");
//       } else {
//         s.background(0);
//       }

//       //sun
//       s.fill("yellow");
//       s.circle(200, sunHeight, 160);

//       // horizon
//       s.stroke("green");
//       s.fill("green");
//       s.rect(0, horizon, 400, 400);

//     }
//   }, canvas.value);
// });

onMounted(() => {
  new p5((s) => {
    //variable for initial sun position
    //point below horizon
    let sunHeight = 600;

    //variables for color change
    let redVal = 0;
    let greenVal = 0;
    s.setup = () => {
      s.createCanvas(600, 400)
    };
    s.draw = () => {
      s.background(redVal, greenVal, 0);

      //sun
      s.fill(255, 135, 5, 60);
      s.circle(300, sunHeight, 180);
      s.fill(255, 100, 0, 100);
      s.circle(300, sunHeight, 140);

      //mountains
      s.fill(110, 50, 18);
      s.triangle(200, 400, 520, 253, 800, 400);
      s.fill(110, 95, 20);
      s.triangle(200, 400, 520, 253, 350, 400);

      s.fill(150, 75, 0);
      s.triangle(-100, 400, 150, 200, 400, 400);
      s.fill(100, 50, 12);
      s.triangle(-100, 400, 150, 200, 0, 400);

      s.fill(150, 100, 0);
      s.triangle(200, 400, 450, 250, 800, 400);
      s.fill(120, 80, 50);
      s.triangle(200, 400, 450, 250, 300, 400);

      // Make to sun rise until 130 below top
      if (sunHeight > 130) {
        sunHeight -= 2;

        // Gradually shift to yellow (normal daylight)
        if (sunHeight > 120) {
          redVal += 4;
          greenVal += 1;
        }
      }

      if (s.mouseIsPressed == true && sunHeight === 130) {
        s.background(0);
      }
    }
  }, canvas.value);
});
</script>