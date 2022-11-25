import { BrowserRouter } from "react-router-dom"

import { render, screen } from '@testing-library/react';
import Alljobs from "../components/Alljobs";
const AlljobData = {
    company_logo_url:"https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.pn",
    id:"2b40029d-e5a5-48cc-84a6-b6e12d25625d",
    employment_type:"Freelance",
    job_description:"The Experimentation Platform team builds internal tools with a big impact across the company. We are looking to add a UI engineer to our team to continue to improve our experiment", 
    location:"Delhi",
    rating:4, 
    title:"Frontend Engineer",
    package_per_annum: "10 LPA"
    }
test("ALl Job",()=>{
  render(<BrowserRouter><Alljobs AlljobData={AlljobData} id={AlljobData.id} /></BrowserRouter>)
  const location = screen.getByText(AlljobData.title)
  expect(location).toBeInTheDocument()
})