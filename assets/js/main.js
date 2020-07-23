const out = document.getElementById("metall-table")
var edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veranderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veranderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veranderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veranderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veranderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veranderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veranderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veranderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veranderung: "0.00%" }
];
var metallNamen = []
edelMetallPreise.forEach((elt) => {
    metallNamen.push(elt.name)
})
console.log(metallNamen)
edelMetallPreise.map((elt) => {
    console.log(elt.name)
})
let metallPreis = []
edelMetallPreise.forEach((elt) => {
    metallPreis.push(elt.preiseGramEuro)
})
console.log(metallPreis)
edelMetallPreise.map((elt) => {
    console.log(elt.preiseGramEuro)
})
let metallVer = []
edelMetallPreise.forEach((elt) => {
    metallVer.push(elt.veranderung)
})
console.log(metallVer)
edelMetallPreise.map((elt) => {
    console.log(elt.veranderung)
})
let teureMetalle = edelMetallPreise.filter((elt) =>{
    return elt.preiseGramEuro > 50
})
console.log(teureMetalle)
function print() {
    edelMetallPreise.forEach((elt) => {
        out.innerHTML += `<tr>
        <td> ${elt.name} </td>
        <td> ${elt.preiseGramEuro} </td>
        <td> ${elt.veranderung} </td>
        </tr>`
    })
}
print()