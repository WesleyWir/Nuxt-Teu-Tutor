import Vue from 'vue'
const { DateTime } = require("luxon");

export default () => {
  Vue.filter('format_mysql_date_and_hour', function (value) {
    return DateTime.fromISO(value).toLocaleString(DateTime.DATE_SHORT)
  }),
    Vue.filter('format_date_show_month', function (value) {
    return DateTime.fromISO(value).toLocaleString(DateTime.DATE_FULL)
    })
}