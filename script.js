const fetchApi = async() => {
    try {
        const res = await fetch ('http://localhost:3000/api/tasks/getTask')
        const data = await res.json();
        {data.map((n)=>{console.log(n)})}
    }
    catch (error) {
        console.log(error);
    }
}

fetchApi()
