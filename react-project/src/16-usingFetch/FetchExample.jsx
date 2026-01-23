import React, { useEffect, useState } from 'react'

function FetchExample() {
    const [users,setUsers]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>
        fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>{
        setUsers(data);
        setLoading(false);
    }
    )
    ,[]);

    if(loading) return <p>loading ...</p>
  return (
    <div>
      <ui>
        {users.map(user=>
            <li key={user.id}>{user.name}</li>
        )}
      </ui>
    </div>
  )
}

export default FetchExample
