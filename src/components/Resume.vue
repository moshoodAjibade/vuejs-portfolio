<template>
    <section class="w-full h-screen">
      <!-- Viewable Resume -->
      <iframe
        :src="resumeUrl"
        class="w-full h-full"
        frameborder="0"
        title="Resume"
      ></iframe>
  
      <!-- Download Button -->
      <div class="absolute top-4 right-4">
        <a
          :href="resumeUrl"
          download="My_Resume.pdf"
          class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg"
        >
          Download Resume
        </a>
      </div>
    </section>
  </template>
  
  <script setup>
  import resumePdf from '../assets/resume.pdf'; // Correctly import the PDF file
  
  const resumeUrl = resumePdf;
  </script>
  
  <style>
  /* Ensure body has no margin for full-page effect */
  body {
    margin: 0;
    padding: 0;
  }
  </style>
  