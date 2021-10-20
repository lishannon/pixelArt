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
    //     Method 1;
    //     let pnode = document.createElement("tr");
    //     let cnode = document.createElement("td");
    //     pnode.appendChild(cnode); 
    //     let firstChild = document.getElementById("grid").firstElementChild;
    //     let cpy_firstChild = firstChild.cloneNode(true);
    //    document.getElementById("grid").appendChild(cpy_firstChild);

    //     Method 2:
    //create new row with one column first
        let pnode = document.createElement("tr");
        let cnode = document.createElement("td");
        pnode.appendChild(cnode); 
        document.getElementById("grid").appendChild(pnode);

    //rewrite the inner HTML
        //Count the number of columns need 
        //Create a string html 
        let l = "";
        for (var j =0; j < numCols; j++){
           l = l.concat("<td></td>");
        }
        //insert the new HTML in the last children element
        document.getElementById("grid").lastElementChild.innerHTML= l;
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
    }
    // else if (numRows == 1 && numCols > 1 ) {
    //     let l = "";
    //     for (var j =0; j < numCols; j++){
    //        l = l.concat("<td></td>");
    //        document.getElementById("grid").children[0].innerHTML= l;
    //     }
    // } 
    else{
        for (var j =0; j < numRows; j++){
            var cnode = document.createElement("td");
           // var t = document.getElementById("grid").children[j].firstElementChild;
            //var tdEle = t.cloneNode(true);
            document.getElementById("grid").children[j].appendChild(cnode);
        }

        // loop through all the rows & append another <td>
        // const cnode = document.createElement("td");
        // for (var j =0; j < numRows; j++){
        //     document.getElementById("grid").children[j].appendChild(cnode);
        // }

        // count the number of columns
        // let l = "";
        // for (var j =0; j < numCols; j++){
        //    l = l.concat("<td></td>");
        // }
        // for (var i =0; i < numRows; i++){
        //     document.getElementById("grid").children[i].innerHTML= l;
        // }
    }
}

//Remove a row
function removeR() {
   //alert("Clicked Remove Row")
   if(numRows == 1){
        numRows = 0;
        numCols = 0;
   }
   else{
       numRows--;
   }
   document.getElementById("grid").removeChild(document.getElementById("grid").lastElementChild);
   
   
}
//Remove a column
function removeC() {
    //alert("Clicked Remove Col")
    if (numRows ==1){
        document.getElementById("grid").removeChild(document.getElementById("grid").firstElementChild);
        numRows = 0;
        numCols = 0;
    }
    if(numCols == 1){
        for (var i =0; i < numRows; i++){
            document.getElementById("grid").children[i].removeChild(document.getElementById("grid").children[i].lastElementChild);
        }
        for (var i =0; i < numRows; i++){
            document.getElementById("grid").removeChild(document.getElementById("grid").lastElementChild);
        }
        console.log("last col: " + numCols + " num of row: "+ numRows);
        numRows = 0;
        numCols = 0;
   }
   else{
       numCols--;
   
    for (var i =0; i < numRows; i++){
        document.getElementById("grid").children[i].removeChild(document.getElementById("grid").children[i].lastElementChild);
    }
   }
    
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
        document.getElementById("grid").children[i].children[j].style.backgroundColor= colorSelected;
        }
    }
    // document.querySelectorAll("td").style.backgroundColor = colorSelected;
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
