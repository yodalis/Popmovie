'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/
module.exports = (sequelize, DataTypes) => {
    let GeneroFilme = sequelize.define('GeneroFilme',{
        
		idgeneroFilme: {
			field: 'idgeneroFilme',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		
        fkFilme: {
			field: 'fkFilme',
			allowNull: false,
			type: DataTypes.INTEGER,
				references: {
					model: 'Filme',
					key: 'idFilme'
				}
        },

        fkGenero: {
			field: 'fkGenero',
			allowNull: false,
			type: DataTypes.INTEGER,
				references: {
					model: 'genero',
					key: 'idGenero'
				}
        },
     
	}, 
	{
		tableName: 'generoFilme', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return GeneroFilme;
};
