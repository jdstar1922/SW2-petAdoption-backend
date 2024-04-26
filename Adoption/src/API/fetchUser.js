const fetchUser = async ({queryKey}) => {
    const id = queryKey[1];
    const apiRes = await fetch(`http://localhost:4000/API/users/${id}`, {credentials:'include'});

    if (!apiRes.ok) {
        throw new Error(`details/${id} fetch not ok`);
    }

    return apiRes.json();
}
export default fetchUser;