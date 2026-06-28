<template>
    <article>
        <form action="" @submit.prevent="submit">
            <label for="">name</label>
            <input type="text" v-model="form.name" class="border">
            <label for="">major</label>
            <input type="text" v-model="form.major" class="border">
            <label for="">gpa</label>
            <input type="date" v-model="form.gpa" class="border">
            <label for="">data_start</label>
            <input type="date" v-model="form.date_start" class="border">
            <label for="">data_end</label>
            <input type="file" v-model="form.date_end" class="border">
        </form>
    </article>
</template>


<script setup lang="ts">

const props = defineProps({
    loadForm: function
})

import { reactive } from 'vue';
    interface FormData {
        name: string,
        major: string,
        gpa: string,
        date_start: string,
        date_end: string,
        logo: File | null,
    }
    const form = reactive<FormData>({
        name: "",
        major: "",
        gpa: "",
        date_start: "",
        date_end: "",
        logo: null,
    })

    const submit async () => {
        const res = await props.ad
    }
</script>