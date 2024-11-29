import {TodoContext} from "../App";
import {useContext} from 'react';

const DoneList = () => {
    const {state} = useContext(TodoContext)
    const doneList = state.filter((todo) => todo.done);

    return (
        <div>
            {doneList.map((todo, index) => {
                 return <div key={todo.id + index}>{todo.text}</div>
            })}

        </div>
    )

}
export default DoneList;