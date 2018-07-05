const usersArray = [
  {
    name: 'oreoluwa',
    attached: false,
  },
  {
    name: 'mariam',
    attached: true,
  },
  {
    name: 'fisayomi',
    attached: true,
  },
]

export default {
  async getAllUsers(req, res) {
    try {
      const users = await usersArray.map(user => user.name);
      res.json({
        count: users.length,
        users
      })
    } catch (error) {
      res.send({ error })
    }
  },
}
