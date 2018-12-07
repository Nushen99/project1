$(document).ready(function(){

chrome.storage.onChanged.addListener(function(changes, namespace) {

 console.log("Items in the storage: ", changes)
  const oldItems = changes.items.oldValue ? JSON.parse(changes.items.oldValue) : [];
  const newItems = changes.items.newValue ? JSON.parse(changes.items.newValue) : [];

  if(oldItems.length > newItems.length){
    let removedItems;
    if(newItems.length === 0) {
      removedItems = oldItems;
    } else {
      const newItemsStr = newItems.map(item => JSON.stringify(item));
      removedItems = oldItems.filter((item) =>{
        return !newItemsStr.includes(JSON.stringify(item));
      })
    }

      removedItems.forEach(item   =>{
         $('body *:not(script):not(style):not(iframe):not(noscript)').contents()
          .filter(function(){
            return this.nodeType === 3;
          })
          .replaceWith(function(){
            return  this.nodeValue.replace(item.value,item.key);
          }); 
      })

  } else {
    for (key in changes) {
    var storageChange = changes[key];
    var items = JSON.parse(storageChange.newValue);

    items.forEach(item => {
       $('body *:not(script):not(style):not(iframe):not(noscript)').contents()
        .filter(function(){
          return this.nodeType === 3;
        })
        .replaceWith(function(){
          return  this.nodeValue.replace(item.key,item.value);
        }); 
    })
  }

  }
});

})



window.addEventListener("load", function(event) {
  // event.preventDefault();
  chrome.storage.local.get(['items'], function(raw) {
    console.log("The raw", raw.items)
    if(raw.items){
      const itemsParsed = JSON.parse(raw.items);
      // console.log('Parsed', itemsParsed)
      // console.log('Text Tags', $('body *:not(script)').contents()
      //   .filter(function(){
      //     return this.nodeType === 3;
      //   }));
      for(let item of itemsParsed) {
       $('body *:not(script):not(style):not(iframe):not(noscript)').contents()
       
        .filter(function(){
          return this.nodeType === 3;
        })

        .replaceWith(function(){
          return  this.nodeValue.replace(item.key,item.value);
        });
      }
    }
  });
  
});









