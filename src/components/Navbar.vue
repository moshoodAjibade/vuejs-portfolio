<template>
  <div>
    <!-- Navbar -->
    <nav class="bg-gray-800 text-white p-4">
      <div class="flex items-center justify-center space-x-8">
        <div class="text-xl font-bold">My Portfolio</div>
        <div class="space-x-4">
          <router-link to="/" class="hover:underline">Home</router-link>
          <router-link to="/experience" class="hover:underline">Experience</router-link>
          <router-link to="/projects" class="hover:underline">Projects</router-link>
          <router-link to="/resume" class="hover:underline">Resume</router-link>
          <router-link to="/contact" class="hover:underline">Contact</router-link>
        </div>
      </div>
    </nav>

    <!-- Content Placeholder -->
    <main class="min-h-screen bg-gray-100 p-8">
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-4">
      <div class="flex flex-col items-center space-y-2">
        <p>&copy; {{ currentYear }}  My Portfolio. All rights reserved.</p>
        <div class="space-x-4">
          <a href="#" class="hover:underline">Privacy Policy</a>
          <a href="#" class="hover:underline">Terms of Service</a>
          <a href="#" class="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
