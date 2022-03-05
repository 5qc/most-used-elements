// This was the code to (truly) get all 1000 sites
const fs = require("fs")
let lines = fs.readFileSync("sites.txt").toString().split("\n")

fs.writeFile("newSites.txt", "", function(err) {
    if (err) throw err
})
for (let i = 0; i < lines.length; i++) {
    let line = Number(lines[i])
    if (isNaN(line)) {
        fs.appendFile("newSites.txt", lines[i].replace(/^ /g, ""), function(err) {
            if (err) throw err
        })
    } else {
        continue
    }
}
