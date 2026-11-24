<template>
    <div class="container">
        <h1>Bistrot d'El Dorado</h1>
        <svg viewBox="0 0 40 40" overflow="visible" width="200" height="200">
            <path ref="shapeRef" :d="shapes.n" fill="#ff6b6b" />
        </svg>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import gsap from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

gsap.registerPlugin(MorphSVGPlugin)

const shapeRef = ref(null)

const shapes = reactive({
    n: "M 4.98,0.06 L 10.68,0.06 L 30.62,33.2 L 30.74,33.14 L 30.15,-0.03 L 35.02,-0.03 L 35.02,16.68 L 35.02,40.03 L 29.79,39.97 L 9.49,7.38 L 9.55,12.55 L 9.85,39.97 L 4.98,39.97 Z",
    k: "M 7.54,0 L 12.7,0 L 12.7,19.29 L 12.88,19.29 L 28.25,0 L 34.66,0 L 20.18,16.97 L 35.79,40 L 29.68,40 L 16.5,20.36 L 12.7,24.75 L 12.71,40.03 L 7.54,40 Z",
    o: "M37.32,19.6c0,13.33-8.1,20.4-17.99,20.4C9.1,40,1.91,32.07,1.91,20.35C1.91,8.04,9.56,0,19.9,0 C30.48,0,37.32,8.1,37.32,19.6z M7.26,20.23c0,8.28,4.48,15.69,12.36,15.69c7.93,0,12.41-7.3,12.41-16.09 c0-7.7-4.02-15.75-12.35-15.75C11.4,4.08,7.26,11.72,7.26,20.23z"
})

onMounted(() => {
    if (!shapeRef.value) return
    
    const tl = gsap.timeline({ repeat: -1 })
    
    tl.to(shapeRef.value, {
        morphSVG: shapes.o,
        duration: 2
    })
    .to(shapeRef.value, {
        morphSVG: shapes.n,
        duration: 2
    })
})
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    min-height: 100vh;
}

h1 {
    color: white;
}

svg {
    filter: drop-shadow(0 0 10px rgba(255, 107, 107, 0.5));
}
</style>