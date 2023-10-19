
// create 16x16 grid inside parentGrid: create 16 rows, put 16 squares in each row, add each row to parentGrid
parentGrid = document.getElementById("parentGrid");
for(let i = 1; i <= 16; i++){
    row = document.createElement('div');
    rowId = "row" + i;
    row.setAttribute("id", rowId);
    row.setAttribute("class", "row");

    for(let j = 1; j <= 16; j++){
        square = document.createElement('div');
        squareId = "square" + i + "-" + j;
        square.setAttribute("id", squareId);
        square.setAttribute("class", "square")
        row.appendChild(square);
    }
    parentGrid.appendChild(row);
}




