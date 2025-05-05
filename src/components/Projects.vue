<template>
  <section class="py-12 px-6 bg-gray-50">
    <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">My Projects</h2>
    <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
      <div 
        class="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out"
        role="article"
        aria-labelledby="project-one"
      >
        <img 
          src="../assets/portfolio.jpeg" 
          alt="Project One - ReactJS Portfolio" 
          class="rounded-lg mb-4 w-full h-48 object-cover"
        >
        <h3 id="project-one" class="text-2xl font-semibold text-gray-800 mb-2">Project One</h3>
        <p class="text-gray-600 mb-4">A personal portfolio website designed with ReactJS and TailwindCSS framework.</p>
        <a 
          href="https://project-one-portfolio.netlify.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-block text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
          aria-label="View more about Project One"
        >
          View More
        </a>
      </div>
      <div 
        class="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out"
        role="article"
        aria-labelledby="project-two"
      >
        <img 
          src="../assets/vuejsportfolio.jpeg" 
          alt="Project Two - VueJS Portfolio" 
          class="rounded-lg mb-4 w-full h-48 object-cover"
        >
        <h3 id="project-two" class="text-2xl font-semibold text-gray-800 mb-2">Project Two</h3>
        <p class="text-gray-600 mb-4">A personal portfolio website designed with VueJS and TailwindCSS framework.</p>
        <a 
          href="https://project-two-vue-portfolio.netlify.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-block text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
          aria-label="View more about Project Two"
        >
          View More
        </a>
      </div>
      <div 
        class="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out"
        role="article"
        aria-labelledby="project-three"
      >
        <img 
          src="../assets/consultancyapp.jpeg" 
          alt="Project Three - Consultancy Website" 
          class="rounded-lg mb-4 w-full h-48 object-cover"
        >
        <h3 id="project-three" class="text-2xl font-semibold text-gray-800 mb-2">Project Three</h3>
        <p class="text-gray-600 mb-4">A consultancy website designed with ReactJS and TailwindCSS framework.</p>
        <a 
          href="https://adorable-maamoul-a5740e.netlify.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-block text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
          aria-label="View more about Project Three"
        >
          View More
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Ensure images are responsive and maintain aspect ratio */
img {
  max-width: 100%;
  height: auto;
}

/* Add subtle focus styles for accessibility */
a:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}
</style>