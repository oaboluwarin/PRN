const todoArray = [
  {
    item: 'write code',
    done: false,
  },
  {
    item: 'read a book',
    attached: true,
  },
  {
    item: 'prepare for assessment',
    attached: false,
  },
]

export default {
  async getAllTodos(req, res) {
    try {
      const todos = await todoArray;
      res.json({
        count: todos.length,
        todos
      })
    } catch (error) {
      res.send({ error })
    }
  },
}
