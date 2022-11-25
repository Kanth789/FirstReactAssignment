import LoginFormStore from "../Stores/LoginFormStore";
import { fireEvent, getByText, screen,render } from '@testing-library/react';
import Login from "../components/Login";
import App from '../App'
import { use } from "i18next";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "../components/Home";
import FiltersGroup from "../components/FilersGroup";
import Alljobs from "../components/Alljobs";
import jobsListStore from "../Stores/jobsListStore";
import JobPage from "../components/JobPage";
import JobTypes from "../util"
import user from "@testing-library/user-event"
import { Provider } from "mobx-react";
import { idText } from "typescript";

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
   
    it("On click Job Page Button",()=>{
      render(<Router><Home /></Router>)
      fireEvent.click(screen.getByTestId("FindJobs"))
      render(<Router><FiltersGroup jobsFilters={{categoryId : "FULLTIME",checked: false ,name:"Full Time"}}/></Router>);
      expect(screen.getByTestId("employeeType1")).toBeTruthy()
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

// test('should allow user to change ', () => {
//   const clickLogout = jest.fn()
//   const clicked = jest.fn()
//   render(<Router><Header onClickLogout={clickLogout} onChange={clicked}/></Router>)
//   const clickLogoutButton = screen.getAllByRole('option',{nativeName: 'English'})
//   userEvent.change(clickLogoutButton[0]);
//   expect(clickLogout).toHaveBeenCalledTimes(0)
// })

  test('render filter list ',()=>{
    render(<Router><Home/></Router>);
    const heading = screen.getByTestId("FindJobs")
    userEvent.click(heading);
    const view = render(<Router><FiltersGroup jobsFilters={{categoryId : "FULLTIME",checked: false ,name:"Full Time"}}/></Router>);
    const headingJobs = screen.getByTestId("employeeType1")
    expect(headingJobs).toBeTruthy()
  })
  
test('render Job List ',()=>{
    const store = jobsListStore;
    render(<BrowserRouter><JobPage  jobsListStore= {jobsListStore}/></BrowserRouter>);
    expect(store.getData).toBeCalledWith(1)
    const employee = screen.getByText("Frontend Engineer");
    expect(employee).toBeInTheDocument()

})