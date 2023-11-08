<script setup lang="ts">

import { useListStore } from '@/stores/listStore'
import Sidebar from './Sidebar.vue';
import List from './List.vue';

const listStore = useListStore();

listStore.$subscribe((mutation, state) => {
    console.log(state);
})

</script>

<template>
    <div class="flex flex-row w-max">
        <Sidebar />
        <List :list="listStore.currentList"/>
    </div>
</template>
  
<style scoped>

</style>