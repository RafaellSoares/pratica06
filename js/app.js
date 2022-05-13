const search = document.querySelector("#search");

search.onclick = function(e){
    e.preventDefault();
    let filters2 = document.querySelector("input[name='searchfilter']:checked").value;
    let searchstring = document.querySelector("input[name='search_string']").value;
    if(filters2 === "all") alert("Busca geral por " + searchstring)
    else if (filters2 === "cod") alert("Busca pelo código por " + searchstring)
    else if (filters2 === "mat") alert("Busca pelo matricula por " + searchstring)
    else alert("Busca pleo nome por " + searchstring)
}