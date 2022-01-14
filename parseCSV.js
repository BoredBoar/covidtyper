import fs from "fs"

const text = fs.readFileSync('./CoV.csv', 'utf8')

let muts = {}

const lines = text.trim().split('\n')
                    .map(line =>(
                        line.split(',')
                    ))
                    .reduce((variants,line) => {
                        variants[line[1]] = variants[line[1]] || {}
                        variants[line[1]]["Location"] = variants[line[1]]["Location"] || line[0]
                        variants[line[1]]["WHO"] = variants[line[1]]["WHO"] || line[2]
                        variants[line[1]]["NEXT"] = variants[line[1]]["NEXT"] || line[3]
                        variants[line[1]]["sublineages"] = variants[line[1]]["sublineages"] || []
                        variants[line[1]]["sublineages"].push({"name":line[4], active:true, "mutations":line.slice(5)
                                                                                               .reduce((list,element) => {
                                                                                                   if (element.trim() != "") {
                                                                                                       list.push(element.trim())
                                                                                                       muts[element.trim()] = muts[element.trim()] || "present"
                                                                                                   }
                                                                                                   return list
                                                                                               },[])})

                        return variants
                    },{})

// console.log(JSON.stringify(lines, null, 2))
// console.log(lines);
// fs.writeFileSync('./Cov.txt',JSON.stringify(lines, null, 2))
const fd = fs.openSync('./testJSON.txt','w')
fs.writeSync(fd, '[\n')
console.log(typeof(lines))
lines.forEach(line => {
    fs.writeSync(fd,JSON.stringify(line) + '\n')
});
fs.closeSync(fd)

let sortedAr = Object.keys(muts).sort((a,b) => {
    // console.log(a,b);
    var regex = /\d+/g
    var a_num = a.match(regex)
    var b_num = b.match(regex)
    // console.log(a,a_num, b, b_num)
    return parseInt(a_num[0]) - parseInt(b_num[0])
})


// fs.writeFileSync('./mutations.txt',sortedAr.reduce((x,mut) => {x += `{name:"` + mut + `", selected: ko.observable(false)},\n`;return x},''))