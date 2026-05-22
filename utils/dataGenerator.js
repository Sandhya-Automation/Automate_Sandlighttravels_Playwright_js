//this method is to generate data for user registration with random uniques numbers

export function generatorRandomUser(){
    const uniqueId=Date.now()

    return{
        firstname: `test${uniqueId}`,
        lastname: 'test',
        email: `test${uniqueId}@gmail.com`,
        password:'pass@123',
        confirmpassword: 'pass@123'
    }

}

