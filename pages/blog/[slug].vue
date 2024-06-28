<template>
    <h2>
        {{ title }}
    </h2>
    <div v-html="contents" />
</template>

<script setup>
const route = useRoute();
const title = ref(null);
const contents = ref(null);
const posts = [
    {
        slug: "post-1",
        title: "Post 1",
        contents: "<p>Contents 1</p>",
    },
    {
        slug: "post-2",
        title: "Post 2",
        contents: "<p>Contents 2</p>",
    },
]; const test = /^[a-zA-Z0-9\-]*$/.test(route.params.slug)
if (test === false) {
    throw createError({
        statusCode: 400,
        statusMessage: 'Invalid request'
    })
}

const found = posts.find((post) => post.slug === route.params.slug);
title.value = found.title;
contents.value = found.contents;
</script>
