import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { Count, addNote } from "../Redux/Actions/note";
import { actions } from "../Redux/Reducers/notereducrs";
export default function Home() {
  let count = useSelector((state) => state.Reducer.count);
  console.log(count);
  const [name, setName] = useState("");
    const dispatch = useDispatch();
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.add(name));
     
     
    setName("");
  };
  return (
    <>
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
