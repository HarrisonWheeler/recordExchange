<template>
  <form @submit.prevent="search()">
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        aria-label="Search"
        placeholder="Search..."
        v-model="query"
      />
    </div>
  </form>
</template>


<script>
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { discogsService } from '../services/DiscogsService'
export default {
  setup() {
    const query = ref('')
    return {
      query,
      async search() {
        try {
          await discogsService.search(query.value)
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>
