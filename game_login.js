function Next()
{
    P1name=document.getElementById("P1-name").value;
    P2name=document.getElementById("P2-name").value;
    localStorage.setItem("P1 Username", P1name);
    localStorage.setItem("P2 Username", P2name);
    window.location.replace("game_page.html");
}