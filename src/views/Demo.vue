<template>
  <div>
    <!-- 计算属性的基础例子 -->
    <div style="font-size: 14px">计算属性</div>
    <div style="font-size: 12px">Message is {{message}}</div>
    <div style="font-size: 12px">Reversed message is {{reversedMessage}}</div>
    <!-- 计算属性和方法的比较，实现同一个效果 -->
    <div style="font-size: 12px">Reversed message is {{test()}}</div>

    <!-- 侦听属性与计算属性比较 -->
    <!-- 侦听属性 -->
    <div style="font-size: 12px">{{fullName}}</div>
    <input style="font-size: 12px" v-model="firstName"/>
    <input style="font-size: 12px" v-model="lastName"/>
    <!-- 计算属性 -->
    <div style="font-size: 12px">{{fullName2}}</div>

  </div>
</template>

<script>
  export default {
    name: 'Demo',
    data () {
      return {
        message: 'Today is Monday.11',
        fullName: '',
        firstName: 'Lee',
        lastName: 'Wake'
      }
    },
    computed: {
      reversedMessage: function () {
        return this.message.split('').reverse().join('')
      },
      fullName2: function () {
        return this.firstName + ' ' + this.lastName
      }
    },
    methods: {
      test () {
        return this.message.split('').reverse().join('')
      }
    },
    watch: {
      firstName: function (val) {
        this.fullName = val + ' ' + this.lastName
      },
      lastName: function (val) {
        this.fullName = this.firstName + ' ' + val
      }
    }
  }
</script>

<style scoped>

</style>
