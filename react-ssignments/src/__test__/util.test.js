import LoginFormStore from "../Stores/LoginFormStore";
import { fireEvent, getByText, screen,render } from '@testing-library/react';
import Login from "../Common/Login";
import App from '../App'
import { use } from "i18next";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "../components/Home";
import FiltersGroup from "../components/FilersGroup";
import Alljobs from "../components/AllJobs/Alljobs";
import jobsListStore from "../Stores/jobsListStore";
import JobPage from "../components/JobsPage/JobPage";
import JobTypes from "../util"
import user from "@testing-library/user-event"
import { Provider } from "mobx-react";
import { idText } from "typescript";
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
    const store = jobsListStore;
    render(<BrowserRouter><JobPage  jobsListStore= {jobsListStore}/></BrowserRouter>);
    expect(fetch).toHaveBeenCalledTimes(2)
    expect(fetch).toHaveBeenCalledWith(`https://apis.ccbp.in/jobs?employment_type=&minimum_package=&search=`,{"headers": {"Authorization": "Bearer undefined"}, "method": "GET"})
     
})

test('render search Bar Component',()=>{
  const store = jobsListStore
  store.setSearchValue("kiran")
  expect(store.searchInput).toBe("kiran")
})

