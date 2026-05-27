<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import { useAuth } from './hooks/auth.hook';
  import { AuthService } from './services/auth.service';

  const year = new Date().getFullYear()
  const { logout, auth } = useAuth()
  const route = useRoute()

</script>

<template>
  <div class="app">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <RouterLink class="navbar-brand" to="/"> 
          <img src="/puzzle.png" alt="Logo" width="32" height="32" />
          Yu-Gi-Oh! Shop
        </RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/">
                Home
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">
                About
              </RouterLink>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
          <template v-if="auth">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/cart">
                Cart
              </RouterLink>
            </li>
            <li class="nav-item">
              <button class="btn btn-primary ms-1" @click="logout">
                Logout
              </button>
            </li>
          </template>
          <template v-else>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/login">
                  Login
                </RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="btn btn-primary ms-1" to="/signup">
                  Sign Up
                </RouterLink>
              </li>
          </template>
          </ul>
        </div>
      </div>
    </nav>
    <main class="content">
      <RouterView/>
    </main>
    <footer class="footer d-flex justify-content-center align-items-center py-3 border-top">
      &copy; {{ year }} Yu-Gi-Oh! Shop 
    </footer>
  </div>
</template>

<style scoped>
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

   .footer {
      margin-top: auto;
  }

  
</style>
