import Vue from 'vue'

const VueBus = undefined !== window.VueBus ? window.VueBus : new Vue({});

export default VueBus;
