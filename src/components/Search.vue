<template>
  <div class="search">
    <form  data-testid="form" @submit.prevent="search" autocomplete="off">
    <input data-testid="query-input"
      type="number"
      :placeholder="placeholder"
      :maxLength="maxLength"
      v-model="query"
      @input="shorten"
    />
    <button data-testid="search-btn">{{ searchLabel }}</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { PL } from "@/disc/lang";

export default defineComponent({
  name: "Search",
  setup() {
    const searchLabel = ref<string>(PL("search"));
    const query = ref<string>("");
    return { searchLabel, query };
  },
  props: {
    placeholder: {
      required: true,
      type: String,
    },
    maxLength: {
      type: Number,
      default: 100
    },
  },
  methods: {
    search(): void {
      const formIsValid = this.query.length > 0 && this.query.length <= this.maxLength
      if(formIsValid){
      this.$emit("search", { query: this.query });
      }
    },
    shorten(): void {
      if (this.query.length > this.maxLength){
        this.query = this.query.slice(0, this.maxLength);}
      }
    },
});
</script>

<style scoped lang="scss">
.search {
  background: AliceBlue;
  padding: 25px 0;
  input, button {
    border-radius: 5%;
  }
  input {
    margin-right: 10px;
    padding: 10px;
    border-width: 1px;
  }
  button {
    background: SteelBlue;
    color: whitesmoke;
    border-width: 0;
    min-width: 100px;
    border-color: whitesmoke;
    padding: 11px;
  }
}
</style>
