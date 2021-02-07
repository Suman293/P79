function getmenu() 
{
    var htmldata;
    htmldata="<ol class-'menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.lenght;i++){
        htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
    }
    htmldata-htmldata+"<ol>"
    document.getElementById("display_name").innerHTML = htmldata;
}

function add_item() 
{
    var htmldata;
    var item-document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class-'cards'>" + '<img src="https://d4t7t8y8xqo0t.cloudfront.net/resized/720X280/group%2F6160%2Fmenu820200706104415.jpg"/>'
}