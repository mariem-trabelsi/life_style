import React from 'react';

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAddNewItem:(e:React.FormEvent)=> void
};

const InputFieled : React.FC<Props>= ({todo, setTodo, handleAddNewItem}) => {
 return(
    <form className="input">
        <input placeholder='Enter a task' className='input__box' type="input" value={todo} onChange={(e)=>setTodo(e.target.value)} />
        <button className="input__submit" onSubmit={handleAddNewItem}>Go</button>
    </form>
 )
    
}

export default InputFieled;
