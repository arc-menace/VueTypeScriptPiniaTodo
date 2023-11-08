<script setup lang="ts">

import { List } from '@/models/list';
import { useListStore } from '@/stores/listStore';

const listStore = useListStore();

const props = defineProps({
    list: { type: List, required: true }
})

let tempName = props.list.name;

function onNameInput(e: any) {
    tempName = e.target.value;
}

function onNameKeyUp(e: any) {
    if(e.key === "Enter") {
        listStore.$patch((_) => {
            props.list.inRenameMode = false;
            props.list.name = tempName;
        })
    }
}

</script>

<template>
    <div class="flex flex-row">
        <div v-if="list.inRenameMode">
            <input type="text" id="rename" :value="list.name" v-on:input="(e) => onNameInput(e)" v-on:keyup="onNameKeyUp">
        </div>
        <div v-else>
            {{ list.name }}
        </div>
        <button v-show="!list.inRenameMode" v-on:click="() => list.inRenameMode = !list.inRenameMode" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Rename
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button v-on:click="listStore.deleteList(list.id)">Delete list</button>
    </div>
</template>