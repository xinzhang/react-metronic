import usersMock from './mock/users.json';

export const login = (username, password) => {
    return new Promise((resolve, reject) => {
        const foundUsers = usersMock.filter((user) => user.Username === username);

        const isValid = (
            foundUsers.length === 1 && 
            foundUsers[0].password === password
        );

        if (isValid) {
            setTimeout(() => resolve({
                token: '',
                profile: {
                    firstName: 'Jane',
                    lastName: 'Smith'
                }
            }), 750);
        } 
        else {
            setTimeout(() => {
                reject(username, password)
            }, 750);
        }
    });
};
