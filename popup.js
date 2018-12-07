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
             const $li = $(`<li><button class="smallButton" type="button"  data-delete-btn="">X</button><span class="listItem">${item.key} = ${item.value}</span</li>`).prependTo('#list'); 
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
        chrome.storage.local.get('items', function(obj){
            let items = [];
            items = obj.items;

            if(items && items.length > 0) {
                items = JSON.parse(items);
            } else {
                items = [];
            }


            let currentKey = $('#item').val();
            if(items.some(function(item){
                return item.key===currentKey;
            })) {
                alert("Word is already set.")
                $('#item').val('');
                $('#item1').val('');   
            } else if(currentKey.length===0){
                alert("Enter the word.")
            } else {
                const newItem = {
                    key: $('#item').val(),
                    value: $('#item1').val()
                };  
                items.push(newItem);

                chrome.storage.local.set({'items': JSON.stringify(items)});

                const $li = $(`<li><button class="smallButton" type="button" class="smallButton" data-delete-btn="${newItem.key}">X</button><span class="listItem">${newItem.key} = ${newItem.value}</span></li>`).prependTo('#list');
                $li.find('[data-delete-btn]').on('click', function() {
                    const name = this.dataset.deleteBtn;
                    let filtered; 
                    const that = this;
                    chrome.storage.local.get('items', function(items) {
                        const parsed = JSON.parse(items.items); 
                        filtered = parsed.filter(function(item){
                            return item.key !== name;
                        })

                        chrome.storage.local.set({'items': JSON.stringify(filtered)});
                        that.parentNode.remove();

                    })

                
                    // $('body :not(script)').contents()
                    // .filter(function(){
                    //   return this.nodeType === 3;
                    // })
                    // .replaceWith(function(){
                    //   return  this.nodeValue.replace(item.key, item.value);
                    // }); 

                });
                $('#item').val(''); 
                $('#item1').val(''); 
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

