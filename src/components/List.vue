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
    <div class="h-screen w-9/12">
        Hello World
    </div>
</template>