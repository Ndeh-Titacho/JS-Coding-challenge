function csvTo2DArray(data) {
  const rows = data.trim().split("\n");

  const results = rows.map((row) => row.split(";"));
  return results;
}
let data = "Name;Age;Data\nNdeh;18;300\n";
console.log(csvTo2DArray(data));
