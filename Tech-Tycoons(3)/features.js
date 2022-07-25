

function Ascending(){
    try{
        let data = heroes;
        data.sort(compare);
        Lib.renderCollection(data, card, '#Character');
        Lib.renderCollection(data, aside, '.display_names');
    }
    catch(err){
        console.log(err);
    }
    finally{
        console.log("Sorted");
    }
}

function Descending(){
    try{
        let data = heroes;
        data.sort(compare2);
        Lib.renderCollection(data, card, '#Character');
        Lib.renderCollection(data, aside, '.display_names');
    }
    catch(err){
        console.log(err);
    }
    finally{
        console.log("Sorted");
    }
}

function Search(){
    try{
        let search = document.getElementById('SearchKey').value;
        let data = heroes;
        let result = data.filter(function(item){
            return item.name.toLowerCase().includes(search.toLowerCase());
        }
        );
        Lib.renderCollection(result, card, '#Character');
        Lib.renderCollection(result, aside, '.display_names');
    }
    catch(err){
        console.log(err);
    }
}