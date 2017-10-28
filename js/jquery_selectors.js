import { initialize } from "./dom_objects.js";
initialize(eventHandlerPageSetUp);


function eventHandlerPageSetUp() {
    $("body").on("click", function (e){
        let target = e.target;
        switch (target.id){
            
            case "even" : {setEven(); break} ;
            case "odd"  : {setOdd(); break};
            case "first": {setFirst4(); break}; 
            case "first-last": {setFirstLast(); break};
            
        }
        console.log("odd is working");
    });
}

// function formatter(elements) {
    
    
    // }
    
    function setEven() {
        //:Even Selector is counter intuitive as per JQuery API https://api.jquery.com/even-selector/
        // Therefore I will use odd: to select even <li>
        var $evenItems = $("li:odd");
        var $elems = $("span:contains(Even)");
        clear();
        bold( [$elems, $evenItems]);
        $(".label").html("Even");
    }
    function setOdd() {
        
        var $oddItems = $("li:even");
        var $elems = $("span:contains(Odd)");
        clear();
        bold([$elems, $oddItems]);
        $(".label").html("Odd");
        
    }
    function setFirst4() {
        
        var $first4 = $("li:lt(4)");
        var $elems = $("span:contains(First 4)");
        clear();
        bold([$elems, $first4]);
        $(".label").html("First 4");
        
    }
    function setFirstLast() {
        
        var $first = $("li:first-child");
        var $last = $("li:last-child");
        var $elems = $("span:contains(Last)");
        clear();
        bold([$elems, $first, $last]);
        $(".label").html("First & Last");
        
    }
    
    function clear() {
        
        $("li, span").each(function (index) {
            
            $(this).css("font-weight", "");
        console.log(index)
    }); 
    
}

function bold(attrArrays) {
    for (let i = 0; i < attrArrays.length; i++) {

        $(attrArrays[i]).each(function(index){
            
                    $(this).css("font-weight", "bold");
            
        });

    }

}