<template>
<div class="message"> 
   {{message}}
</div>
</template>
<script lang="ts">
import { defineComponent} from 'vue'
export default defineComponent({
    name: 'Empty',
    props:{
        message:{
            type: String
        }
    },
})
</script>
<style lang="scss" scoped>
.message{
    padding-top: 50px;
}
</style>

