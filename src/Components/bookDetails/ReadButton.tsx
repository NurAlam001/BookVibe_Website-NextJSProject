"use client"

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/Types/books";
import { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({book}:{book: IBook}) => {
    const {readBooks, setreadBooks} = useContext(BooksContext);
    
    const handleReadBook = () =>{
        // console.log('button triggerd')
        setreadBooks([...readBooks, book])
        toast.success(`You have read "${book.bookName}"`)

    }
    return (
        <button className="px-5 py-2 rounded-lg bg-linear-to-r from-blue-500 to-purple-600 text-white font-medium hover:opacity-90 transition" onClick={() => handleReadBook()}>
              Read
        </button>
    );
};

export default ReadButton;