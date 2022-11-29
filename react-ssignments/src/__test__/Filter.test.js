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

test("On click Job Page Button",()=>{
    render(<Router><Home /></Router>)
    fireEvent.click(screen.getByTestId("FindJobs"))
    render(<Router><FiltersGroup jobsFilters={{categoryId : "FULLTIME",checked: false ,name:"Full Time"}}/></Router>);
    expect(screen.getByTestId("employeeType1")).toBeTruthy()
  })

  test('render filter list ',()=>{
    render(<Router><Home/></Router>);
    const heading = screen.getByTestId("FindJobs")
    userEvent.click(heading);
    const view = render(<Router><FiltersGroup jobsFilters={{categoryId : "FULLTIME",checked: false ,name:"Full Time"}}/></Router>);
    const headingJobs = screen.getByTestId("employeeType1")
    expect(headingJobs).toBeTruthy()
  })

test('filters',()=>{
    const store = jobsListStore
    render(<Router><FiltersGroup jobsFilters={{categoryId : "FULLTIME",checked: false ,name:"Full Time"}}/></Router>);
    store.setJobPackage("1000000")
    expect(store.activeJobPackage).toBe("1000000");
})

test('filtesrs',()=>{
    const store = jobsListStore
    render(<BrowserRouter><FiltersGroup jobsFilters={{categoryId : "FULLTIME",checked: false ,name:"Full Time"}}/></BrowserRouter>)
    store.updatedjob=[];
    const employee = screen.getByTestId("employeeType1");
    fireEvent.click(employee);
    store.onCheckedApp("PartTime")
    expect(store.updatedjob[0]).toBe("PartTime")
    fireEvent.click(employee)
    expect(store.updatedjob.length).toBe(1);
    
})