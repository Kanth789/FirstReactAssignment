import { fireEvent, getByText, render, screen } from '@testing-library/react';
import Home from './components/Todos/Home';
import Navbar from './components/Todos/Navbar';
import TodoItem from './components/Todos/TodoItem';
import TodoView from './components/Todos/TodoView';
import App from "./App"
test("test the title of page",()=>{
    render(<App/>);
    const linkElement = screen.getByText(/Todo/i);
    expect(linkElement).toBeInTheDocument();
});
test("render login component in the document",()=>{
render(<Home/>);
    const inputName =  screen.getAllByPlaceholderText("Add a new todo");
    expect(inputName).toBeTruthy();
});


describe("Test the todoview compoennt",()=>{
    test("render the button",async ()=>{
        render(<Home/>);
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(3)
    });
   
    
});
