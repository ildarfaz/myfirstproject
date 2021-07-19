import React from "react";

function Select({companyName, onChangeSelect }) { 
    return ( 
        <form action="formdata" method="post" name="form1">
        <p>
        Company:
          <select name="list1" id="input2" onChange={(even) => onChangeSelect(even.target.value)}> 
            <option value="">All</option>
             {companyName&&companyName.map(name => (
                <option key={name} value={name}>{name}</option>
            ))}; 
           </select>
        </p>
      </form>
    )}
export default Select;