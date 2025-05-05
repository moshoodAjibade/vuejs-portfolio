<script setup>


</script>

<template> 

  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
      <div class="max-w-xl">
        <h2 class="text-3xl font-semibold tracking-tight text-pretty text-indigo-900 sm:text-4xl">Software Developer</h2> <br>
        <p class="text-base/7 font-semibold text-gray-600">An experienced and driven full stack developer with a strong interest in programming and software development. 
          </p>
          <p class="text-base/7 font-semibold text-gray-600">Furthermore, my knowledge is endless due to the daily advancements in technology.</p>
      </div>
      <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        <li v-for="tech in technology" :key="tech.name">
          
          <div class="flex items-center gap-x-6">
            <img class="size-16 rounded-full" :src="tech.imageUrl" alt="" />
            <div>
              <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">{{ tech.name }}</h3>
          
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>




<script setup>

const technology = [
  {
    name: 'ReactJS',
    imageUrl: 'https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000',
    alt: '../assets/icons/reactjs.png',
  },
  {
    name: 'VueJS',
    imageUrl: 'https://img.icons8.com/?size=100&id=rY6agKizO9eb&format=png&color=000000',
    alt: '../assets/icons/vuejs.png',
  },
  {
    name: 'MYSQL',
    imageUrl: 'https://img.icons8.com/?size=100&id=vR6XrZzQr1CN&format=png&color=000000',
    alt : '../assets/icons/laravel.png',
  },
  {
    name: 'Python',
    imageUrl: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000',
    alt: '../assets/icons/python.png',
  },
  {
    name: 'MongoDb',
    imageUrl: 'https://img.icons8.com/?size=100&id=74402&format=png&color=000000',
    alt: '../assets/icons/mysql.png',
  },
  {
    name: 'Devops',
    imageUrl: 'https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000',
    alt: '../assets/icons/docker.png',
  },
  {
    name: 'Git',
    imageUrl: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000',
    alt : '../assets/icons/git.png',
  },
  {
    name: 'Laravel',
    imageUrl: 'https://img.icons8.com/?size=100&id=UG5EO81XNkPs&format=png&color=000000',
    alt: '../assets/icons/laravel.png',
  },
 
  // More people...
]
</script>