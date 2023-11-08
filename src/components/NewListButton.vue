<script setup lang="ts">
    import { useListStore } from '@/stores/listStore'

    const listStore = useListStore();
</script>


<template>
    <button v-on:click="() => listStore.addNewList()">
        <i class="fa-solid fa-plus"></i>
        New List
    </button>
</template>
