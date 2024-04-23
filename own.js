$(document).ready(function() {
    // Load initial content
    $.getJSON("content.json", function(pup) {
        displayContent(pup, $(".related"));
    });

    function filterAndDisplayContent(className, container) {
        console.log("className:", className);
        $.getJSON("content.json", function(pup) {
            console.log("All Content:", pup);
            var filteredContent = pup.filter(item => item.section === className);
            console.log("Filtered Content:", filteredContent);
            displayContent(filteredContent, container);
        });
    }
    
    

    // Button click event handlers
    $("#Nbutton").click(function() {
        filterAndDisplayContent("N", $(".N"));
        $(".O, .F").hide(); // Hide articles with class "O" and "F"
        
        console.log("clicked N")
    });

    $("#Obutton").click(function() {
        filterAndDisplayContent("O", $(".O"));
        $(".N, .F").hide(); // Hide articles with class "N" and "F"
        
        console.log("clicked O")
    });

    $("#Fbutton").click(function() {
        filterAndDisplayContent("F", $(".F"));
        $(".N, .O").hide(); // Hide articles with class "N" and "O"
        
        console.log("clicked F")
    });

    // Function to filter and display content based on class
    function filterAndDisplayContent(className, container) {
        $.getJSON("content.json", function(pup) {
            var filteredContent = pup.filter(item => item.section === className);
            displayContent(filteredContent, container);
        });
    }

    // Function to display content
    function displayContent(content, container) {
        var newhtml = "";
        for (var x = 0; x < content.length && x < 7; x++) {
            newhtml += `
                <a href="${content[x].href}">
                    <div class="writing">
                        <div class="img">
                            <img class="articleimg" src="${content[x].src}" alt="${content[x].alt}">
                        </div>
                        <div class="byline">
                            <p>${content[x].title}</p><br><p>${content[x].by}</p><p>${content[x].section}</p>
                        </div>
                    </div>
                </a>`;
        }
        container.html(newhtml);
    }
});



// MY OWN
$(document).ready(function() {


    $.getJSON("content.json", function(pup) {


        console.log(pup);
    
        // var imagename = "images/pup5.jpg";
    
        var newhtml = ""
    
        for (x=0; x < pup.length && x < 7; x++) {
            // console.log(`<img src=${pup[x].href}>`)
            newhtml = newhtml + 
                ` <a href="${pup[x].href}">
                    <div class="writing">
                        <div class="img">
                            <img class="articleimg" src="${pup[x].src}" alt="${pup[x].alt}" class="articleimg">
                        </div>
                        <div class="byline">
                            <p> ${pup[x].title} </p> <br> <p> ${pup[x].by} </p> <p> ${pup[x].class} </p> 
                        </div>
                    </div>
                </a>`;
            console.log(newhtml)
            
        }
        $(".related").append(newhtml);

        $("#Nbutton").click(function() {
            console.log("clicked N")
            $.getJSON("content.json", function(pup) {
                var newhtml = "";
                for (var i = 0; i < pup.length; i++) {
                    if (pup[i].section === "N") {
                        newhtml = newhtml + 
                        ` <a href="${pup[i].href}">
                            <div class="writing">
                                <div class="img">
                                    <img class="articleimg" src="${pup[i].src}" alt="${pup[i].alt}" class="articleimg">
                                </div>
                                <div class="byline">
                                    <p> ${pup[i].title} </p> <br> <p> ${pup[i].by} </p> <p> ${pup[i].section} </p> 
                                </div>
                            </div>
                        </a>`
                        ;
                    }
                }
                $(".N").html(newhtml);
            });
        });
        

        


 
    });


    
});