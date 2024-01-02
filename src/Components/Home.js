import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { Count, addNote } from "../Redux/Actions/note";
import { resetnotification } from "../Redux/Reducers/notificationReducer";
import { actions } from "../Redux/Reducers/notereducrs";
export default function Home() {
  let count = useSelector((state)=> state.Reducers.count);
  const message=useSelector((state)=>state.notificationReducer.message)
  console.log(message);
  const [name, setName] = useState("");
    const dispatch = useDispatch();
    
    if(message){
      setTimeout(()=>{
        dispatch(resetnotification.reset());
      },3000)
    }
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.add(name));
     
     
    setName("");
  };
  return (
    <>
    {
      message &&  <div className="alert alert-success" role="alert">
      {message}
</div>
    }
   
      <form onSubmit={handelSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            
          />
          <button type="submit"  onClick={()=>dispatch(actions.count())} >
            Submit
          </button>
          <p>{count}</p>
        </div>
      </form>
    </>
  );
}
