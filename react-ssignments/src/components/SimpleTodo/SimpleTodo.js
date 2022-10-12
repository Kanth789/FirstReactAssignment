const SimpleTodo = (props) =>{
    const{InitialTodoList,onDeleteTodo} = props
    const {uniqueNo,content} = InitialTodoList
    const onDelete = () =>{
        onDeleteTodo(uniqueNo)
        console.log(uniqueNo)
    }
    return(
       
            <div className="div1">
                <p>{content}</p>
                <button onClick={onDelete}>Delete</button>
            </div>
      
    )
}
export default SimpleTodo
