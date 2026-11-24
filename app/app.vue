<script setup lang="ts"></script>

<template>
    <NuxtPage>
        
    </NuxtPage>
</template>

<style>
html,
body,
#app {
	overflow: hidden;
}
</style>

<style scoped>
/* c5t_01 */
#app-box {
	width: 100vw;
	height: 100vh;
	height: 100dvh;
	overflow: hidden;
}

.testBox {
	width: 100%;
	height: 350px;
}

/* c5t_02 */
/* #app-box.appBox_mobileOnly {
    width: min(100vw, 820px);
    margin: auto;
} */
</style>

<!-- 

c5t_01
    **toughtProcess
    Although vuejs provides a #app container,
    we add #app-box to act as the global/parent container
    so we can easily access it in this file.  #app is only defined in index.html
    and this file is not a vuejs file and it's not meant to be coded in.


c5t_02
    **usageSpecs
    :::
    Use this for apps that target mobile devices.
    this will show as a tall rectangle on desktop.  When using this
    design, it is recommended to set a bg color on the html element.
    :::
-->
