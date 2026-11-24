<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <DefaultTheme.Layout>
    <template #home-features-before>
      <div class="proposal-intro" v-if="frontmatter.proposalIntro">
        {{ frontmatter.proposalIntro }}
      </div>
    </template>

    <template #home-features-after>
      <div class="proposal-action">
        <a href="/presentation">Lire la proposition</a>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>
