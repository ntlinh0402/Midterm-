while(true){
    var store=["Jean","T-shirt","Short"]
    // Creat
    creat=prompt("New item?")
    console.log(store.push(creat))
    console.log(store)
    
    //Read
    console.log(store.join(', '))
    
    //Update
    changeItem=prompt("change")
    i=store.indexOf(changeItem);
    newItem=prompt("New")
    store[i]=newItem
    console.log(store)
    
    //Delete
    deleteItem=prompt("delete")
    i=store.indexOf(deleteItem);
    store.splice(i,1)
    console.log(store)
    
}