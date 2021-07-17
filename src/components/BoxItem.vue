<template>
    <div class="itemContainer">
        <div class="item"><h1>{{ code }}: </h1> {{item?.BoxCode}}</div>
        <div class="item"><h1>{{ width }}: </h1> {{item?.Width}}</div>
        <div class="item"><h1>{{ height }}: </h1>{{item?.Height}}</div>
        <div class="item"><h1>{{ depth }}: </h1>{{item?.Depth}}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import Box from '@/types/Box'
import { PL } from '@/disc/lang'

export default defineComponent({
    name: 'BoxItem',
    setup() {
    const width = ref<string>(PL('Width'));
    const height = ref<string>(PL('Height'));
    const code = ref<string>(PL('BoxCode'));
    const depth = ref<string>(PL('Depth'));
    return {width, height, code, depth}
    },
    props: {
        item: {
            type: Object as PropType<Box> | null
        }
    }
})
</script>
<style lang="scss" scoped>
 .itemContainer {
     border: 1px solid gray;
     width: 500px;
     display: flex;
     flex-direction: column;
     padding: 20px;
     border-radius: 5px;
     margin: 20px auto 0 auto;
     align-items: flex-start;
     .item {
        h1 {
         font-size: 1em;
         display: inline;
         font-weight: bold;
        }
     }
     
 }
</style>