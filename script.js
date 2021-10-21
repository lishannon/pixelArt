let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    numRows++;
    //Case1: 
    // 1. The table is empty, no column no rows  
    // 2. There is only one column 
    if (numRows == 1 && numCols ==0 || numRows ==0){
        const row = document.createElement("tr");
        const col = document.createElement("td");
        // click the single cell to change the color 
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
          };
        row.appendChild(col);
        document.getElementById("grid").appendChild(row); 
        numCols++; 
    } 
    // Case 2: Add rows when there are more than one row and column
    else { 
        let row = document.createElement("tr");
        for (var j =0; j < numCols; j++){
            let col = document.createElement("td");
            // click the single cell to change the color 
            col.onclick = function (){
                this.style.backgroundColor = colorSelected;
            };
            row.appendChild(col);
        }
        grid.appendChild(row);
    }
    
}

//Add a column
function addC() {
    //Case1: 
    // 1. The table is empty, no column no rows  
    if (numRows == 0 && numCols ==0){
        const row = document.createElement("tr");
        const col = document.createElement("td");
        // click the single cell to change the color 
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
        document.getElementById("grid").appendChild(row);
        numRows++;
        numCols++;
    }
    //Case2: Add columns when row and column is more than 1
    else {  
        for (var j =0; j < numRows; j++){
            var col = document.createElement("td");
            // click the single cell to change the color 
            col.onclick = function (){
                this.style.backgroundColor = colorSelected;
            };
            document.getElementById("grid").children[j].appendChild(col);
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
    //Ignore function if row and column are zero
    if (numRows ==0 && numCols ==0){
        numCols =0;
        numRows =0;
        return 0;
    }
    // If the table only have one cell
    else if (numRows==1 && numCols==1){
        document.getElementById("grid").removeChild(document.getElementById("grid").lastElementChild);
        numRows = 0;
        numCols = 0;
    }
    // If there is only one row and n number of columns
    else if (numRows ==1 && numCols!=0){
        document.getElementById("grid").firstElementChild.removeChild(document.getElementById("grid").firstElementChild.children[0]);
        numCols--;
        //If it is deleting the last cell, set row to 0
        if(numCols ==0){
            numRows =0;
        }
    } 
    // If there is only one col left, and delete all the rows and the last column 
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
}

//Sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
}

//Fill in all the cell 
function fill(){
    // Loop through the whole table and set the background to color selected 
    for (var i =0; i < numRows; i++){
        for (var j =0; j < numCols; j++){
        document.getElementById("grid").children[i].children[j].style.backgroundColor= colorSelected;
        }
    }
}

//Clear the whole table 
function clearAll(){
    // Loop through the whole table and set the background to undefined
    for (var i =0; i < numRows; i++){
        for (var j =0; j < numCols; j++){
                document.getElementById("grid").children[i].children[j].style.backgroundColor= "";
        }
    }
}

//Fill in all the cell that have an undefined background color 
function fillU(){
    var defaultColor = "";
    // Loop through all table to check which cells' background color is undefine and fill it in with color. 
    for (var i =0; i < numRows; i++){
        for (var j =0; j < numCols; j++){
            defaultColor =document.getElementById("grid").children[i].children[j].style.backgroundColor;
            if(defaultColor == ""  ){
                document.getElementById("grid").children[i].children[j].style.backgroundColor= colorSelected;
            }
        }
    }
}
