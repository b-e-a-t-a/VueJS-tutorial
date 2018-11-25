var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    seen: true
  },
  methods: { //we update the state of App without touching the DOM
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

app.message = "Hello World!";
app.seen = false;

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      {text: 'Learn JavaScript'},
      {text: 'Learn Vue'},
      {text: 'Build something awesome'}
    ]
  }
});

app4.todos.push({ text: 'New item' });

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
});

Vue.component('todo-item', {
  template: '<li>This is a todo</li>'
});

var app5 = new Vue({
  el: '#app-5'
});

Vue.component('todos-item', {
  props: ['todo'], //like custom attribute
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Bread'}
    ]
  }
})