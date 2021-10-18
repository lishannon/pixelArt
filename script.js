let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    //alert("Clicked Add Row");
    numRows++;
    if (numRows == 1 && numCols ==0){
        const pnode = document.createElement("tr");
        const cnode = document.createElement("td");
        pnode.appendChild(cnode);
        document.getElementById("grid").appendChild(pnode);
        numCols++; 
    } else {
        let pnode = document.createElement("tr");
        let cnode = document.createElement("td");
        pnode.appendChild(cnode); 
        let firstChild = document.getElementById("grid").firstElementChild;
        let cpy_firstChild = firstChild.cloneNode(true);
       document.getElementById("grid").appendChild(cpy_firstChild);
    }
    
}
//Add a column
function addC() {
    //alert("Clicked Add Col")
    numCols++;
    if (numRows == 0 && numCols ==1){
        const pnode = document.createElement("tr");
        const cnode = document.createElement("td");
        pnode.appendChild(cnode);
        document.getElementById("grid").appendChild(pnode);
        numRows++;
    } else if (numRows == 1 && numCols > 1 ) {
        let l = "";
        for (var j =0; j < numCols; j++){
           l = l.concat("<td></td>");
           document.getElementById("grid").children[0].innerHTML= l;
        }
    } 
    else{
        for (var j =0; j < numRows; j++){
            var t = document.getElementById("grid").children[j].firstElementChild;
            var tdEle = t.cloneNode(true);
            document.getElementById("grid").children[j].appendChild(tdEle);
        }

        // for (var j =0; j < numRows; j++){
        //    l = l.concat("<td></td>");
        // }
        // for (var i =0; i < numCols; i++){
        //     document.getElementById("grid").children[i].innerHTML= l;
        // }
    }
}

//Remove a row
function removeR() {
   //alert("Clicked Remove Row")
   document.getElementById("grid").removeChild(document.getElementById("grid").lastElementChild);
   numRows--;
}
//Remove a column
function removeC() {
    //alert("Clicked Remove Col")
    for (var i =0; i < numRows; i++){
        document.getElementById("grid").children[i].removeChild(document.getElementById("grid").children[i].lastElementChild);
    }
    numCols--;
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log("color select: "+colorSelected);
}

function fill(){
    //alert("Clicked Fill All")
    for (var i =0; i < numRows; i++){
        for (var j =0; j < numCols; j++){
        document.getElementById("grid").children[i][j].background = colorSelected;
        }
    }
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
