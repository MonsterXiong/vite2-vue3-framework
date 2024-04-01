<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance()
const $message = proxy.$message
const onClick = ()=>{
  $message.success('hello')
}
</script>

<template>
  <a-button type="primary" @click="onClick">Primary Button</a-button>
  <a-button>Default Button</a-button>
  <a-button type="dashed">Dashed Button</a-button>
  <a-button type="text">Text Button</a-button>
  <a-button type="link">Link Button</a-button>
</template>




<style scoped>
a {
  color: #42b983;
}
</style>
