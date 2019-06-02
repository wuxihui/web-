import main from './main';

// console.log(1)

// import './style.css';
// import './styles.sass';
// import './styles.scss'

import Vue from 'Vue';
import APP from './APP.vue';
new Vue({
    el: '#app',
    template: `
    <APP />
    `,
    components: {
        App: App
    }
}) 