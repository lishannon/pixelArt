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
    if (numRows == 0 && numCols ==0){
        const pnode = document.createElement("tr");
        const cnode = document.createElement("td");
        pnode.appendChild(cnode);
        document.getElementById("grid").appendChild(pnode);
        
    } else{
        const td = document.createElement("td");
        // const cnode = document.createElement("td");
        // pnode.appendChild(cnode);
        const pnode = document.createElement("td");
        const cnode = document.createElement("td");
        pnode.appendChild(cnode);
        let l = "<td></td><td></td>";
        for (var j =0; j < numCols; j++){
           l = l.concat("<td></td>");
            //console.log("hello");
        }
        for (var i =0; i < numRows; i++){
            console.log("i: "+ i + " children: "+ document.getElementById("grid").children[i] );
            //document.getElementById("grid").children[i].appendChild(td);
            document.getElementById("grid").children[i].innerHTML= l;
            console.log("i: "+ i + " children: "+ document.getElementById("grid").children[i] );
            
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