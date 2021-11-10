<template>
  <form @submit.prevent="search()">
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        aria-label="Search"
        placeholder="Search..."
        v-model="query"
        required
        minlength="1"
      />
      <button class="btn btn-dark">Search</button>
    </div>
  </form>
</template>


<script>
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { discogsService } from '../services/DiscogsService'
import { useRouter } from "vue-router"
export default {
  setup() {
    const query = ref('')
    const router = useRouter()
    return {
      query,
      async search() {
        try {
          await discogsService.search(query.value)
          router.push({ name: 'SearchPage' })
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
