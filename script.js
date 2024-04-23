
$(document).ready(function() {
    // Load initial content
    $.getJSON("content.json", function(data) {
        displayContent(data, $(".related"));
    });

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
                            <p>${content[x].title}</p><p>${content[x].by}</p> <br><p>${content[x].section}</p>
                        </div>
                    </div>
                </a>`;
        }
        container.html(newhtml);
    }
});


