/*
**                                               _       _
**  _ __   __ _ _ __   ___ _ __      _ __   __ _(_)_ __ | |_
** | '_ \ / _` | '_ \ / _ \ '__|____| '_ \ / _` | | '_ \| __|
** | |_) | (_| | |_) |  __/ | |_____| |_) | (_| | | | | | |_
** | .__/ \__,_| .__/ \___|_|       | .__/ \__,_|_|_| |_|\__|
** |_|         |_|                  |_|
**
*/
<script setup lang="ts">
import { ref } from 'vue';
import PaperPaint from './widget/paper-paint.vue';
</script>

<template>
  <header>
    <h1>Paper Paint</h1>
  </header>
  <main style="width:100%;max-width: unset;">
    <PaperPaint />
  </main>
</template>

<style scoped>
  header {
    line-height: 1.5;
  }
  main {
    max-width: 600px;
    margin: 0 auto;
  }
</style>