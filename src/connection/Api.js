export async function getAllUserReqresApi() {
    try {
        const response = await fetch('https://reqres.in/api/users?per_page=12');
        const body = await response.json();

        const getAllUsersReqres = [...body.data];
        const getAllUsers = getAllUsersReqres.map(user => ({
            ...user, isfavorite:false
        }))
        console.log(getAllUsers)
        return getAllUsers;
        
    } catch (error) {
        console.log(error);
        return []; 
    }
}
