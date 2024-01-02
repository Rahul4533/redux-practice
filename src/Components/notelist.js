import { useSelector,useDispatch } from "react-redux";
//import { deleteNote } from "../Redux/Actions/note";
import { actions } from "../Redux/Reducers/notereducrs";
import { useState } from "react";
import { notereducer } from "../Redux/Reducers/notereducrs";
export default function List(){
const notes=useSelector(notereducer);
const [isclicked,setclick]=useState([false,false,false,false,]);

const handelcheckbox=(index)=>{
    
   const updatecheckbox=[...isclicked];
   updatecheckbox[index]=!updatecheckbox[index];
   setclick(updatecheckbox);
   console.log(updatecheckbox,index);

}
const dispatch=useDispatch();




return(
    <>
    <ul>
        {
            notes.map((note,index)=>(
                
                <div className="check" key={index} >
                <input type="checkbox" checked={isclicked[index]} onChange={()=>handelcheckbox(index)}/> 
                <li  >
                    <p>{note.text} <button  disabled={!isclicked[index]} onClick={()=>dispatch(actions.delete(index))}> Delete</button></p>
                </li>
                </div>
                
                
            ))
        }
    </ul>
    </>
)
}