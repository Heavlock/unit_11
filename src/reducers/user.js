function user(state = [], action) {
    switch (action.type) {
        case 'ADD_USER' :
            return [
                ...state,
                {
                    passport: action.passport,
                    name: action.name,
                    age: action.age,
                }
            ]
        default:
            return state;
    }
}

export default user;