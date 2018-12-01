// var replaced = $("body").html().replace(/text/g,'replace');
// $("body").html(replaced);

alert('hi')
// const archive = function() {
//         var items = [];
//         for (var i = 0; i<localStorage.length; i++) {
//             items[i] = localStorage.getItem(localStorage.key(i));
//         }
//     }





// items.forEach(item=>{
//     const word1 = item.key;
//     const word2 =item.value;

//  $('body :not(script)').contents().filter(() => this.nodeType === 3).replaceWith(() => this.nodeValue.replace(word1,word2));



// })

chrome.storage.onChanged.addListener(function(changes, namespace) {
    
  for (key in changes) {
    var storageChange = changes[key];
    var items = JSON.parse(storageChange.newValue);
    items.forEach(item =>{
        const word1 = item.key;
        const word2 = item.value;
        $('body :not(script)').contents().filter(() => this.nodeType === 3).replaceWith(() => this.nodeValue.replace(item.key,item.value));    

    })

  }
});