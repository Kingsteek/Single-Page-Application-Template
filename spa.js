var page = ["#page1", "#page2", "#page3", "#page4", "#page5","#page6"];
var currentPage = page[0];

function getPage(hash) //convert hash to a readable page name.
{
    var i = page.indexOf(hash); // for unknown hash value, change it to #page1
    if (i < 0 && hash != "")
    {
    window.location.hash = page[0]; 
    }
    
    return i < 1 ? page[0] : page[i];
}

function render(newPage) //show the new view
{
    if (newPage == currentPage)
    {
    return; //do nothing if the page is the same.
    }

    $(currentPage).hide(); //hide current page.
    $(newPage).show(); //show the new page navigated to.
    currentPage = newPage; //current page is now new page.
}

$(document).ready(function(){

    var newPage = getPage(window.location.hash);
    render(newPage);
 
    $('a').click(function(e) //handler for clicking links; avoids creating a new page when an anchor element is clicked in the 'nav' element.
    { 
        e.preventDefault(); //stops the url from trying to load.
        var newPage = $(this).attr('href'); 
        window.location.hash = newPage;
    });

    $(window).on('hashchange', function()
    {
        var newPage = getPage(window.location.hash);
        render(newPage);
    });
});