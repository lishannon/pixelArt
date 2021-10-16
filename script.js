let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    //alert("Clicked Add Row");
    const pnode = document.createElement("tr");
    const cnode = document.createElement("td");
    pnode.appendChild(cnode);
    document.getElementById("grid").appendChild(pnode);
    numRows++;
    console.log(numRows);
}
//Add a column
function addC() {
    //alert("Clicked Add Col")
    
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