let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    //alert("Clicked Add Row");
    numRows++;
    if (numRows == 1 && numCols ==0 ||numRows ==0){
        const pnode = document.createElement("tr");
        const cnode = document.createElement("td");
        cnode.onclick = function (){
            this.style.backgroundColor = colorSelected;
          };
        pnode.appendChild(cnode);
        document.getElementById("grid").appendChild(pnode); 
        numCols++; 
    } else {
        let pnode = document.createElement("tr");
        for (var j =0; j < numCols; j++){
            let cnode = document.createElement("td");
            cnode.onclick = function (){
                this.style.backgroundColor = colorSelected;
            };
            pnode.appendChild(cnode);
           //l = l.concat("<td></td>");
        }
        grid.appendChild(pnode);
        //document.getElementById("grid").lastElementChild.innerHTML= l;
    }
    
}
//Add a column
function addC() {
    //alert("Clicked Add Col")
    if (numRows == 0 && numCols ==0){
        const pnode = document.createElement("tr");
        const cnode = document.createElement("td");
        cnode.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        pnode.appendChild(cnode);
        document.getElementById("grid").appendChild(pnode);
        numRows++;
        numCols++;
    }
    else{
        for (var j =0; j < numRows; j++){
            var cnode = document.createElement("td");
            cnode.onclick = function (){
                this.style.backgroundColor = colorSelected;
            };
            document.getElementById("grid").children[j].appendChild(cnode);
        }
        numCols++;
    }
}

//Remove a row
function removeR() {
   //alert("Clicked Remove Row")
   if(numRows == 1){
        document.getElementById("grid").removeChild(document.getElementById("grid").lastElementChild);
        numRows = 0;
        numCols = 0;
   }
   else if (numRows!=0){
       numRows--;
       document.getElementById("grid").removeChild(document.getElementById("grid").lastElementChild);
   }   
   console.log(numCols+" "+numRows);
   
}
//Remove a column
function removeC() {
    //alert("Clicked Remove Col")
    //There isn't row or column to remove
    if (numRows ==0 && numCols ==0){
        numCols =0;
        numRows =0;
        return 0;
    }
    else if (numRows==1 && numCols==1){
        document.getElementById("grid").removeChild(document.getElementById("grid").lastElementChild);
        numRows = 0;
        numCols = 0;
    }
    else if (numRows ==1 && numCols!=0){
        document.getElementById("grid").firstElementChild.removeChild(document.getElementById("grid").firstElementChild.children[0]);
        numCols--;
        //Deleted the last colum of that row. Set row to 0
        if(numCols ==0){
            numRows =0;
        }
    } // if there is only one col left, and delete all the rows and the column 
    else if(numCols == 1 ){
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
   console.log(numCols+" "+numRows);
    
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
}

function clearAll(){
    //alert("Clicked Clear All")
    for (var i =0; i < numRows; i++){
        for (var j =0; j < numCols; j++){
                document.getElementById("grid").children[i].children[j].style.backgroundColor= "";
        }
    }
}

function fillU(){
    //alert("Clicked Fill All Uncolored")
    var defaultColor = "";
    for (var i =0; i < numRows; i++){
        for (var j =0; j < numCols; j++){
            defaultColor =document.getElementById("grid").children[i].children[j].style.backgroundColor;
            if(defaultColor == ""  ){
                document.getElementById("grid").children[i].children[j].style.backgroundColor= colorSelected;
            }
        }
    }
}
