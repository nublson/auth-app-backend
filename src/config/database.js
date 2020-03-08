module.exports = {
	host: '127.0.0.1',
	username: 'postgres',
	password: '4218',
	database: 'nodeauth',
	dialect: 'postgres',
	logging: false, // Diminuir o números de logs
	define: {
		timestamps: true,
		underscored: true, // Utilizar o formato underline no lugar de CamelCase
		underscoredAll: true // Aplicar a regra underscored nos campos da tabela também
	}
}
