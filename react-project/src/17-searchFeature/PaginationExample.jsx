import React, { useState } from 'react'

const items=Array.from({length:30},(_,i)=>`Item ${i+1}`);
function PaginationExample() {

  const [page,setPage]=useState(1);  
  const [query,setQuery]=useState('');

  const filteredItems=items.filter(item=>
    item.toLowerCase().includes(query.toLowerCase())
  );
  const itemsperPage=5;
  const start=(page-1)*itemsperPage;
  const current=filteredItems.slice(start,start+itemsperPage);
  return (
    <div>
        Enter item:<input placeholder='Search..' value={query} onChange={(e)=>setQuery(e.target.value)}/>
      <ul>
        {current.map((item,index)=>
            <li key={index}>{item}</li>
        )}
      </ul>
      <button disabled={page===1} onClick={()=>setPage(page-1)} >prev</button>
      <p>Page:{page}</p>
      <button disabled={start+itemsperPage>=filteredItems.length} onClick={()=>setPage(page+1)}>next</button>
    </div>
  )
}

export default PaginationExample
