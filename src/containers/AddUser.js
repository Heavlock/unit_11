function AddUser() {
    function formHandler(ev) {
        ev.preventDefault();
        console.log('отправлено');
    }

    return (
        <>
            <form action="submit" onSubmit={formHandler}>
                <input type="text"/>
                <input type="text"/>
                <input type="number"/>
                <button type="submit">Отправить</button>
            </form>
        </>
    )
}

export default AddUser;