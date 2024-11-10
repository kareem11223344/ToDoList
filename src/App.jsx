import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const inputRef = useRef()
  let handelAddTodo = () => {
    const text = inputRef.current.value;
    const newItem = { completed: false, text }
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  }

  const handelItemDone = (index) => {
    let newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed; //ture
    setTodos(newTodos)
  }
  // console.log(todos);
  const handelDeleteItem = (index) =>{
    let newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos);
  }
  return (
    <>
      <div className="header border-gray-100 mx-auto">
        <h2 className='text-3xl text-gray-400 font-bold text-center mt-10'>To Do List</h2>
        <div className="container flex text-center items-center">
          <ul className='text-gray-600 mb-5 mx-auto'>
            {todos.map(({ text, completed }, index) => {
              return <div className="main flex cursor-pointer">
                <li className={completed ? 'done' : ''} key={index} onClick={() => handelItemDone(index)}>{text}</li>
                <span className='font-semibold ms-80 my-1 cursor-pointer' onClick={() => handelDeleteItem(index)}>❌</span>
              </div>
            })}
          </ul>
          <input className='p-1' type="text" placeholder='Enter item...' ref={inputRef} />
          <button onClick={handelAddTodo} className='bg-gray-600 text-white p-1 w-16 rounded-md'>Add</button>
        </div>
      </div>


    </>
  )
}

export default App
