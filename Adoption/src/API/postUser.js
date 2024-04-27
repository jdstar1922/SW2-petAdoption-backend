const postUser = async (data) => {
    console.log(data)
    const id = data.id;
    const userData = data.updateData;
    const apiRes = await fetch(
        `http://localhost:4000/API/users/${id}`, 
        {
            headers: {'Content-Type': 'application/json'},
            method: 'PUT', 
            credentials:'include',
            body: JSON.stringify(userData)
        }
    );

    if (!apiRes.ok) {
        throw new Error(`details/${id} post not ok`);
    }

    return apiRes.json();
}
export default postUser;