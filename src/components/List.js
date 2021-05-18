 function List(state){

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
                {state.user.map(el=><tr key={el.passport}><td>{el.passport}</td><td>{el.name}</td><td>{el.age}</td></tr>)}
                </tbody>
            </table>
        </>
    )
 }

 export default List;