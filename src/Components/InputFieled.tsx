import React from 'react';

interface Props{
    todo:String;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
}

const InputFieled= ({todo, setTodo}:Props)=> {
 return(
    <form className="input">
        <input placeholder='Enter a task' className='input__box' type="input" value={todo} onChange={(e)=>setTodo(e.target.value)} />
        <button className="input__submit" type="submit">Go</button>
    </form>
 )
    
}

export default InputFieled;
