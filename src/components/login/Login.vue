<template>
  <div class="login">
    <h1>欢迎登陆</h1>
  </div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
  name:'Login',
  mounted(){
    setTimeout(()=>{
      this.$router.push('/shopping');
    },5000);
  }
}
</script>

