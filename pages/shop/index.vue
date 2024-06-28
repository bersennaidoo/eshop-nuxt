<script setup>
  const menu = [
    {
        title: "Syringe",
        path: "/shop/syringe"
    },
    {
        title: "Glove",
        path: "/shop/glove"
    },
  ]
</script>

<template>
    <h2>Shop items</h2>
    <ul v-if="menu">
        <li v-for="(item, index) in menu">
            <a :href="item.path">{{ item.title }}</a>
        </li>
    </ul>
</template>