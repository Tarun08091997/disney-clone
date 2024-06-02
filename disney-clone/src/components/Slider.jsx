import React, { useEffect, useRef, useState } from 'react';
import { getTrandingMovies } from '../services/ApiServices';
import { HiChevronRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

export default function Slider() {
    const [movieList, setMovieList] = useState([]);
    const scrollRef = useRef(null);
    const [imageWidth, setImageWidth] = useState(0);

    const getTrandingMovieData = () => {
        getTrandingMovies()
            .then(res => setMovieList(res.data.results))
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getTrandingMovieData();
    }, []);

    useEffect(() => {
        const updateImageWidth = () => {
            if (scrollRef.current) {
                const imageElement = scrollRef.current.querySelector('img');
                if (imageElement) {
                    setImageWidth(imageElement.clientWidth);
                }
            }
        };
        updateImageWidth();
        window.addEventListener('resize', updateImageWidth);
        return () => {
            window.removeEventListener('resize', updateImageWidth);
        };
    }, [movieList]);

    const scrollLeft = () => {
        scrollRef.current.scrollLeft -= imageWidth;
    };

    const scrollRight = () => {
        scrollRef.current.scrollLeft += imageWidth;
    };

    return (
        <div className="relative w-full">
            <HiChevronLeft 
                className='text-white text-[40px] absolute top-1/2 transform -translate-y-1/2 left-2 cursor-pointer hover:scale-150 transition-all duration-100 ease-in-out z-10' 
                onClick={scrollLeft} 
            />
            <HiChevronRight 
                className='text-white text-[40px] absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer hover:scale-150 transition-all duration-100 ease-in-out z-10' 
                onClick={scrollRight} 
            />
            <div className='w-full flex overflow-x-auto py-3 scrollbar-hide scroll-smooth' ref={scrollRef}>
                {movieList.map((movie, index) => (
                    <div key={index} className='flex-shrink-0 w-full pr-4'>
                        <img 
                            className='h-[330px] w-full object-left-top object-cover rounded-md hover:border-[3px] border-gray-100 transition-all duration-100 ease-in-out' 
                            src={IMAGE_BASE_URL + movie.backdrop_path} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
