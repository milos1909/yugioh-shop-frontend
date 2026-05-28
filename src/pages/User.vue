<script lang="ts" setup>
    import { DataService } from '@/services/data.service';
import { ref } from 'vue';

    const invoices = ref<any[]>()
    DataService.useAxios('/invoice')
        .then(rsp => invoices.value = rsp.data)

</script>

<template>
    <pre>
        {{ invoices }}
    </pre>
</template>