<template>
  <div>
    <Search
      id="searchArticle"
      :placeholder="placeholder"
      :maxLength="maxLength"
      @search="searchArticle"
    />
    <Item v-if="article" :item="article" />
    <Empty :message="message" v-show="typeof article !== 'object'" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import Article from "../types/Article";
import Search from "@/components/Search.vue";
import Item from "@/components/ArticleItem.vue";
import Empty from "@/components/Empty.vue";
import { PL } from "@/disc/lang";


export default defineComponent({
  name: "Article",
  components: {
    Search,
    Item,
    Empty
  },
  setup() {
    const query = ref<string>("");
    const article = ref<Article | null>(null);
    const placeholder = ref(PL("article_code"));
    const maxLength = ref<number>(13);

    const message = computed(() => {
      return PL("noItem", query.value);
    });
    return { query, article, placeholder, maxLength, message };
  },

  methods: {
    searchArticle({ query }: any): void {
      const url = `https://my-json-server.typicode.com/eratoiklio/rossmann-db/articles?code=${query}`;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          this.article = json[0];
          this.query = query;
        });
    },
  },
});
</script>
<style lang="scss" scoped>
#searchArticle {
  background: Lavender;
}
</style>
