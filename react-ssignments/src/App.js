import logo from './logo.svg';
import './App.css';
import BannerProfile from './components/BannerProfile';
function App() {
   const bannerDetails =[
    {
      className:'Firstdiv',
      uniqueNo : 1,
      heading:'The Seasons Latest',
      imgUrl:'https://i.ibb.co/QFLjshv/Screenshot-from-2022-10-11-12-09-44.png',
      para : 'Get the seasons all latest designs in a flick of your hand'
      
    },
    {
      className:'Seconddiv',
      uniqueNo : 2,
      heading:'Our New Designs',
      imgUrl:'https://i.ibb.co/tHQLNxn/Screenshot-from-2022-10-11-12-09-59.png',
      para : 'Get the designs developed by our in-house team all for yoyrself'
    },
    {
      className:'Thirddiv',
    uniqueNo : 3,
    heading:'Insiders',
    imgUrl:'https://i.ibb.co/YQYWjk9/Screenshot-from-2022-10-11-12-10-31.png',
    imgUrl2:'https://i.ibb.co/QFLjshv/Screenshot-from-2022-10-11-12-09-44.png',
    para : 'Get the top class products for yourself with an extra off'
    }
   ]

   const Element = () =>(
       <div className='main-conatiner'>
        <div className='banner-main'>
        {bannerDetails.map((eachItem)=>(
          <BannerProfile bannerDetails = {eachItem} key={eachItem.uniqueNo}></BannerProfile>
        ))}
        </div>
       </div>
   )
   return<Element/>
}

export default App;
