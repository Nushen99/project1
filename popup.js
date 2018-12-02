 $(document).ready(function(){
    chrome.storage.local.get(['items'], function(obj){
        console.log(obj)
    
        let items = obj.items;
        if(items && items.length > 0) {
            items = JSON.parse(items);
        } else {
            items = [];
        }
        
        items.forEach(function(item, index){
            console.log(index, 'index')
            // $("ul").append('<li>'+'<button type="button" id="btnRemove">X</button>'+item.key+' : '+item.value+'</li>');   
             const $li = $(`<li><button type="button" data-delete-btn="">X</button>${item.key} => ${item.value}</li>`).prependTo('#list'); 
             $li.find('[data-delete-btn]').on('click', function() {
                    const existedItems = items.filter(function(s){
                        return s.key !== item.key;
                    })
                    chrome.storage.local.set({'items': JSON.stringify(existedItems)});
                    this.parentNode.remove();
                    // alert('hi');

                });
        })

    });


    $('#submit').on("click", function(){
        chrome.storage.local.get(['items'], function(obj){
            let items = [];
            items = obj.items;
            if(items && items.length > 0) {
                items = JSON.parse(items);
            } else {
                items = [];
            }

            let currentKey = $('#item').val();
            if(items.some(function(item){
                return item.key===currentKey
            })) {
                alert("Word is already set.")
            } else {
                const newItem = {
                    key: $('#item').val(),
                    value: $('#item1').val()
                };  
                items.push(newItem);
                
                chrome.storage.local.set({'items': JSON.stringify(items)});

                const $li = $(`<li><button type="button" data-delete-btn="">X</button>${newItem.key} => ${newItem.value}</li>`).prependTo('#list');
                $li.find('[data-delete-btn]').on('click', function() {
                    //get all list
                    //filter list
                    console.log(items, newItem)
                    const oldItems = items.filter(function(item){
                        return item.key !== newItem.key;
                    })
                    console.log(oldItems);
                    chrome.storage.local.set({'items': JSON.stringify(oldItems)});
                    console.log(this)
                    this.parentNode.remove();
                    // alert('hi');

                });
            }   

        })  

    });


     $('#clearAll').click(function(){
        
        chrome.storage.local.get(['items'], function(obj){
        let items = obj.items;
        if(items && items.length > 0) {
            items = [];
        } else {
            items = [];
        }
        console.log("deleted")
        chrome.storage.local.set({'items': JSON.stringify(items)});
            $("ul").empty(); // delete li not ul   
        });


    });

     

});

