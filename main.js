Vue.component('todo-item',{
props: ['todo'],
template: '<li>{{todo.name}}</li>'
})

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js! ',
    hasMessage: true,
    persons: [{
        name: "Thomas",
        lastName: "Jefferson",
        age: 40
      },
      {
        name: "Maria",
        lastName: "Bäcker",
        age: 23
      }
    ]
  },
  methods: {
    reverseMessage: function() {
		this.message = this.message.split('').reverse().join('');
    }
  }
})
