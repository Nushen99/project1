



chrome.storage.onChanged.addListener(function(changes, namespace) {
    
  for (key in changes) {
    var storageChange = changes[key];
    var items = JSON.parse(storageChange.newValue);
    items.forEach(item =>{
       $('body :not(script)').contents()
        .filter(function(){
          return this.nodeType === 3;
        })
        .replaceWith(function(){
          return  this.nodeValue.replace(item.key,item.value);
        }); 
        console.log(changes)
    })

  }
});
 