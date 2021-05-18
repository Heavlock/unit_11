 function List(state){
    console.log('=================');
     console.log(state);
    console.log('=================');

    return(
        <>
            <table>
                <thead>
                <tr>
                    <th>Паспорт</th>
                    <th>Имя</th>
                    <th>Возраст</th>
                </tr>
                </thead>
                <tbody>
                {/*{state.user.map(el=><tr><td>{el.name}</td></tr>)}*/}
                </tbody>
            </table>
        </>
    )
 }

 export default List;