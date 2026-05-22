<script setup lang="ts">
    import Loading from '@/components/loading.vue'
    import type CardModel from '@/models/card.model'
    import type { SetModel } from '@/models/set.model'
    import { DataService } from '@/services/data.service'
    import { onMounted, ref } from 'vue'
    import { useRoute } from 'vue-router'

    const route = useRoute()
    const id = route.params.id

    const card = ref<CardModel>()
   
    const loading = ref(false) 

    async function loadCard() {
        loading.value = true

        try {      
            const rsp = await DataService.getCardById(Number(id))  
            card.value = rsp.data
        } finally {
            loading.value = false
        }
    }

    onMounted(loadCard)
</script>

<template>
  <Loading v-if="loading"/>
  <div v-else class="container py-3">
    <section class="mb-5">
        <div class="row align-items-center justify-content-center">
            <div class="col-lg-2 text-center">
                <img :src="`http://localhost:3300/images/cards/${card?.id}.jpg`" :alt="card?.name" class="img-fluid rounded shadow">
            </div>
            <div class="col-lg-5">
                <p class="text-muted text-uppercase mb-1">
                    Yu-Gi-Oh Card
                </p>
                <h1 class="display-5 fw-bold mb-4">
                    {{ card?.name }}
                </h1>
                <table class="table">
                    <tbody>
                        <tr>
                            <th>Card type</th>
                            <td>{{ card?.type }}</td>
                        </tr>
                    </tbody>
                </table>
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