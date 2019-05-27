'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the title for your book'
      }
    },
    author: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter an author'
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Pease input a description'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Pease input a quantity'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        as: 'user_id',
      }
    }
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
    Book.belongsTo(models.User, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    });
  };
  return Book;
};