// models/boardModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db').sequelize;

const Board = sequelize.define('Board', {
  category: {
    type: DataTypes.ENUM,
    values: ['study', 'info', 'qna'],
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

module.exports = Board;
