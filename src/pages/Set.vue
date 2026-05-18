<script setup lang="ts">
  import type { SetModel } from '@/models/set.model'
import axios from 'axios'
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const code = route.params.code

  const set = ref<SetModel>()
  const cards = ref<any>([])
  const loading = ref(false) 

  async function loadSet() {
      loading.value

      try {      
          const rsp = await axios.get(`http://localhost:3300/api/set/${code}`)

          set.value = rsp.data.set_details
          cards.value = rsp.data.cards

          console.log(set)
      } finally {
          loading.value = false
      }
  }

  onMounted(loadSet)
</script>

<template>
  <section class="set-details-page">
    <div class="container py-5">
      <!-- <button class="btn btn-outline-warning mb-4">
        <i class="fa-solid fa-arrow-left me-2"></i>
        Back to sets
      </button> -->
      <div v-if="set != null && cards.length > 0">
        <div class="set-hero p-3 mb-3">
          <div class="row align-items-center g-4">
            <div class="col-md-4 text-center">
              <img :src="`http://localhost:3300/images/sets/${set?.set_code}.jpg`" :alt="set?.set_name" class="set-image">
            </div>
            <div class="col-md-8">
              <h1 class="set-title mb-3">
                {{ set?.set_name }}
              </h1>
            <div class="set-info">
              <p>
                <span>Set Code:</span>
                {{ set?.set_code }}
              </p>
              <p>
                <span>Cards:</span>
                {{ set?.num_of_cards }}
              </p>
              <p>
                <span>Release Date:</span>
                {{ set?.tcg_date }}
              </p>
            </div>
          </div>
        </div>
      </div>
      
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h2 class="section-title mb-0">
            Cards in this set
          </h2>
          <span class="cards-count">
            {{ cards.length }} cards
          </span>
        </div>
        <div class="row g-4">
          <div v-for="card in cards" class="col-6 col-sm-4 col-md-3 col-lg-2">
            <div class="card-image-wrapper">
              <img
                :src="`http://localhost:3300/images/cards/${card.id}.jpg`"
                alt="Yu-Gi-Oh card"
                class="card-image"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.set-details-page {
  min-height: 100vh;
  background:
    radial-gradient(circle at top, rgba(212, 175, 55, 0.15), transparent 35%),
    linear-gradient(135deg, #090909, #17110a 55%, #050505);
  color: white;
}

.set-hero {
  border: 1px solid rgba(212, 175, 55, 0.35);
  border-radius: 20px;
  background: rgba(15, 15, 15, 0.9);
  box-shadow: 0 0 25px rgba(212, 175, 55, 0.15);
}

.set-image {
  width: 100%;
  max-width: 280px;
  border-radius: 14px;
  border: 2px solid rgba(212, 175, 55, 0.55);
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.25);
}

.set-title {
  color: #f5d76e;
  font-weight: 800;
}

.set-info p {
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  color: #ddd;
}

.set-info span {
  color: #d4af37;
  font-weight: 700;
  margin-right: 0.4rem;
}

.section-title {
  color: #f5d76e;
  font-weight: 700;
}

.cards-count {
  color: #d4af37;
  font-weight: 600;
}

.card-image-wrapper {
  padding: 0.5rem;
  border-radius: 14px;
  background: rgba(20, 20, 20, 0.95);
  border: 1px solid rgba(212, 175, 55, 0.25);
  transition: 0.2s ease;
  cursor: pointer;
}

.card-image-wrapper:hover {
  transform: translateY(-6px);
  border-color: rgba(212, 175, 55, 0.75);
  box-shadow: 0 0 18px rgba(212, 175, 55, 0.3);
}

.card-image {
  width: 140px;
  max-height: 190px;
  border-radius: 10px;
  display: block;
}
</style>