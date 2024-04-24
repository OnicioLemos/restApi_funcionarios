const Funcionarios = require('../models/Funcionarios');

module.exports = {
    async store(req, res){
        const {nome, cargo, departamento, salario} = req.body;

        const funcionario = await Funcionarios.create({nome, cargo, departamento, salario});
        return res.json(funcionario);
    },

    async index(req, res){
        const funcionarios = await Funcionarios.findAll();
        return res.json(funcionarios);
    },

    async indexOne(req, res){
        const funcionario = await Funcionarios.findAll({
            where: {
                id: req.params.id
            }
        });
        return res.json(funcionario);
    },

    async put(req, res) {
        const {nome, cargo, departamento, salario} = req.body;

        await Funcionarios.update(
            {nome, cargo, departamento, salario},
            {
                where: {
                    id: req.params.id,
                },
            },
        );
        return res.send(`O funcionario de ID: ${req.params.id} foi atualizado!`)
    },

    async delete(req, res) {
        await Funcionarios.destroy({
            where: {
                id: req.params.id
            }
        });
        res.send('Sucesso! Funcionario excluido.')
    }
}