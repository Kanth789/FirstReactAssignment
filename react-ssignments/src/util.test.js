import { fireEvent, getByText, render, screen } from '@testing-library/react';
import Home from './components/Todos/Home';
import Navbar from './components/Todos/Navbar';
import TodoItem from './components/Todos/TodoItem';
import TodoView from './components/Todos/TodoView';
import App from "./App"
import { get } from 'mobx';
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

test("Get the type of Input",()=>{
    render(<Home/>)
    const Type = screen.getAllByPlaceholderText("Add a new todo");
   const FireValue = fireEvent.change(Type,{target:{value:get(Type.value)}});
   console.log(FireValue,"console")
   const linkElement = screen.getByText(FireValue);
   expect(linkElement).toBeInTheDocument();
  
});
describe("Test the todoview compoennt",()=>{
    test("render the button",async ()=>{
        render(<Home/>);
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(3)
    });
   
    
});
