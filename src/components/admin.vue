<script>
import json from '../excuses.json'
import Modal from './Modal.vue';
export default {
    data() {
        return {
            excusesArray: [],
            excusesArrayChecked: [],
            isLoading: false,
            items: json,
            isModalVisible: false,
            excuse: {
                http_code: '',
                tag: '',
                message: ''
            },
            
        };
    },
    components: {
        Modal,
    },
    mounted () {
        document.body.classList.add('admin')
        document.body.classList.add('modalClose')
    },
    methods: {
        showModal() {
            this.isModalVisible = true;
            document.body.classList.add('modalOpen')
            document.body.classList.remove('modalClose')
        },
        closeModal(){
			this.isModalVisible = false;
            document.body.classList.add('modalClose')
            document.body.classList.remove('modalOpen')
		},
        saveMessage() {
            this.items.push({...this.excuse});
            const data = JSON.stringify(this.items)
            window.localStorage.setItem('items', data);
            this.closeModal();
        }
    },
}
</script>
<template>
    <div class="wrapper">
        <h1>Liste des excuses</h1>
        <button type="button" class="btn add_excuse" @click="showModal">Ajouter une excuse</button>
        <ul class="excuses">
            <li v-for="item in items">
                {{ item.message }}
            </li>
        </ul>
    </div>
    <Modal v-show="isModalVisible" @close="closeModal">
        <template v-slot:header>Ajouter une excuse</template>
        <template v-slot:body>
            <input type="text" v-model="excuse.message" placeholder="Message" ref="messageInput"/>
        </template>
        <template v-slot:footer>
            <button type="button" class="btn-green" @click="saveMessage" aria-label="Save modal">Enregistrer</button>
        </template>
    </Modal>
</template>
<style>
</style>