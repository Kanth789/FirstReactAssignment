import LoginFormStore from "../JobSection/Stores/LoginFormStore";
import { fireEvent, getByText, screen,render ,waitFor} from '@testing-library/react';
import Login from "../Common/Login/Login";
import App from '../App'
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Header from "../Common/Header/Header";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "../Common/Home/Home";
import jobsListStore from "../JobSection/Stores/jobsListStore";
import JobPage from "../JobSection/routes/JobPageRoute/JobPage";
import ProfileFixture from "../JobSection/Serivce/index.fixture";
import { Provider } from "mobx-react";


const JobsListStore = new jobsListStore()






const updatedFullJobs = {
  company_logo_url:"https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.pn",
  id:"2b40029d-e5a5-48cc-84a6-b6e12d25625d",
  employment_type:"Freelance",
  job_description:"The Experimentation Platform team builds internal tools with a big impact across the company. We are looking to add a UI engineer to our team to continue to improve our experiment", 
  location:"Delhi",
  package_per_annum:"10LPA",
  rating:4, 
  title:"Frontend Engineer"
}
global.fetch = jest.fn(()=>{
  Promise.resolve({
    json:()=>Promise.resolve(updatedFullJobs)
  })
})


test("login page details",()=>{
    render(<App/>)
    const labelUserName = screen.getByLabelText('USERNAME',{selector: 'input'})
    expect(labelUserName).toBeTruthy()
    const labelPasswordName = screen.getByLabelText('PASSWORD',{selector: 'input'})
    expect(labelPasswordName).toBeTruthy()
});
test("UserName",()=>{
    render(<App/>)
    const labelUserName = screen.getByLabelText('USERNAME',{selector: 'input'})
    userEvent.type(labelUserName,"rahul")
    console.log(labelUserName.value,"USERNAME")
    expect(labelUserName).toBeTruthy()
    const labelPasswordName = screen.getByLabelText('PASSWORD',{selector: 'input'})
    userEvent.type(labelPasswordName,"rahul@2021")
    console.log(labelPasswordName.value,"PASSWORD")
    expect(labelPasswordName).toBeTruthy()
    fireEvent.click(screen.getByRole('button'));
 
});
test("UserName test",()=>{
    LoginFormStore.setUserName("Kiran")
    expect(LoginFormStore.username).toMatch("Kiran")
})
test("Password test",()=>{
    LoginFormStore.setPassword("Kiran356546")
    expect(LoginFormStore.username).toMatch("Kiran")
})

test("testing the Home text",()=>{
   render(<Router><Home /></Router>);
   const linkElement = screen.getByText("Home-para");
  expect(linkElement).toBeTruthy();
})
describe("Navbar describe",()=>{
    it("Navbar",()=>{
        render(<Router><Header/></Router>)
        expect(screen.getAllByRole('option').length).toBe(2)
    })
   
    
    it("user name and passsword",()=>{
     render(<Router><Login /></Router>)
     LoginFormStore.setUserName("Kiran")
     expect(LoginFormStore.username).toMatch("Kiran")
     LoginFormStore.setPassword("Kiran356546")
    expect(LoginFormStore.username).toMatch("Kiran")
     const Button = screen.getByText("Login")
     fireEvent.click(Button)
    
    })
 
    
})

 

test('render Job List ',()=>{
   
    render(<BrowserRouter ><Provider Jobvalue={JobsListStore} ><JobPage /></Provider></BrowserRouter>);
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(`https://apis.ccbp.in/jobs?employment_type=&minimum_package=&search=`,{"headers": {"Authorization": "Bearer undefined"}, "method": "GET"})
     
})

test('render search Bar Component',()=>{
  JobsListStore.setSearchValue("kiran")
  expect(JobsListStore.searchInput).toBe("kiran")
})


test("profile Data",()=>{
  jest.spyOn(JobsListStore,'getData')
  render(
    <BrowserRouter><Provider Jobvalue={JobsListStore} ><JobPage /></Provider></BrowserRouter>
  )
  expect(JobsListStore.getData).toBeCalledTimes(1);
  waitFor(()=> {const profileTitle = screen.findByText("Kiran");
 expect(profileTitle).toBeInTheDocument()})
});