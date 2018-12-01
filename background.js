 
console.log('heeeey')



 

// chrome.storage.onChanged.addListener(function(changes, namespace) {
//   for (key in changes) {
//     var storageChange = changes[key];
//     console.log('Storage key "%s" in namespace "%s" changed. ' +
//                 'Old value was "%s", new value is "%s".',
//                 key,
//                 namespace,
//                 storageChange.oldValue,
//                 storageChange.newValue);
//   }
// });



// console.log('heeeey')














// let items = [];

// window.addEventListener('storage', function() {
//     chrome.storage.local.get(['items'], function(obj){
//         console.log(obj)

//         // let items = obj.items;
//         //  items.forEach(function(item, index){
//         //  	console.log(index, 'index')
//         //  })
//     })
// });

        






// let items = [];

// chrome.storage.local.get(['items'], function(el){
// 	items = el;
// });

// console.log('heeeey', items)





// function allStorage() {

//     var values = [],
//         keys = Object.keys(localStorage),
//         i = keys.length;

//     while ( i-- ) {
//         values.push( localStorage.getItem(keys[i]) );
//     }

//     return values;
// }

// values.forEach(item=>{
//     const word1 = item.key;
//     const word2 =item.value;

//  $('body :not(script)').contents().filter(() => this.nodeType === 3).replaceWith(() => this.nodeValue.replace(word1,word2));



// })




// 	const getItems = function() {
// 		for ( var i = 0, len = localStorage.length; i < len; ++i ) {
// 	  console.log( localStorage.getItem( localStorage.key( i ) ) );
// 	}
// }




