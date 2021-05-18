function addNewUsers(passport, name, age) {
    return ({
        type: 'ADD_USER',
        passport,
        name,
        age
    });
};

export default addNewUsers;