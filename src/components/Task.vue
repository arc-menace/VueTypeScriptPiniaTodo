<script setup lang="ts">
    import { Task } from '@/models/task';
    import { useListStore } from '@/stores/listStore';

    const listStore = useListStore();

    const props = defineProps({
        task: { type: Task, required: true }
    })
</script>

<template>
    <button v-on:click="() => listStore.deleteTask(task.id)">Delete Task</button>
    <input type="checkbox" v-model="task.done">
    {{ task.name }}
</template>