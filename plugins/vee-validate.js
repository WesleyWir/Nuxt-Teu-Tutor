import Vue from 'vue'
import { extend, configure, ValidationObserver, ValidationProvider } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/pt_BR'

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  })
})

extend('validPhone', (value, length) => {
  return value.length >= length ? true : '{_field_} inválido'
})

extend('validMultSelect', (value, args) => {
  if (value.length >= args[0] && value.length <= args[1]) {
    return true
  }
  return `Máximo de categorias: ${args[1]}`
})

extend('validZipCode', (value, length) => {
  return value.length === length[0] ? true : 'Formato 99.999-999'
})

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
