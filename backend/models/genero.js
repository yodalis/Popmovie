'use strict';

module.exports = (sequelize, DataTypes) => {
    let Genero = sequelize.define('Genero',{
		idGenero: {
			field: 'idGenero',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nomeGenero: {
			field: 'nomeGenero',
			type: DataTypes.STRING,
			allowNull: false
		},

     
	}, 
	{
		tableName: 'genero', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Genero;
};
