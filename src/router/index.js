import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Experience from '../components/Experience.vue';
import Projects from '../components/Projects.vue';
import Resume from '../components/Resume.vue';
import Contact from '../components/Contact.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/experience', name: 'Experience', component: Experience },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/resume', name: 'Resume', component: Resume },
  { path: '/contact', name: 'Contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;