<script setup lang="ts">
    import type { SetModel } from '@/models/set.model';
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute()
    const code = route.params.code

    const set = ref<SetModel>

</script>

<template>
    {{ code }}
</template>