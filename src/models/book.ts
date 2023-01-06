import { DataTypes } from "sequelize";

import { sequelize } from "../database/database";

export const Book = sequelize.define(
	"Book",
	{
		// Model attributes are defined here
		bookId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		author: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		modelName: "Book",
		timestamps: false,
	}
);

export type BookType = typeof Book;
