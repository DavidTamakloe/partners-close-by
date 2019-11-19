const fs = require("fs");
const { getPartnersCloseBy } = require("./utilities");

const rawdata = fs.readFileSync(__dirname + "/partners.json");
const partners = JSON.parse(rawdata);

const partnersCloseBy = getPartnersCloseBy(partners);

console.log("");
console.log("==========================================");
console.log(`TOTAL NUMBER OF PARTNERS: ${partners.length}`);
console.log(`NUMBER OF PARTNERS CLOSE BY: ${partnersCloseBy.length}`);
console.log(`PARTNERS CLOSE BY:`);
console.log(partnersCloseBy);
console.log("==========================================");
console.log("");
