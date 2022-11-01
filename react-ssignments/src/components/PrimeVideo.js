import { Component } from "react";
import MovieSlider from "./MoviesSlider";
import MovieItem from "./MovieItem";
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const MovieList =[
    {
      uniqueNo:1,
      thumbnailUrl:'https://igimages.gumlet.io/hindi/gallery/movies/tubelight/tubelight_poster.jpg?w=240&dpr=1.0',
      videoUrl:'https://www.youtube.com/embed/XFKz1DACGdE',
      categoryId:'action'
    },
    {
      uniqueNo:2,
      thumbnailUrl:'https://igimages.gumlet.io/hindi/gallery/movies/tubelight/tubelight_poster.jpg?w=240&dpr=1.0',
      videoUrl:'https://www.youtube.com/embed/XFKz1DACGdE',
      categoryId:'action'
    },
    {
      uniqueNo:3,
      thumbnailUrl:'https://igimages.gumlet.io/hindi/gallery/movies/dobaara/dobara_poster.jpg?w=240&dpr=1.0',
      videoUrl:'https://www.youtube.com/embed/XFKz1DACGdE',
      categoryId:'action'
    },
    {
      uniqueNo:4,
      thumbnailUrl:'https://igimages.gumlet.io/hindi/gallery/movies/toilet-ekpremkatha/toilet_poster.jpg?w=240&dpr=1.0',
      videoUrl:'https://www.youtube.com/embed/XFKz1DACGdE',
      categoryId:'comdey'
    },
    {
      uniqueNo:5,
      thumbnailUrl:'https://igimages.gumlet.io/hindi/gallery/movies/raabta/raaabta_poster.jpg?w=240&dpr=1.0',
      videoUrl:'https://www.youtube.com/embed/XFKz1DACGdE',
      categoryId:'comdey'
    },
    {
      uniqueNo:6,
      thumbnailUrl:'https://igimages.gumlet.io/hindi/gallery/movies/sachin-abilliondreams/sachin_poster.jpg?w=240&dpr=1.0',
      videoUrl:'https://www.youtube.com/embed/WYmPbrM51U8',
      categoryId:'comdey'
    },
    {
        uniqueNo:7,
        thumbnailUrl:'https://igimages.gumlet.io/hindi/gallery/movies/munnamichael/munni_poster.jpg?w=240&dpr=1.0',
        videoUrl:'https://www.youtube.com/embed/WYmPbrM51U8',
        categoryId:'action'
      },
      {
        uniqueNo:8,
        thumbnailUrl:'https://igimages.gumlet.io/hindi/gallery/movies/bahubali2/bahubali_poster.jpg?w=240&dpr=1.0',
        videoUrl:'https://www.youtube.com/embed/WYmPbrM51U8',
        categoryId:'action'
      },
      {
        uniqueNo:9,
        thumbnailUrl:'https://igimages.gumlet.io/hindi/gallery/movies/badrinathkidulhania/badri_poster.jpg?w=240&dpr=1.0',
        videoUrl:'https://www.youtube.com/embed/WYmPbrM51U8',
        categoryId:'comdey'
      },
      {
        uniqueNo:10,
        thumbnailUrl:'https://igimages.gumlet.io/hindi/gallery/movies/tubelight/tubelight_poster.jpg?w=240&dpr=1.0',
        videoUrl:'https://www.youtube.com/embed/XFKz1DACGdE',
        categoryId:'action'
      },
      {
        uniqueNo:11,
        thumbnailUrl:'https://igimages.gumlet.io/hindi/gallery/movies/tubelight/tubelight_poster.jpg?w=240&dpr=1.0',
        videoUrl:'https://www.youtube.com/embed/XFKz1DACGdE',
        categoryId:'action'
      },
      {
        uniqueNo:12,
        thumbnailUrl:'https://igimages.gumlet.io/hindi/gallery/movies/dobaara/dobara_poster.jpg?w=240&dpr=1.0',
        videoUrl:'https://www.youtube.com/embed/XFKz1DACGdE',
        categoryId:'action'
      },
      {
        uniqueNo:13,
        thumbnailUrl:'https://igimages.gumlet.io/hindi/gallery/movies/toilet-ekpremkatha/toilet_poster.jpg?w=240&dpr=1.0',
        videoUrl:'https://www.youtube.com/embed/XFKz1DACGdE',
        categoryId:'comdey'
      },
      {
        uniqueNo:14,
        thumbnailUrl:'https://igimages.gumlet.io/hindi/gallery/movies/raabta/raaabta_poster.jpg?w=240&dpr=1.0',
        videoUrl:'https://www.youtube.com/embed/XFKz1DACGdE',
        categoryId:'comdey'
      },
      {
        uniqueNo:15,
        thumbnailUrl:'https://igimages.gumlet.io/hindi/gallery/movies/sachin-abilliondreams/sachin_poster.jpg?w=240&dpr=1.0',
        videoUrl:'https://www.youtube.com/embed/WYmPbrM51U8',
        categoryId:'comdey'
      },
      {
          uniqueNo:16,
          thumbnailUrl:'https://igimages.gumlet.io/hindi/gallery/movies/munnamichael/munni_poster.jpg?w=240&dpr=1.0',
          videoUrl:'https://www.youtube.com/embed/WYmPbrM51U8',
          categoryId:'action'
        },
        {
          uniqueNo:17,
          thumbnailUrl:'https://igimages.gumlet.io/hindi/gallery/movies/bahubali2/bahubali_poster.jpg?w=240&dpr=1.0',
          videoUrl:'https://www.youtube.com/embed/WYmPbrM51U8',
          categoryId:'action'
        },
        {
          uniqueNo:18,
          thumbnailUrl:'https://igimages.gumlet.io/hindi/gallery/movies/badrinathkidulhania/badri_poster.jpg?w=240&dpr=1.0',
          videoUrl:'https://www.youtube.com/embed/WYmPbrM51U8',
          categoryId:'comdey'
        },
  ]

class PrimeVideo extends Component{
    render(){
        const actionMovies = MovieList.filter((eachItem)=>eachItem.categoryId === "action")
        const ComdeyMovies = MovieList.filter((eachItem)=>eachItem.categoryId === "comdey")
        console.log(actionMovies)
        console.log(ComdeyMovies)
        const settings = {
            dots: false,
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        return(
            <div className="main-conatiner">
                <div className="main">
                    <div className="header-img">
                        <img src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png " alt="header-img"/>
                    </div>
                    <div className="action-conatiner">
                        <div className="Action-Movies">
                            <h2>Action Movies</h2>
                            <Slider {...settings}>
                            {actionMovies.map(eachItem=>(<MovieSlider movieData={eachItem} key={eachItem.uniqueNo}/>))}
                            </Slider>
                        </div>
                        <div className="Comdey-Movies">
                        <h2>Comdey Movies</h2>
                        <Slider {...settings}>
                        {ComdeyMovies.map(eachItem=>(<MovieSlider movieData={eachItem} key={eachItem.uniqueNo}/>))}
                        </Slider>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PrimeVideo

