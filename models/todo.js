const TodoModel = function (sequelize, DataTypes) {
  const Todo = sequelize.define('Todos', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  // Class method
  Todo.associate = (models) => {
    Todo.belongsTo(models.Users, {
      onDelete: 'CASCADE',
      foreignKey: 'userId',
    });
  };
  return Todo;
};

export default TodoModel
