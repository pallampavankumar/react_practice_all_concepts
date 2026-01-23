import React from 'react'
import { useState } from 'react';

const fruits=["Apple","banana","mango","orange","grapes"];


function SearchExample() {
    const [query,setQuery]=useState('');

    const filteredFruits=fruits.filter(fruit=>
        fruit.toLowerCase().includes(query.toLowerCase())
    );
  return (
    <div>
      Enter fruit:<input placeholder='search..' value={query} onChange={(e)=>setQuery(e.target.value)}></input>
      <ui>
        {filteredFruits.map((fruit,index)=>
            <li key={index}>{fruit}</li>
        )}
      </ui>
    </div>
  )
}

export default SearchExample
