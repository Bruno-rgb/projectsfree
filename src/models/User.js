const { Model, DataTypes } = require('sequelize')

class User extends Model {
	static init(sequelize) {
		super.init({
			name: DataTypes.STRING,
			surname: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			telephone: DataTypes.STRING,
			cpf: DataTypes.STRING,
			is_admin: DataTypes.BOOLEAN,
		}, {
			sequelize
		})
	}
}

module.exports = User