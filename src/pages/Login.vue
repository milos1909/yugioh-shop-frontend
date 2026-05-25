<script lang="ts" setup>
    import { ref } from 'vue';

    const year = new Date().getFullYear()

    const username = ref<string>('')
    const password = ref<string>('')

    
</script>

<template>
    <form class="form-signin m-auto">
        <img class="mb-4" src="/puzzle.png" alt="" width="42" height="42" />
        <h1 class="h3 mb-3 fw-normal">Please log in</h1>
        <div class="form-floating">
            <input type="username" class="form-control" id="username" placeholder="name@example.com" v-model="username" />
            <label for="floatingInput">Username</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control" id="password" placeholder="Password" v-model="password" />
            <label for="password">Password</label>
        </div>
        <button class="btn btn-primary w-100 my-2" type="submit"> 
            <i class="fa-solid fa-arrow-right-to-bracket"></i> 
            Log in
        </button>
        <div>
            Don't have an account? <RouterLink to="/signup">Sign up</RouterLink>
        </div>
        <p class="mt-5 mb-3 text-body-secondary">© {{ year }}</p>
    </form>
</template>