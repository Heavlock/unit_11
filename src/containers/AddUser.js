import {useDispatch} from "react-redux";
import addNewUsers from "../action";

function AddUser() {
    const dispatch = useDispatch();

    function formHandler(ev) {
        ev.preventDefault();
        // console.log('отправлено');
        // console.log(ev.target.elements);
        let data = ev.target.elements;
        dispatch(addNewUsers(data.name.value, data.passport.value, data.age.value));
    }

    return (
        <>
            <form onSubmit={formHandler}>
                <input name="name" type="text"/>
                <input name="passport" type="text"/>
                <input name="age" type="number"/>
                <button type="submit">Отправить</button>
            </form>
        </>
    )
}

export default AddUser;