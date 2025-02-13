
let items = [
    {"Name":"iPhone","Price":56000,"Stock":true},
    {"Name":"Nokia","Price":600,"Stock":true},
    {"Name":"Samsun","Price":6000,"Stock":false}
]

// var item = items.map(name => Object.keys(items).map(key =>
//     items[key]
// ))
const headers = Object.keys(items[0])

console.log(`Printing all the values of the array`)

const values = items.map(name => Object.values(name))

values.forEach(row => console.log(row.join('\t')))
// console.log(values)

console.log(headers.join('\t'))


for (let i=0; i<items.length; i++)
{
    const rows = Object.values(items[i])

    console.log(rows.join('\t'))
}


