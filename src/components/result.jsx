import React from "react";
import "./result.css"

function Result(props){
    return(
        <div id="result">
            <table>
                <tr>
                    <th>Degree</th>
                    <th>Time Taken</th>
                </tr>
                <tr>
                    <td>{props.degree}</td>
                    <td>{props.time}</td>
                </tr>
            </table>
        </div>
    )
}

export default Result;