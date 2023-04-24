import React, { useEffect, useState } from 'react';
import { fetchData, youtubeOptions } from '../../utils/fetchData';  
import './searchVideos.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import {  Pagination } from "swiper";
import SwiperCore, { Autoplay } from 'swiper';



const SearchVideos = ( ) => {
  
    const [search, setSearch] = useState('');
    const [searched, setSearched] = useState([]);
    const [videos, setVideos] = useState([]);
    const [title, setTitle] = useState('');
    const searcheditem = search;
    
    useEffect(() => {
      
        
          const fetchVideosData = async () =>{
          const youtubeSearchUrl = 'https://simple-youtube-search.p.rapidapi.com';
          const data = await fetchData(`${youtubeSearchUrl}/search?query=${searcheditem} diy`, youtubeOptions);
          console.log(data.results);
          setVideos(data.results);
          setTitle(data.title);
            }
    
        fetchVideosData();
    
        
    }, [searched])


    const handleChange = (e) => {
          setSearch(e.target.value);
    }
   
 const handleSubmit = (e) => {
  
    e.preventDefault();
    setSearched(search);
    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

    }
  
    SwiperCore.use([Autoplay])
  return (
    <>
    <div className=''>
     <form onSubmit={handleSubmit} className='border rounded-lg shadow-md relative flex flex-col add__new__application section__title'>
        <input type="text" value={search} onChange={handleChange} className='w-full py-3 border form__input'/>
        <button type="submit" onClick={handleSubmit} className='search__button'>Search</button>
    </form>
    </div>
    {searched.length > 0 && 
    
   <Swiper className="video__container"
        loop= {true}
        autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
        grabCursor = {true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
        
        >
    {videos.map((item, index) => 
        (
      <div>
        <SwiperSlide className="video__card " key={item.id}>
          <div className="video__top">
            <a
                key={index}
                href={`https://www.youtube.com/watch?v=${item.id}`}
                className='video__link'
                target="_blank"
                rel="noreferrer"
              >
                <img  src={item.thumbnail.url} alt={item.title} className='video__img' />
            </a>
          </div>
          <div className='video__description'>
              <h3 className="video__name">{item.title}</h3>
              <br/>
              <h2 className="video__sub_title">Views: {item.views}</h2>
              <br/>
          </div>
          
          
        </SwiperSlide>
        </div>
          ))} 
      </Swiper>
    }
    </>
  )
}

export default SearchVideos