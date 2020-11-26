'use strict';

module.exports = (sequelize, DataTypes) => {
    let Ator = sequelize.define('Ator',{
		idAtor: {
			field: 'idAtor',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nomeAtor: {
			field: 'nomeAtor',
			type: DataTypes.STRING,
			allowNull: false
		},

     
	}, 
	{
		tableName: 'ator', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Ator;
};
