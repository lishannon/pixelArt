let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    //alert("Clicked Add Row");
    if (numRows == 0 && numCols ==0){
        const pnode = document.createElement("tr");
        const cnode = document.createElement("td");
        pnode.appendChild(cnode);
        document.getElementById("grid").appendChild(pnode);
    } else {
        let pnode = document.createElement("tr");
        let cnode = document.createElement("td");
        pnode.appendChild(cnode); 
        let firstChild = document.getElementById("grid").firstElementChild;
        let cpy_firstChild = firstChild.cloneNode(true);
       document.getElementById("grid").appendChild(cpy_firstChild);
    }
    numRows++;
}
//Add a column
function addC() {
    //alert("Clicked Add Col")
    if (numRows == 0 && numCols ==0){
        const pnode = document.createElement("tr");
        const cnode = document.createElement("td");
        pnode.appendChild(cnode);
        document.getElementById("grid").appendChild(pnode);
    } else{
        let l = "<td></td><td></td>";
        for (var j =0; j < numCols; j++){
           l = l.concat("<td></td>");
        }
        for (var i =0; i < numRows; i++){
            document.getElementById("grid").children[i].innerHTML= l;
        }
    }
    numCols++;
}

//Remove a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}