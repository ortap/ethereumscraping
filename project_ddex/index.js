var ddex = require('./ddex_all.json');  
var result = JSON.parse(ddex)
console.log(result)



// const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/gRz423cAylM0XXoAm2rB'))
//
// var currblockNumber = web3.eth.blockNumber;
// var timestamp = web3.eth.getBlock(currblockNumber).timestamp;
// console.log(currblockNumber)
// console.log(timestamp)


// var unixtimenow = Date.now() / 1000 | 0;
// var onedayago = unixtimenow - 3600*24
// console.log(unixtimenow)
// console.log(onedayago)
// var i = 0;
// var last = ddex["result"][9999]["timeStamp"]
// console.log(last)
// while(ddex["result"][i]["timeStamp"] < onedayago){
//   var startcounter = i+1
//   var starttime = ddex["result"][i]["timeStamp"]
//   i++
// }
// console.log(startcounter, starttime)
// for (var j=startcounter; j<result.length; j++){
//   parse = {
//     "blockNumber": ddex["result"][i]["blockNumber"],
//     "timeStamp": ddex["result"][i]["timeStamp"],
//     "hash": ddex["result"][i]["hash"],
//     "from": ddex["result"][i]["from"],
//     "contractAddress": ddex["result"][i]["contractAddress"],
//     "to": ddex["result"][i]["to"],
//     "from": ddex["result"][i]["from"],
//     "tokenSymbol": ddex["result"][i]["tokenSymbol"],
//     "gas": ddex["result"][i]["gas"],
//     "gasPrice": ddex["result"][i]["gasPrice"],
//     "gasUsed": ddex["result"][i]["gasUsed"],
//     "cumulativeGasUsed": ddex["result"][i]["cumulativeGasUsed"],
//   }
// }



// Remove Duplicates
// function uniq(a) {
//     var prims = {"boolean":{}, "number":{}, "string":{}}, objs = [];
//
//     return a.filter(function(item) {
//         var type = typeof item;
//         if(type in prims)
//             return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
//         else
//             return objs.indexOf(item) >= 0 ? false : objs.push(item);
//     });
// }
