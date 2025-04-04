<template>
    <div class="p-4 border rounded-lg shadow text-center">
      <h2 class="text-2xl font-bold text-purple-700">Contador Vue</h2>
      <p class="my-2 text-gray-700">Contagem: {{ count }}</p>
      <button
        @click="count++"
        class="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
      >
        Incrementar
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const count = ref(0);
  </script>