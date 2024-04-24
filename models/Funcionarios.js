const {DataTypes} = require ('sequelize')
const sequelize = require('../config/sequelize.js')

const Funcionarios = sequelize.define('funcionarios', {
    nome: DataTypes.STRING,
    cargo: DataTypes.STRING,
    departamento: DataTypes.STRING,
    salario: DataTypes.FLOAT
});

module.exports = Funcionarios;