import Vue from 'vue'

export default () => {
  Vue.filter('format_mysql_date_and_hour', function (value) {
    let date = new Date(value);
    return date.toLocaleDateString('pt-BR')
  }),
    Vue.filter('format_date_show_month', function (value) {
      let date = new Date(value);
      return date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })
    })
}