<template>
  <h2>{{  title }}</h2>
  <div>
    <img :src="image" alt="image">
    <button class="btn btn-primary">Add to Cart</button>
  </div>
</template>

<script setup>
  const route = useRoute()
  const product = reactive({
    title: null,
    image: null,
  })

  let { title, image } = toRefs(product)
  const products = [
    {
        slug: "syringe",
        title: "Syringe",
        image: "/images/200x200.png"
    },
    {
        slug: "glove",
        title: "Glove",
        image: "/images/200x200.png"
    },
  ]
  const found = products.find(post => post.slug === route.params.slug)
  title = found.title 
  image = found.image
</script>