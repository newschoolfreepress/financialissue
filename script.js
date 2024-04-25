
$(document).ready(function() {
    // Load initial content
    $.getJSON("content.json", function(data) {
        displayContent(data, $(".related"));
    });

    function addTargetParent() {
        var links = document.querySelectorAll('a'); // Select all links on the page
        
        links.forEach(function(link) {
          link.setAttribute('target', '_parent'); // Set the target attribute to '_parent'
        });
      }

    // Button click event handlers
    $("#Nbutton").click(function() {
        filterAndDisplayContent("N", $(".related"));
    });

    $("#Obutton").click(function() {
        filterAndDisplayContent("O", $(".related"));
    });

    $("#Fbutton").click(function() {
        filterAndDisplayContent("F", $(".related"));
    });

    // Function to filter and display content based on class
    function filterAndDisplayContent(className, container) {
        $.getJSON("content.json", function(data) {
            var filteredContent = data.filter(item => item.section === className);
            displayContent(filteredContent, container);
        });
    }

    // // Function to display content
    // function displayContent(content, container) {
    //     var newhtml = "";
    //     for (var x = 0; x < content.length && x < 7; x++) {
    //         newhtml += `
    //             <a href="${content[x].href}">
    //                 <div class="writing">
    //                     <div class="img">
    //                         <img class="articleimg" src="${content[x].src}" alt="${content[x].alt}">
    //                     </div>
    //                     <div class="byline">
    //                         <p>${content[x].title}<br>${content[x].by}</p> 
    //                     </div>
    //                 </div>
    //             </a>`;
    //     }
    //     container.html(newhtml);
    // }

     // Function to display content
     function displayContent(content, container) {
        var newhtml = "";
        for (var x = 0; x < content.length && x < 7; x++) {
            newhtml += `
                <a href="${content[x].href}" target="parent">
                    <div class="writing">
                        <div class="img" style="background-image: url(${content[x].src});"> </div>
                        <div class="byline">
                            <p>${content[x].title}<br>${content[x].by}</p> 
                        </div>
                    </div>
                </a>`;
        }
        container.html(newhtml);
    }
});


