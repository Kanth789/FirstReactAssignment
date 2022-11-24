import { fireEvent, getByText, render, screen } from '@testing-library/react';
import Home from './components/Todos/Home';
import Navbar from './components/Todos/Navbar';
import TodoItem from './components/Todos/TodoItem';
import TodoView from './components/Todos/TodoView';
import UserStore from './components/UserStore';
import App from "./App";
import { get } from 'mobx';
import React from 'react';
import getLocalStoreItem from './uitl'
jest.mock('./uitl', ()=>{
    return {getLocalStoreItem:()=>[],setLocalStoreItem:()=>[]}
})
console.log(UserStore.todos)
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
    test("render  dff the button",async ()=>{
        render(<TodoItem/>);
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(4)
    });
    test("render the Todoview",async ()=>{
        render(<TodoView todoListStore={UserStore} todo={ {id :1,
            name :"KIran",
            isChecked:false,}}
            />);
            const linkElement = screen.getByText(/Delete/i);
        
            expect(linkElement).toBeInTheDocument();
    });
    test("render save button",()=>{
      UserStore.SaveTodo()
    })
   
    test("create todo",()=>{
        console.log(UserStore.todos)
        UserStore.createTodo()
        expect(UserStore.todos.length).toBe(1)
    })
    
    test("creatdsf",()=>{
        UserStore.toggle(UserStore.todos[0].id)
        expect(UserStore.todos[0].isChecked).toBe(true)
    })
    test("deleteTodo",()=>{
        UserStore.deleteTodo(UserStore.todos[0].id)
        expect(UserStore.todos.length).toBe(0)
    })
});



test("get",()=>{
UserStore.createTodo()
UserStore.createTodo()
UserStore.createTodo()
expect(UserStore.filterTodos).toStrictEqual(UserStore.todos.filter(eachItem=>(eachItem.isChecked === true)))

})