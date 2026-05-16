<script setup lang="ts">
    import Loading from '@/components/loading.vue';
    import type { SetModel } from '@/models/set.model';
    import axios from 'axios';
    import { ref } from 'vue';

    const sets = ref<SetModel[]>([])

    axios.get('https://db.ygoprodeck.com/api/v7/cardsets.php').then(rsp => sets.value = rsp.data)
</script>

<template>
    <section class="banner d-flex justify-content-center align-items-center">
        <div class="text-center">
            <h1 class="display-3 fw-bold text-white">
                Yu-Gi-Oh! Shop
            </h1>

            <p class="lead text-white">
                Explore cards, sets and build your collection
            </p>
        </div>
    </section>
    <div class="container mt-3">
        <div class="d-flex flex-wrap gap-1 justify-content-center" v-if="sets.length > 0">
            <div class="card text-center" v-for="set in sets">
                <div class="set-image-container">
                    <img :src="set.set_image ? `http://localhost:3300/images/sets/${set.set_code}.jpg`: '/back_high.jpg'" class="card-img-top set-image" :alt="set.set_name">
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{ set.set_name }}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">{{ set.tcg_date }}</h6>
                </div>
                <div class="card-footer">
                    <RouterLink :to="`/set/${set.set_code}`" class="btn btn-primary">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i> Details
                    </RouterLink>
                </div>
            </div>
        </div>
        <Loading v-else/>
    </div>
</template>

<style scoped>
    .banner {
      height: 55vh;

      background:
          linear-gradient(
              rgba(0,0,0,0.5),
              rgba(0,0,0,0.5)
          ),
          url('/egyptian_gods_banner.jpg');

      background-size: cover;
      background-position: center;
    }
    
    .card {
        width: 10rem;
        height: 24rem;
        display: flex;
        flex-direction: column;
    }
    
    .set-image-container {
        height: 180px;
        display: flex;
        justify-content: center;
        align-items: center;
    }


    .set-image {
        max-height: 140px;
        max-width: fit-content;
        justify-self: center;
        width: 100%;
        object-fit: contain;
    }
</style>
