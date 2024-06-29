<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div v-for="(item, idx) in menu" class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a :href="item.path" class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block"
              :src="item.image"/>
          </a>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">
              The Catalyzer
            </h2>
            <p class="mt-1">$16.00</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const menu = [
  {
    title: "Syringe",
    path: "/shop/syringe",
    image: "/images/200x200.png"
  },
  {
    title: "Glove",
    path: "/shop/glove",
    image: "/images/200x200.png"
  },
]
</script>
