'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/
module.exports = (sequelize, DataTypes) => {
    let AtorFilme = sequelize.define('AtorFilme',{
		idAtorFilme: {
			field: 'idAtorFilme',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		fkAtor: {
			field: 'fkAtor',
			allowNull: false,
			type: DataTypes.INTEGER,
				references: {
					model: 'ator',
					key: 'idAtor'
				}
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
     
	}, 
	{
		tableName: 'atorFilme', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return AtorFilme;
};
