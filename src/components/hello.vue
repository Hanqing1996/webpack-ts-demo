<template>
  <div id="app">
  </div>
</template>

<script lang="ts">
let s:string='hi'
console.log(s)
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
})
export default class hello extends Vue {
  created () {
  }
}
</script>

<style lang="scss">
</style>