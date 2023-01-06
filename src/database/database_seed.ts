import { Book } from "../models/book";

export const populateDummyData = async () => {
	// Populate environment with some dummy data in dev
	console.log("🍼 Populating database with dummy data");
	await Book.sync({ force: true });
	await Book.create({
		bookId: 1,
		title: "The Hobbit",
		author: "J. R. R. Tolkien",
	});
};
