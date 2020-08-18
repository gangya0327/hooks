<template>
  <div>
    <input v-model="username" type="text">
    <input v-model="password" type="password">
    <button @click="handleLogin" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
