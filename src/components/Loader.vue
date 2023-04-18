<script>
  export default {
    name: "Loader",
  };
</script>
<template>
  <div class="loader"></div>
</template>
<style>
.loader-wrapper {
  margin-bottom: 50px;
  position: relative;
  height: 24px;
}
.loader {
  display: inline-block;
  width: 24px;
  height: 24px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.loader:after {
  content: " ";
  display: block;
  width: 24px;
  height: 24px;
  margin: 0;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #3066be transparent #3066be transparent;
  animation: loader 0.7s linear infinite;
}
@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>