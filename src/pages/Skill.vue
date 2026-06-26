<template>
  <form class="flex flex-col p-4" @submit.prevent="submit">
      <label> Project Name </label>
      <input class="border" v-model="form.name" type="text" placeholder="Portfolio Website" />
      <label> Position </label>
      <input class="border" v-model="form.position" type="text" placeholder="Frontend Developer"/>
      <label> GitHub URL </label>
      <input class="border" v-model="form.github" type="url" placeholder="https://github.com/username/project"/>
      <label> Demo URL </label>
      <input class="border" v-model="form.demo" type="url" placeholder="https://project.com"/>
      <label> Framework / Tech Stack </label>
      <input class="border" v-model="form.framework" type="text" placeholder="Vue 3, Tailwind CSS, Laravel"/>
      <label> Description </label>
      <textarea class="border" v-model="form.description" rows="5" placeholder="Describe your project..."/><br>
    <button class="border" type="submit">Save Project</button>
  </form>
</template>
<script setup>
import axios from 'axios';
import { reactive } from 'vue'
const form = reactive({
  name: "",
  position: "",
  github: "",
  demo: "",
  framework: "",
  description: "",
});

const submit = async () => {
    Object.assign(form, {
        name: form.name,
        position: form.position,
        github: form.github,
        demo: form.demo,
        framework: form.framework,
        description: form.description,
    })
    await axios.post('http://localhost:5002/v1/work', form)
}
</script>
