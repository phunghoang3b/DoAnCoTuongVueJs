<template>
    <div v-if="!isPopup" class="popup">
        <div class="popupinner">
            <slot/>
            <h2>Bạn đã thua</h2>
            <button @click="btnClosePopup">
                Ok
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['isPopupLose'],
    data(){
        return {isPopup: this.isPopupLose}
    },
    methods: {
        btnClosePopup(){
            //this.p = true;
            this.$router.push('/room');
        }
    }
}
</script>
<style scoped>
    .popup {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.2);

        display: flex;
        align-items: center;
        justify-content: center; 
    }
    .popupinner {
		background: #FFF;
		padding: 32px;
    }
</style>