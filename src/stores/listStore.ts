import {defineStore} from 'pinia'
import { List } from '@/models/list'

const initialList = new List('New List');

export const useListStore = defineStore('list', {
    state: () => ({
        lists: [initialList],
        currentList: initialList
    }),
    getters: {
        getListById: (state) => {
            return (listId: string) => state.lists.find(list => {
                return list.id == listId
            });
        },

        getTaskById: (state) => {
            return (taskId: string) => {
                let list = state.lists.find(_list => {
                    return _list.getTaskById(taskId) != undefined
                })
                
                return list?.getTaskById(taskId);
            }
        }
    },
    actions: {
        addNewList() {
            this.lists.push(new List("New List"));
        },

        deleteList(listId: string) {
            let listToRemove = this.getListById(listId);
            
            if(listToRemove != undefined) {
                let index = this.lists.indexOf(listToRemove);

                if(index > -1) {
                    this.lists.splice(index, 1);
                }
            }
        },

        deleteTask(taskId: string) {
            let taskToRemove = this.getTaskById(taskId)

            if(taskToRemove != undefined) {
                let list = this.getListById(taskToRemove.parentId)

                list?.deleteTask(taskToRemove);
            }
        },
    }
})