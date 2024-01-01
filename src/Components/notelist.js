import { useSelector,useDispatch } from "react-redux";
//import { deleteNote } from "../Redux/Actions/note";
import { actions } from "../Redux/Reducers/notereducrs";
export default function List(){
const notes=useSelector((state)=>(state.notes));
console.log(useSelector((state)=>state));
const dispatch=useDispatch();




return(
    <>
    <ul>
        {
            notes.map((note,index)=>(
                <li key={index} type="A">
                    <p>{note.text} <button  onClick={()=>dispatch(actions.delete(index))}> Delete</button></p>
                </li>
            ))
        }
    </ul>
    </>
)
}