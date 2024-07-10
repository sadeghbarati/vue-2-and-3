// @ts-nocheck

// only for sharing => convert mixins to composables https://github.com/LinusBorg/vue-mixable

export const todoMixin = {
  created() {
    console.log('Todo components created')
  },
  data() {
    return {
      todos: [],
      newTodo: "",
    }
  },
  methods: {
    keyDownEventFromMixin(e) {
      if(e.target.value == '')
        return 

      let todosLength = this.todos.length + 1

      this.todos.push({
        title: e.target.value,
        id: todosLength++,
        completed: false
      })

      this.newTodo = '';
      console.log(this.todos)
    }
  }
}
