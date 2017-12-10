(function () {
    
        function palindrome(cstr) { 
            var cstr = cstr.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
            var cstr = cstr.replace(/[.,\/#!$%\^&\*;:{}=\-_`'"?~()]/g,"");
            var cstr = cstr.replace("[", "");
            var cstr = cstr.replace(/[\[\]']+/g,'');
            var cstr = cstr.replace(/[\n\r\t]+/g, ' ');
            var cstr = cstr.replace(/(\r\n|\n|\r)/g, " ");
            
            var ccount = 0;
            // Check whether the string is empty or not  
            if(cstr==="") {  
                throw "Must Provide the Input";  
            } 
            // Check if the length of the string is even or odd   
            if ((cstr.length) % 2 === 0) {  
                ccount = (cstr.length) / 2;  
            } else {  
            // If the length of the string is 1 then it becomes a palindrome  
                if (cstr.length === 1) {  
                    return "Entry is a palindrome.";  
             
                } else {  
            // If the length of the string is odd ignore middle character  
                    ccount = (cstr.length - 1) / 2;  
                }  
            }  
            // Loop through to check the first character to the last character and then move next  
            for (var x = 0; x < ccount; x++) {  
            // Compare characters and drop them if they do not match   
                if (cstr[x] != cstr.slice(-1-x)[0]) {  
                    return "Entry is not a Palindrome";  
                 } //else {
                    //
                    //var flag = true;
                    
                //} 
    }  
            return "Entry is Palindrome";
     
    } 



    var staticForm = document.getElementById("static-form");

    if (staticForm) {
        // We can store references to our elements; it's better to 
        // store them once rather than re-query the DOM traversal each time
        // that the event runs.
        var firstNumberElement = document.getElementById("number1");
        var ulist = document.getElementById("list");
      
        var errorContainer = document.getElementById("error-container");
        var errorTextElement = errorContainer.getElementsByClassName("text-goes-here")[0];

        var resultContainer = document.getElementById("result-container");
        var resultTextElement = resultContainer.getElementsByClassName("text-goes-here")[0];

        // We can take advantage of functional scoping; our event listener has access to its outer functional scope
        // This means that these variables are accessible in our callback
        staticForm.addEventListener("submit", function (event) {
            event.preventDefault();

            try {
                // hide containers by default
                errorContainer.classList.add("hidden");
                resultContainer.classList.add("hidden");

                // Values come from inputs as strings, no matter what :(
                var firstNumberValue = firstNumberElement.value;
                var stringlist = firstNumberElement.value;

                

                var result = palindrome(firstNumberValue);
                var res = "Entry is Palindrome";
                if(result==res){
                resultTextElement.textContent =  ""+ result;
                resultContainer.classList.remove("hidden");} else {errorTextElement.textContent = ""+ result;
                errorContainer.classList.remove("hidden");}
                
                var entry = document.createElement('li');
                if(result==res){
                entry.setAttribute("class", "is-palindrome");} else {entry.setAttribute("class", "not-palindrome");}
                entry.appendChild(document.createTextNode(stringlist));
                ulist.appendChild(entry);
            } catch (e) {
                var message = typeof e === "string" ? e : e.message;
                errorTextElement.textContent = e;
                errorContainer.classList.remove("hidden");
            }
        });
    }


})();