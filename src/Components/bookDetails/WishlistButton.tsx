"use client"

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/Types/books";
import { useContext } from "react";
import { toast } from "react-toastify";

const WishListButton = ({book}:{book: IBook}) => {
    const {wishlist, setwishlist} = useContext(BooksContext);
    
    const handleWishlist = () =>{
        // console.log('button triggerd')
        setwishlist([...wishlist, book])
        toast.success(`You have a wishlist "${book.bookName}"`)

    }
    return (
        <button className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition" onClick={()=>handleWishlist()} >
              Wishlist
        </button>
    );
};

export default WishListButton;