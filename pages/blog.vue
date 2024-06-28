<template>
    <ul v-if="menu">
        <li v-for="(item, index) in menu">
            <a :href="item.path">
                {{  item.title }}
            </a>
        </li>
    </ul>
    <NuxtPage :page-key="route.path" />
</template>

<script setup>
  const menu = [
    {
        title: "Post 1",
        path: "/blog/post-1"
    },
    {
        title: "Post 2",
        path: "/blog/post-2"
    },
  ]
  const route = useRoute()
</script>