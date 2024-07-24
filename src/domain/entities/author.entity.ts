import { Book } from "./book.entity";

export interface Author {
    id: number;
    name: string;
    country: string;
    books: Book[];
    }