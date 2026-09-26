import React from 'react';
import Bookcard from '../shared/Bookcard';
import { IBook } from '@/Types/books';

const getBooks = async() =>{
    const res = await fetch ('http://localhost:3000/booksData.json')
    const data = res.json();
    return data;
}

const Books = async() => {
    const booksData = await getBooks();


    return (
        <div className='container mx-auto my-[70px]'>
            <h1 className='flex justify-center text-2xl text-center mb-4'>Books</h1>
            <div className='grid grid-cols-3 gap-3'>
            {
                booksData.map((book:IBook,index:number) => {
                return <Bookcard key={index} book = {book}/>
            })}
            </div>
        </div>
    );
};

export default Books;