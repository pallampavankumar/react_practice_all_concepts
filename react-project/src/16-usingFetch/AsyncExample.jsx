import React, { useEffect } from 'react'
import { useState } from 'react';
function AsyncExample() {

    const [users,setUsers]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>
        async function loadAsync(){
            try{
            const res=await fetch('https://jsonplaceholder.typicode.com/users');
            const data=await res.json();
            setUsers(data);
            }
            finally{
                setLoading(false);
            }
        loadAsync();
        },[])

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

export default AsyncExample
