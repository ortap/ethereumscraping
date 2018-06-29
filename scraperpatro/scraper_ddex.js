var request =  require('request');

ddexmarketsURI = 'https://api.ddex.io/v2/markets'
request(ddexmarketsURI, function (error, response, body) {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  var result = JSON.parse(body)
  result =  result.data.markets;
  for (var i = 0; i < result.length; i++) {
    var rs = {
      "name": result[i].quoteToken,
      "address": result[i].quoteTokenAddress,
      "cmcName": result[i].quoteToken.toLowerCase()
    }
    obj = rs+','
    console.log(obj)
  }
   // Print the HTML for the Google homepage.
  // for (var each in result){
  //   console.log('quoteTokenName:', result.quoteTokenName);
  //   console.log('quoteTokenAddress:' result.quoteTokenAddress);
  // }
});

// var scraper = require('table-scraper');
// var fs = require("fs");
// var json2csv = require('json2csv').parse;
// const readline = require('readline');
//
//
// (async () => {
//   const timebefore = Date.now()/1000;
//   var page;
//   dex = "ddex"
//   var pagestart =250
//   var pageend = 3317
//   const filename = "life2date_"+dex+".csv"
//   // var dex = readline("Choose Dex: (radar, ddex, airswap, paradex)");
//   // var filename = readline("Filename:")
//   switch(dex){
//     case "radar":
//         dex = 1;
//         break;
//     case "ddex":
//         dex = 4;
//         break;
//     case "airswap":
//         dex = 10;
//         break;
//     case "paradex":
//         dex = 5;
//         break;
//   }
//
//   // var pagestart = prompt("Enter Start Page Number:")
//   // var pageend = prompt("Enter End Page Number:")
//   for (page = pagestart; page < pageend; page++) {
//     const URL = 'https://etherscan.io/dextracker?filter='+dex+'&p='+page
//     // console.log(URL)
//     let tableData = await scraper.get(URL)
//     var relevant = tableData[0];
//     const fields = ["TxHash","Time", "Maker", "Taker"];
//     const opts = {
//       fields,
//       header: false
//      };
//     const csv = json2csv(relevant, opts);
//     // fs.writeFile(filename, csv);
//     console.log(csv)
//   }
//   const timeafter= Date.now()/1000;
//   const runtime = parseFloat((timeafter - timebefore)/60);
//   const info = "\n Filename:"  + filename + "; Start Time:" + timebefore + "; End Time:"+ timeafter + "; Run Time (in minutes):"+ runtime
//   fs.appendFile("info.csv", info);
// })()
