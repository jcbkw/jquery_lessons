export function initialize (callback){

        document.addEventListener("DOMContentLoaded", function () {

            callback();

        }, true);
        
}

export function lesson1() {

    function textChange() {
    debugger;
        var inElement = document.getElementById("textIn");
        var outElements = document.getElementsByTagName("p");
        var headingElements = document.getElementsByClassName("heading");
    
        for (let i = 0; i < outElements.length; i++) {
    
            let element = outElements[i];
            headingElements[i].innerHTML = "Updating " + (i+1) + " to " + inElement.value;
            element.innerHTML = inElement.value;
    
        }
        
    }
        function domHandlers() {
    
            var button = document.getElementById("update").onclick = textChange;
            console.log(button);
            console.log("I am working");
    
    }
    
    initialize(domHandlers);


};