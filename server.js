const file = process.argv[2];
console.log(file);
const readXlsxFile = require('read-excel-file/node')
const data = [];

readXlsxFile('./lastnamecorrect.xlsx').then((rows) => {
    // console.log(rows);
    rows.forEach((row) => {
        const i = row.length;
        // console.log(i)
        let obj = {};
        for(let j=0;j<i;j++){
            obj[rows[0][j]] = row[j]
        }
        // console.log(obj)
        data.push(obj);
    })

    console.log(data);
    
    // `rows` is an array of rows
    // each row being an array of cells.
  })


  

