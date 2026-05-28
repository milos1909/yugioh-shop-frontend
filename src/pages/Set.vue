<script setup lang="ts">
    import Loading from '@/components/loading.vue'
    import { getCardImage, getSetImage } from '@/helpers/image'
    import { useAuth } from '@/hooks/auth.hook'
    import type CardModel from '@/models/card.model'
    import type { SetModel } from '@/models/set.model'
    import { DataService } from '@/services/data.service'
    import { onMounted, ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router'

    const route = useRoute()
    const router = useRouter()

    const { logout } = useAuth()

    const code = route.params.code

    const set = ref<SetModel>()
    const cards = ref<CardModel[]>([])
    const loading = ref(false) 

    async function loadSet() {
        loading.value = true

        try {      
            const rsp = await DataService.getSetByCode(String(code))
            
            set.value = rsp.data.set_details
            cards.value = rsp.data.cards

        } finally {
            loading.value = false
        }
    }

    function addToCart(set_name: string) {
        if(!confirm(`Add ${set_name} to cart`)) return

        DataService.useAxios(`/invoice/cart/add/${set_name}`, 'put')
            .then(() => router.push('/cart'))
            .catch(e => logout(e))
    }

    onMounted(loadSet)
</script>

<template>
  <Loading v-if="loading"/>
  <div v-else class="container py-3">
    <section class="mb-5">
        <div class="row align-items-center justify-content-center">
            <div class="col-lg-2 text-center">
                <img :src="getSetImage(String(set?.set_code))" :alt="set?.set_name" class="img-fluid rounded shadow">
            </div>
            <div class="col-lg-5">
                <p class="text-muted text-uppercase mb-1">
                    Yu-Gi-Oh Card Set
                </p>
                <h1 class="display-5 fw-bold mb-4">
                    {{ set?.set_name }}
                </h1>
                <table class="table">
                    <tbody>
                        <tr>
                            <th>Set Code</th>
                            <td>{{ set?.set_code }}</td>
                        </tr>
                        <tr>
                            <th>Cards</th>
                            <td>{{ set?.num_of_cards }}</td>
                        </tr>
                        <tr>
                            <th>Release Date</th>
                            <td>{{ set?.tcg_date }}</td>
                        </tr>
                        <tr>
                            <th>Price</th>
                            <td>{{ set?.set_price }} €</td>
                        </tr>
                    </tbody>
                </table>
                <button type="button" class="btn btn-success" @click="addToCart(set!.set_name)">
                    <i class="fa-solid fa-cart-shopping"></i> Add to cart
                </button>
            </div>
        </div>
    </section>
    <section>
        <div class="row g-4">
            <div v-for="card in cards" :key="card.id" class="col-lg-auto">
                <RouterLink :to="`/card/${card.id}`">
                    <img :src="getCardImage(card.id)" class="img-fluid rounded shadow-sm card-image">
                </RouterLink>
            </div>
        </div>
    </section>
  </div>
</template>

<style scoped>
  .card-image {
    width: 100%;
    max-width: 140px;

    cursor: pointer;
    transition: .2s;
}

  .card-image:hover {
      transform: translateY(-4px);
  }
</style>