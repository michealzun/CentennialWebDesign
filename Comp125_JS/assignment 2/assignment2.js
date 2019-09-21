var cellSelect = 0;
function creatTable(){
    var row=document.getElementById("numORow").value;
    var col=document.getElementById("numOCol").value;
    innerhtml = ""; 
	for(var i =0; i < row; i++) { 
	    innerhtml += '<tr>';
	    for(var j=0; j < col; j++) { 
	        innerhtml += '<td width="100px"> empty </td>';
	    } 
	    innerhtml += '</tr>'; 
	}
	document.getElementById("bigTable").innerHTML=innerhtml;
}
function creatContent() {
    var row = document.getElementById("numORow").value;
    var col = document.getElementById("numOCol").value;
    var totCell = row * col;
    if (cellSelect < totCell) {
        var content = " " + document.getElementById("content").value + " ";
        var cell = document.getElementsByTagName("td");
            cell[cellSelect].innerHTML = content;
            cellSelect++;
    }
    else {
        alert("max cells");
    }
}
var creatT = document.getElementById("creatTable");
var creatC = document.getElementById("addContent");
creatT.addEventListener("click", creatTable, false);
creatC.addEventListener("click", creatContent, false);
