import LoginFormStore from "../JobSection/Stores/LoginFormStore";
import { fireEvent, getByText, screen,render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "../Common/Home/Home";
import FiltersGroup from "../JobSection/components/JobsPage/FilersGroup";
import jobsListStore from "../JobSection/Stores/jobsListStore";
import ProfileApi from "../JobSection/Serivce/index.api";
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

test("On click Job Page Button",()=>{
    render(<Router><Home /></Router>)
    fireEvent.click(screen.getByTestId("FindJobs"))
    render(<Router><FiltersGroup Jobvalue={JobsListStore} jobsFilters={{categoryId : "FULLTIME",checked: false ,name:"Full Time"}}/></Router>);
    expect(screen.getByTestId("employeeType1")).toBeTruthy()
  })

  test('render filter list ',()=>{
    render(<Router><Home/></Router>);
    const heading = screen.getByTestId("FindJobs")
    userEvent.click(heading);
    const view = render(<Router><FiltersGroup Jobvalue={JobsListStore} jobsFilters={{categoryId : "FULLTIME",checked: false ,name:"Full Time"}}/></Router>);
    const headingJobs = screen.getByTestId("employeeType1")
    expect(headingJobs).toBeTruthy()
  })

test('filters',()=>{
   
    render(<Router><FiltersGroup Jobvalue={JobsListStore} jobsFilters={{categoryId : "FULLTIME",checked: false ,name:"Full Time"}}/></Router>);
    JobsListStore.setJobPackage("1000000")
    expect(JobsListStore.activeJobPackage).toBe("1000000");
})

test('filtesrs',()=>{
    render(<BrowserRouter><FiltersGroup Jobvalue={JobsListStore} jobsFilters={{categoryId : "FULLTIME",checked: false ,name:"Full Time"}}/></BrowserRouter>)
    JobsListStore.updatedjob=[];
    const employee = screen.getByTestId("employeeType1");
    fireEvent.click(employee);
    JobsListStore.onCheckedApp("PartTime")
    expect(JobsListStore.updatedjob[0]).toBe("PartTime")
    fireEvent.click(employee)
    expect(JobsListStore.updatedjob.length).toBe(1);
    
})

