import { useState } from "react";

function TodoForm(props) {
    const[value, setValue] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value) { // this if statement is just saying if the value is an empty string, don't add it, only add it if there's a value
            return;
        }
        props.addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={value}
                type="text" 
                placeholder="Add Todo..."
                onChange={(event) => setValue(event.target.value)} 
                />
        </form>
    );
}

export default TodoForm;