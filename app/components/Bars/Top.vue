<script setup>
const props = defineProps({
    logoIsHomepageLink: {
        type: Boolean,
        default: true
    },
    logoCustomLink: {
        type: String,
        default: undefined
    },
    callback: {
        type: Function,
        default: undefined
    }
})
</script>

<template>
    <div 
        class="
            topBar
            w100
        "
    >
        <div class="logoBox">
            <NuxtLink
                :to="logoCustomLink || (logoIsHomepageLink ? '/' : undefined)"
                @click="callback?.()"
            >
                <slot name="logo">

                </slot>
            </NuxtLink>
        </div>
    </div>    
</template>