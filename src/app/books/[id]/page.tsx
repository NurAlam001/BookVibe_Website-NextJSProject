
import ReadButton from '@/Components/bookDetails/ReadButton';
import WishListButton from '@/Components/bookDetails/WishlistButton';
import { IBook } from '@/Types/books';
import Image from 'next/image';
interface BookdetailsPageprops {
    params: Promise<{
        id: string
    }>;
}
const getBooks = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_UR}/booksData.json`)
    const data = res.json();
    return data;
}

const BookDetailspage = async ({ params }: BookdetailsPageprops) => {
    const { id } = await params;
    const booksData = await getBooks();
    const book = booksData.find((book: IBook ) => String(book.bookId) === String(id)) as IBook;

    return (
        <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        
        {/* Image Section */}
        <figure className="lg:w-1/3">
          <Image
            src={book.image}
            alt={book.bookName}
            width={150}
            height={50}
            className="object-cover w-full h-full"
          />
        </figure>

        {/* Content Section */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                {book.bookName}
              </span>
            </h2>
            <p className="text-gray-600 text-sm mb-4">by {book.author}</p>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-4">
            <ReadButton book ={book}/>
            <WishListButton book = {book}/>
          </div>
        </div>
      </div>
    </div>
    );
};

export default BookDetailspage;