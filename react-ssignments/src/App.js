import logo from './logo.svg';
import './App.css';
import TechnologyDetails from './components/TechnologyDetails';
function App() {
  const technology = [
    {
      uniqueNo:1,
      className:'Red',
      heading:'Data Scientist',
      Para:'Data scientists gather and analyze large sets of structured and unstructed data',
      imgUrl:'https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
    },
    {
      uniqueNo:2,
      className:'Blue',
      heading:'IOT Developer',
      Para:'IoT DEvelopers are professional who can develop,manage, and mointor Iot devices',
      imgUrl:'https://assets.ccbp.in/frontend/react-js/primary-icon-img.png' 
    },
    {
      uniqueNo:3,
      className:'Green',
      heading:'VR Developer',
      Para:'A VR developer creates completely new digital enviroments that people can see.',
      imgUrl:'https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
    },
    {
      uniqueNo:4,
      className:'Yellow',
      heading:'ML Engineer',
      Para:'Machine Learning engineers feed data into models defined by data scientists.',
      imgUrl:'https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
    }
  ]

  const Element = () =>(
    <div className='main-div'>
      <div className='header'>
      <div className="main-heading">
            <h2 className="heading">Learn 4.0 Technologies</h2>
        </div>
        <div className="paragraph-part">
            <p className="para">Get Trained by alumni of IITs and top companies like Amazon,Microsoft,Intel,Nvida,Qualcomm,etc.Learn directly from professionals involved in Product Development</p>
        </div>
        </div>
        <div className='box'>
     {technology.map((eachItem)=>(
      <TechnologyDetails technology={eachItem} key={eachItem.uniqueNo}></TechnologyDetails>
     ))}
        </div>
    </div>
  )
  return<Element/>
}

export default App;
