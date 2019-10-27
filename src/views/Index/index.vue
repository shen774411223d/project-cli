<template>
  <div class="home">
    <div class="home-title">{{ msg }}</div>
    <button @click="handle">点我</button>
    <router-view />
  </div>
</template>

<script>
	import { receiveUser } from '@/api'
export default {
  name: 'Home',
  computed: {
   
  },
  data() {
    return {
      msg: 'hello vue!',
			show: true
    }
  },
  methods: {
    handle() {
      this.$router.push('/pay')
    },
		handleShow() {
			this.show = !this.show
		}
  },
  async created() {
		receiveUser()
  }
}
</script>
<style lang="less">
  .home-title {
    text-align: center;
  }
</style>
