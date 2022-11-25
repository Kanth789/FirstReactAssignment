
import { BrowserRouter } from "react-router-dom"
import SimilarJob from "../components/SimilarJob"
import { render, screen } from '@testing-library/react';
const similarData = {
    company_logo_url:"https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.pn",
    id:"2b40029d-e5a5-48cc-84a6-b6e12d25625d",
    employment_type:"Freelance",
    job_description:"The Experimentation Platform team builds internal tools with a big impact across the company. We are looking to add a UI engineer to our team to continue to improve our experiment", 
    location:"Delhi",
    rating:4, 
    title:"Frontend Engineer"
    }
test("similar Job",()=>{
  render(<BrowserRouter><SimilarJob similarData={similarData}/></BrowserRouter>)
  const location = screen.getByText(similarData.title)
  expect(location).toBeInTheDocument()
})