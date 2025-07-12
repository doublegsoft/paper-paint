/*
**                                               _       _
**  _ __   __ _ _ __   ___ _ __      _ __   __ _(_)_ __ | |_
** | '_ \ / _` | '_ \ / _ \ '__|____| '_ \ / _` | | '_ \| __|
** | |_) | (_| | |_) |  __/ | |_____| |_) | (_| | | | | | |_
** | .__/ \__,_| .__/ \___|_|       | .__/ \__,_|_|_| |_|\__|
** |_|         |_|                  |_|
**
*/
<template>
<div class="display:flex;width:100%;">
  <div style="width:200px;"></div>
  <div style="width:calc(100% - 0px);overflow: auto;" ref="refPaperContainer">
  </div>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { A4Paper } from "../type/pp_a4paper";

const refPaperContainer = ref<HTMLDivElement | null>(null);

onMounted(() => {
  const a4 = new A4Paper();
  if (refPaperContainer.value != null) {
    refPaperContainer.value.appendChild(a4.getCanvas());
  }
  a4.drawText("中文", 10, 10);
});


</script>

<style scoped>
  .greeting {
    padding: 1rem;
    margin-top: 1rem;
    border: 1px solid #42b883;
    border-radius: 8px;
  }
</style>