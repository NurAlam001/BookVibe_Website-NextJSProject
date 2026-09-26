'use client'
import Bookcard from '@/Components/shared/Bookcard';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/Types/books';
import React, { useContext } from 'react';

const ListedBooks = () => {
    const {readBooks,wishlist} = useContext(BooksContext);
    return (
        <div className='container mx-auto py-6'>
            <h1 className='my-7 text-4xl text-black py-10 bg-amber-100 text-center rounded-3xl font-bold'>Listed books</h1>


            {/* name of each tab group should be unique */}
<div className="tabs tabs-lift">
  <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books (${readBooks.length})`} />
  <div className="tab-content bg-base-100 border-base-300 p-6">{
    readBooks.length > 0 ? (
    readBooks.map((book:IBook)=> {
        return <Bookcard key={book.bookId} book = {book}/>
    })
):(
    <p className='text-center text-2xl font-bold'>No read Books Found</p>
)}</div>

  <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wishlist Books(${wishlist.length})`}/>
  <div className="tab-content bg-base-100 border-base-300 p-6">{
    wishlist.length > 0 ? (
    wishlist.map((book:IBook)=> {
        return <Bookcard key={book.bookId} book = {book}/>
    })
):(
    <p className='text-center text-2xl font-bold'>No wishlist Found</p>
)
}</div>
</div>
        </div>
    );
};

export default ListedBooks;