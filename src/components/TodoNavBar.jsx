import {Link} from "react-router-dom";

export const TodoNavBar = ()=>{

   return(
       <nav>
         <Link to="/todo-list">Home</Link> | <Link to="/done-list">DoneList</Link>
       </nav>
   )
}