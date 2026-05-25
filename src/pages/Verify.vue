<script lang="ts" setup>
    import { ref } from 'vue';

    const year = new Date().getFullYear()

    const code = ref<number>()
    const email = sessionStorage.getItem('verify_email')

    function verify(){
        
    }
</script>

<template>
    <form class="form-signin m-auto">
        <img class="mb-4" src="/puzzle.png" alt="" width="42" height="42" />
        <h1 class="h3 mb-3 fw-normal">Verify your email</h1>
        <h3>The verification code has been sent to {{ email ?? 'your email' }} adress</h3>
        <div class="form-floating">
            <input type="number" class="form-control" id="code" placeholder="Password" v-model="code" />
            <label for="code">Verification code</label>
        </div>
        <button class="btn btn-primary w-100 my-2" type="submit" @click=""> 
            Verify and go to login
        </button>
        <p class="mt-5 mb-3 text-body-secondary">© {{ year }}</p>
    </form>
</template>