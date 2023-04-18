<script>
export default {
    created(){
        setTimeout( 
            () => this.$router.push({ path: '/'}), 
            5000
        );
    },
}
</script>
<template>
    <div class="wrapper">
        <p>I'm lost</p>
        <iframe src="https://giphy.com/embed/3o7aTskHEUdgCQAXde" width="480" height="204" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    </div>
</template>
<style scoped>

</style>