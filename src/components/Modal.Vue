<script>
    export default {
        name: 'Modal',
        methods: {
            close() {
                this.$emit('close');
            },
        },
  };
</script>

<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
                <header class="modal-header" id="modalTitle">
                    <slot name="header">This is the default tile!</slot>
                    <button type="button" class="btn-close" @click="close" aria-label="Close modal">x</button>
                </header>
                <section class="modal-body" id="modalDescription">
                    <slot name="body">This is the default body!</slot>
                </section>
                <footer class="modal-footer">
                    <slot name="footer">This is the default footer!
                        <button type="button" class="btn-green" @click="save" aria-label="Save modal">Enregistrer</button>
                    </slot>
                    <button type="button" class="btn-green" @click="close" aria-label="Close modal">Annuler</button>
                </footer>
            </div>
        </div>
    </transition>
</template>

<style>
    .modalOpen {
        overflow: hidden;
    }
    .modal input {
        width: 100%;
        height: 30px;
        border-radius: 5px;
        text-align: center;
        font-size: 15px;
    }
    button[aria-label~="modal"] {
        opacity: 1;
        top: 0;
        left: 0;
        transform: unset;
        border-radius: 10px;
        transition: background-color .2s ease-in-out, color .2s ease-in-out;
    }
    button.btn-close {
        border-radius: 100%;
        font-size: 12px;
        padding: 6px 10px;
        margin: 10px 15px;
    }
    button[aria-label~="Close"] {
        left: unset;
        background-color: #FFF;
        color: #3066be;
        border: 1px solid #3066be;
    }
    button[aria-label~="Close"]:hover {
        background-color: #3066be;
        color: #FFF;
    }
    button[aria-label~="Save"] {
        margin-bottom: 10px;
        background-color: #3066be;
        color: #FFF;
        border: 1px solid #3066be;
    }
    button[aria-label~="Save"]:hover {
        background-color: #FFF;
        color: #3066be;
    }
    .modal-backdrop {
        position: fixed;
        top: -35px;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100vw;
        height: 100vh;
        left: calc((100vw - 700px)/-2);
    }

    .modal {
        background: #FFFFFF;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;

        width: 400px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        border-radius: 15px;
    }

    .modal-header,
    .modal-footer {
        padding: 15px;
        display: flex;
    }

    .modal-header {
        position: relative;
        border-bottom: 1px solid #eeeeee;
        color: #4AAE9B;
        justify-content: center;

        text-transform: uppercase;
        color: #3066be;
        letter-spacing: 1px;
        font-size: 17px;
        font-family: 'Montserrat', sans-serif;
    }

    .modal-footer {
        border-top: 1px solid #eeeeee;
        flex-direction: column;
    }

    .modal-body {
        position: relative;
        padding: 20px 15px;
        text-align: center;
    }

    .btn-close {
        position: absolute;
        top: 0;
        right: 0;
        border: none;
        font-size: 20px;
        padding: 10px;
        cursor: pointer;
        font-weight: bold;
        color: #4AAE9B;
        background: transparent;
    }

    .btn-green {
        color: white;
        background: #4AAE9B;
        border: 1px solid #4AAE9B;
        border-radius: 2px;
    }

    .modal-fade-enter,
    .modal-fade-leave-to {
        opacity: 0;
    }

    .modal-fade-enter-active,
    .modal-fade-leave-active {
        transition: opacity .5s ease;
    }
</style>