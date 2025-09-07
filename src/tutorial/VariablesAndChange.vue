<template>
    <div ref="canvas"></div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import p5 from "p5";

const canvas = ref(null);

onMounted(() => {
  new p5((s) => {
    s.setup = () => s.createCanvas(400, 400);
    s.draw = () => {
        // Landscape
        // ------------------------------
        s.background('navy');

        //moon
        s.fill(255);
        s.stroke(0);
        s.circle(350, 50, 100);

        //overlapping navy circle for crescent moon
        s.stroke("navy");   
        s.fill("navy");
        s.circle(320,50,100);

        //big gray mountains
        s.stroke(0);
        s.fill(80);
        s.triangle(-40,300,75,100, 250,300);
        s.triangle(100,300,300,100, 500,300);

        //grass
        s.fill('rgb(50,76,50)');
        s.rect(0,300, 400, 100);

        //displays the x and y position of the mouse on the canvas
        s.fill(255)
        s.text(`mouseX: ${s.mouseX}, mouseY: ${s.mouseY}`, 20, 20);

        // Clouds
        // ------------------------------
        // frameCount saves number of times draw() runs
        // width stores the width of the defined canvas
        // % so that it resets once it has reached the end of the screen
        let cloudOneX = s.frameCount % s.width;
        
        s.fill(255);
        s.ellipse(cloudOneX, 50, 80, 40);
        s.ellipse(cloudOneX - 40, 100, 60, 20);
        s.ellipse(cloudOneX + 20, 150, 40, 10);

        // Growing Tree
        // -----------------------------
        //trunk
        s.fill("rgb(118,80,72)");
        s.rect(40, 270, 15, 50);
        //leaves
        s.fill("green");
        s.triangle(25, 270, 45, 240 - s.frameCount % 290, 70, 270);

        //trunk
        s.fill("rgb(118,80,72)");
        s.rect(340, 330, 15, 50);
        //leaves
        s.fill("green");
        s.triangle(325, 330, 345, 240 - s.frameCount % 290, 370, 330);

        // Shooting Stars
        // -----------------------------
        //set shooting star to random location
        let lineXone = Math.floor(Math.random() * s.width);
        let lineYone = Math.floor(Math.random() * (s.height / 2));


        //shooting star
        s.stroke("yellow");
        // If change + 30 to 0 they fall down straight
        // if change -30 ro 0 they fall horizontally
        s.line(lineXone, lineYone, lineXone + 30, lineYone - 30);
    }
  }, canvas.value);
});
</script>