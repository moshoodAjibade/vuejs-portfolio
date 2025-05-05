<template>
    <footer class="bg-gray-800 text-white py-4">
      <div class="flex flex-col items-center space-y-2 text-center">
        <p>&copy; {{ currentYear }} My Portfolio. All rights reserved.</p>
        <div class="space-x-4">
          <a href="#" class="hover:underline">Privacy Policy</a>
          <a href="#" class="hover:underline">Terms of Service</a>
          <a href="#" class="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  const currentYear = new Date().getFullYear();
  </script>
  
  <style>
  /* Optional: Add any custom styles for the footer */
  </style>
  