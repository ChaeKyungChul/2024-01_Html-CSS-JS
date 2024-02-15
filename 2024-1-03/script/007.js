/**
 * <table>
 * <tr>
 * <td>1<td><td>2<td>
 * 
 */




let tb ="" ;
let m = 1;
for(let i=0; i < 3; i++){
    tb += "<tr>";
    for(let n=0; n <3; n++){
        tb+="<td>"+m+"</td>";
        m++; 
    } 
    tb += "</tr>";
}

tb += "";

document.write("<table>"+tb+"</table>");