import { ApiProperty } from "@nestjs/swagger";

export class CreateBookDto {
    @ApiProperty({ description: 'The title of the book' })
    title: string;
    @ApiProperty({ description: 'The authors of the book', isArray: true ,default: []})
    authors: number[];
    @ApiProperty({ description: "The year the book was published" })
    year: number;
}