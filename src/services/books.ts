import { Book, BookType } from "../models/book";

export const getBooks = async () => {
	return Book.findAll();
};

export const getBook = async (bookId: number) => {
	return Book.findOne({
		where: { bookId },
	});
};

export const saveBook = async (book: BookType) => {
	// TODO: fix this!
	// @ts-ignore
	return Book.create(book);
};

// User Story 4 - Update Book By Id Solution
export const updateBook = async (bookId: number, book: BookType) => {
	return Book.update(book, {
		where: {
			bookId,
		},
	});
};
