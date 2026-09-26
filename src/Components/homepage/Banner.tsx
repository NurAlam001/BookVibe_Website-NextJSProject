import Image from 'next/image';
import React from 'react';
import banner from '@/assets/hero_img.jpg'

const Banner = () => {
    return (
        <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-10 items-center bg-linear-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden">

      {/* Content */}
      <div className="space-y-6 text-white">

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Books to Freshen
          <br />
          Up Your Bookshelf
        </h2>

        <p className="text-lg text-gray-200 max-w-lg">
          Discover inspiring reads, timeless classics, and bestselling books
          that will transform your reading experience.
        </p>

        <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition duration-300 shadow-md">
          View the List
        </button>
      </div>

      {/* Image */}
      <div className="flex justify-center">
        <Image src={banner} alt='banner'/>
      </div>

    </div>
  </div>
</section>
    );
};

export default Banner;