<template>
    <div class="itemContainer">
        <div class="item"><h1>{{ name }} : </h1>{{ item?.name }}</div>
        <div class="item"><h1>{{ code }} : </h1>{{ item?.code }}</div>
        <div class="item"><h1>{{ price }} : </h1>{{ item?.price }}</div>
        <div class="item"><h1>{{ stock }} : </h1>{{ item?.stock }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import Article from '@/types/Article'
import { PL } from '@/disc/lang'

export default defineComponent({
     setup() {
    const name = ref<string>(PL('name'));
    const code = ref<string>(PL('code'));
    const price = ref<string>(PL('price'));
    const stock = ref<string>(PL('stock'));
    return {code, price, stock, name}
    },
    props: {
        item: {
            type: Object as PropType<Article> | null
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
