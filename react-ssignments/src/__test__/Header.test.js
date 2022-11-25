import { fireEvent, getByText, screen,render } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header"
import Home from "../components/Home";
beforeAll(() => {
	render(<BrowserRouter><Header /></BrowserRouter>);
});

test("Select Language Option",()=>{
    const select = (n)=>{
        expect(n).toMatch("English")
    }
    render(<BrowserRouter><Header onChange={select}/></BrowserRouter>);
    
}) 