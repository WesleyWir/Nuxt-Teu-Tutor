import Vue from 'vue'

export default () => {
Vue.filter('toBRCurrency', function (value) {
    if (typeof value !== "number") {
        return value;
    }

    return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
});
}