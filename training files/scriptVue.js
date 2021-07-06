Vue.component('tech-list', {
    props: ['techs'],
    template: `
    <ul>
        <li v-for="tech in techs"> {{ tech }} </li>
    </ul>`
}),

new Vue({
    el: '#root',
    component: [
        'tech-list'
    ],
    data: {
        greeting: 'Hello Vue',
        count: 1,
        email: '',
        paragraph: '',
        once: 'only one time',
        techs: [
            'java',
            'php',
            'laravel',
            'vue.js',
            'react',
            'angular'
        ],
        // techs: [
        //     { name: 'java'},
        //     { name: 'php'},
        //     { name: 'laravel'},
        // ]
        newTech: '',
    },
    methods: {
        addTech: function() {
            this.techs.push(this.newTech);
            this.newTech = '';
            // return this.cats.push({ name: this.newTech});
        }
    },
    filters: {
        capitalize: function(value) {
            return value.toUpperCase();
        },
        addDash: function(value) {
            return '- ' + value;
        }
    },
    computed: {
        dashTech: function() {
            if(this.newTech.length > 1) {
                return '- ' + this.newTech;
            }
        }
    }
})