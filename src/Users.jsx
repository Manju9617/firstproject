import React from "react";


const Users = (props) => {
    let data=props.data
  return (
    <div>
        <table border="2px" style={{textAlign:"center",fontWeight:"bolder"}}>
            <tr>
                <th>studentname</th>
                <th>rollnumber</th>
                <th>gender</th>
                <th>dob</th>
                <th>course</th>
                <th>phonenumber</th>
                <th>photo</th>

            </tr>
            {data.map((x)=>{
                return <tr>
                <td>{x.studentname}</td>
                <td>{x.rollnumber}</td>
                <td>{x.gender}</td>
                <td>{x.dob}</td>
                <td>{x.course}</td>
                <td>{x.phonenumber}</td>
                <td> <img src={x.photo} alt="" style={{height:"50px",width:"50px"}}></img></td>
                
                 <td>
                    <ol>
                        {x.phone.map((x)=>{
                            return <li>{x}</li>
                        })}
                           </ol>
                          </td>
                           </tr>
            })}
        </table>
    </div>
  )
}

export default Users