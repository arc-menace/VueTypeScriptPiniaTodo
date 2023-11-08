<script setup lang="ts">
    import { useListStore } from '@/stores/listStore'
    import ListButton from './ListButton.vue'
    import NewListButton from './NewListButton.vue'

    const listStore = useListStore();
</script>

<template>
    <div class="flex flex-col w-[500px] h-screen border-2 border-amber-600">
        <NewListButton />

        <div v-for="list in listStore.lists" :key="list.id">
            <ListButton :list="list"></ListButton>
        </div>
    </div>
</template>
  
<style scoped>
</style>