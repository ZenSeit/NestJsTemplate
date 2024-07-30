import { Author } from "./author.entity";

export interface Book {
  id?: number;
  title: string;
  authors: Author[];
  year:number
}
