import Vue from 'vue'

export default () => {
  Vue.filter('format_mysql_date_and_hour', function (value) {
    let date = new Date(value);
    return date.toLocaleDateString('pt-BR')
  })
}