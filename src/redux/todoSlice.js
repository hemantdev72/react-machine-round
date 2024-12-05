import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos= createAsyncThunk('todos/fetchTodos',async()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
  return response.data;
})

const todoSlice=createSlice({
    name:"todo",
    initialState:{
        todos:[],
        status:"idle"
    },
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push(action.payload)
        },
        removeTodo:(state,action)=>{
            state.todos.filter(todo=>todo.id !==action.payload)
        },
        toggleComplete:(state,action)=>{
            const todo=state.todos.find(todo=>todo.id ===action.payload)
            if(todo) todo.completed=!todo.completed
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchTodos.pending,(state)=>{
            state.status="loading";
        })
        .addCase(fetchTodos.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.todos = action.payload;
          })
        .addCase(fetchTodos.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
    }
})

export const {addTodo,removeTodo,toggleComplete}=todoSlice.actions;
export default todoSlice.reducer