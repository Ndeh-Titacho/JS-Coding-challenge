//function to convert a CSV text into a two dimensiola array
function csvToArray(data) {
  let row = data.split("\n");

  for (let i = 0; i <= row.length; i++) {
    let arlines = row[i].split(";");
    row[i] = arlines;
  }
  return row;
}
let data = "Name;Age;Data\n Ndeh;18;300\n";
console.log(csvToArray(data));
