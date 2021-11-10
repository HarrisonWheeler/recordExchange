<template>
  <div class="container-fluid">
    <!-- TODO lets set up some filters -->
    <!-- TODO set up skeleton loaders -->
    <div class="row">
      {{ searchResults }}
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
export default {
  setup() {
    return {
      searchResults: computed(() => AppState.searchResults)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>
