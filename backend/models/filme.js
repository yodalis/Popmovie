'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/
module.exports = (sequelize, DataTypes) => {
    let Filme = sequelize.define('Filme',{
		idFilme: {
			field: 'idFilme',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nomeFilme: {
			field: 'nomeFilme',
			type: DataTypes.STRING,
			allowNull: false
		},
		anoFilme: {
			field: 'anoFilme',
			type: DataTypes.STRING,
			allowNull: false
		},
		fkUsuario: {
			field: 'fkUsuario',
			allowNull: false,
			type: DataTypes.INTEGER,
				references: {
					model: 'Usuario',
					key: 'idUsuario'
				}
        },
        imgFilme: {
            field: 'imgFilme',
            type: DataTypes.STRING,
            allowNull: false
        },

        avaliacaoFilme: {
            field: 'avaliacaoFilme',
            type: DataTypes.STRING,
            allowNull: false
        }
	}, 
	{
		tableName: 'Filme', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Filme;
};
