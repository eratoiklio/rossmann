<template>
    <BoxItem v-for="box in boxes" :item="box" :key="box.BoxCode" />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import BoxItem from "./BoxItem.vue";
import Box from '@/types/Box';
export default defineComponent({
  props: {
    boxes: {
      type: Array as PropType<Box[]>,
    },
  },
  components: {
    BoxItem,
  },
});
</script>
