
import { IBook } from '@/Types/books';
import Image from 'next/image';
import Link from 'next/link';

interface IBookCardProps{
    book: IBook
}

const Bookcard = ({book}:IBookCardProps) => {
    return (
        <div className="card shadow-sm">
            <figure>
                
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={300}
                    height={200} 
                    />
                    
            </figure>
            <div className="card-body">
                <h2 className="card-title">{book.bookName}</h2>
                {/* <p>{book.review}</p> */}
                <div className="card-actions justify-center">
                    <Link href={`/books/${book.bookId}`}>
                    <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Bookcard;