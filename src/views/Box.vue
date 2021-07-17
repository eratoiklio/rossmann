<template>
  <div class="container">
  <Search :placeholder="placeholder" :maxLength="maxLength" @search="searchBox"/>
  <BoxList :boxes="boxes"/>
  <Empty :message="message" v-show="typeof box !== 'object'" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import Search from '@/components/Search.vue';
import Empty from '@/components/Empty.vue';
import BoxList from '@/components/BoxList.vue';

import { PL } from "@/disc/lang";
import Box from "../types/Box";

export default defineComponent({
  name: "Box",
  components: {
    Search,
    BoxList,
    Empty
  },
    setup() {
    const query = ref<string>("");
    const box = ref<Box | null>(null);
    const placeholder = ref(PL("container_code"));
    const maxLength =  ref<number>(6);
    const boxes = ref<Box[]>([]);
    const message =  computed(()=>{
         return PL('noBox', query.value)
     })
       return { query, placeholder, maxLength, message, box, boxes };
  },
   methods: {
    searchBox({query}:any): void {
      const url = `https://my-json-server.typicode.com/eratoiklio/rossmann-db/boxes?BoxCode=${query}`;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          this.box = json[0];
          if(this.box && !this.boxes.some(e => e.BoxCode === this.box?.BoxCode))
          {this.boxes.push(json[0]);}
          this.query = query;
        });
    },
  },
});
</script>
