import React from "react";

function Select({title, onChange }:any) { 
    return ( 
          <select onChange={(event) => onChange(event.target.value)}> 
            <option value="">All</option>
             {title&&title.map((name:string) => ( 
                <option key={name} value={name}>{name}</option>
            ))}; 
           </select>
    )}
export default Select;