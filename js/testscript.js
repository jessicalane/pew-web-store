var transactionSearchObj = search.create({
   type: "transaction",
   filters:
   [
      ["item","anyof","878"], 
      "AND", 
      ["trandate","on","yesterday"]
   ],
   columns:
   [
      "mainline",
      "trandate",
      "asofdate",
      "postingperiod",
      "taxperiod",
      "type",
      "tranid",
      "entity",
      "account",
      "memo",
      "amount"
   ]
});
var searchResultCount = transactionSearchObj.runPaged().count;
log.debug("transactionSearchObj result count",searchResultCount);
transactionSearchObj.run().each(function(result){
   // .run().each has a limit of 4,000 results
   return true;
});