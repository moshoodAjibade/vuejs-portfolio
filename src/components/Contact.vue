<script setup>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHouse, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const form = ref({
  name: '',
  email: '',
  message: '',
});

const submitForm = () => {
  console.log('Form submitted:', form.value);
  alert('Thank you for your message! I will get back to you soon.');
  form.value = { name: '', email: '', message: '' };
};

const icons = {
  house: faHouse,
  phone: faPhone,
  envelope: faEnvelope,
  linkedin: faLinkedin,
  twitter: faTwitter,
  github: faGithub,
 
  
};
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-12">Get In Touch</h2>

    <div class="bg-white p-8 rounded-lg shadow-md">
      <form @submit.prevent="submitForm" action="https://formspree.io/f/your-form-id" method="POST"  class="space-y-6">
        <div>
          <label for="name" class="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            required
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label for="email" class="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label for="message" class="block text-gray-700 mb-2">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="5"
            required
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>

      <div class="mt-8 pt-8 border-t border-gray-200">
        <h3 class="text-xl font-semibold mb-4">Other Ways to Connect</h3>
        <div class="flex space-x-6">
          <a href="#" class="text-gray-600 hover:text-indigo-600">
            <font-awesome-icon :icon="icons.house" />
          </a>
          <a href="ajibademoshood5@gmail.com" class="text-gray-600 hover:text-indigo-600">
            <font-awesome-icon :icon="icons.envelope" />
          </a>
          <a href="#" class="text-gray-600 hover:text-indigo-600">
            <font-awesome-icon :icon="icons.phone" />
          </a>
          <a href="https://github.com/moshoodAjibade/" class="text-gray-600 hover:text-indigo-600">
            <font-awesome-icon :icon="icons.github" />
          </a>
          <a href="https://www.linkedin.com/in/moshood-ajibade-51718317a" class="text-gray-600 hover:text-indigo-600">
            <font-awesome-icon :icon="icons.linkedin" />
          </a>
          <a href="https://x.com/shuddyslimz?s=21&t=1K0_Ak3qGWK5smlmofl2WA" class="text-gray-600 hover:text-indigo-600">
            <font-awesome-icon :icon="icons.twitter" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
