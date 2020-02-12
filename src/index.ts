let div = document.createElement('div')

document.body.appendChild(div)


import Vue from 'vue'
import hello from '../src/components/hello.vue'

Vue.config.productionTip = false

new Vue({
    el: div,
    render: h => h(hello),
})

import str from './test'
console.log(str)
