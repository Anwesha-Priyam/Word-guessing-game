P1name=localStorage.getItem("P1 Username");
P2name=localStorage.getItem("P2 Username");
P1Score=0;
P2Score=0;
document.getElementById("Name-P1").innerHTML=P1name + ":";
document.getElementById("Name-P2").innerHTML=P2name + ":";
document.getElementById("P1-score").innerHTML=P1Score;
document.getElementById("P2-score").innerHTML=P2Score;
document.getElementById("P-Question").innerHTML="Question turn- " + P1name;
document.getElementById("P-Answer").innerHTML="Answer turn - " + P2name;

function sendP2()
{
    getWord=document.getElementById("q-Word").value;
    userOutput=getWord.toLowerCase();
    console.log(userOutput);
    charAt1=userOutput.charAt(1);
    console.log(charAt1);
    lengthDivide2=Math.floor(userOutput.length/2);
    charAt2=userOutput.charAt(lengthDivide2);
    console.log(charAt2);
    lengthMinus1=userOutput.length-1;
    charAt3=userOutput.charAt(lengthMinus1);
    console.log(charAt3);
    remove1charAt=userOutput.replace(charAt1, "_");
    remove2charAt=remove1charAt.replace(charAt2, "_");
    remove3charAt=remove2charAt.replace(charAt3, "_");
    console.log(remove3charAt);
    questionWord="<h4 id='displayWord'>Q:" + remove3charAt + "</h4>";
    input="<br>Answer:<input type='text' id='checkInput'>";
    buttonCheck="<br><br><button class='btn-info' onclick='checkAns()'>Check answer</button>";
    displayWholeWord=questionWord + input + buttonCheck;
    document.getElementById("P-Question").innerHTML=displayWholeWord;
    document.getElementById("q-Word").value="";
}

Qturn="Player1";
Ansturn="Player2";

function checkAns()
{
    getAnswer=document.getElementById("checkInput").value;
    answer=getAnswer.toLowerCase();
    console.log(getAnswer);
    if(answer == userOutput)
    {
        if(Ansturn == "Player1")
        {
            P1Score=P1Score + 1;
            document.getElementById("P1-score").innerHTML=P1Score;
        }
        else
        {
            P2Score=P2Score + 1;
            document.getElementById("P2-score").innerHTML=P2Score;
        }
    }
    if(Ansturn == "Player1" && answer != getAnswer)
        {
            P1Score=P1Score - 1;
            P2Score=P2Score + 1;
            document.getElementById("P2-score").innerHTML=P2Score;
            document.getElementById("P1-score").innerHTML=P1Score;
        }
        else if(Ansturn == "Player2")
        {
            P1Score=P1Score + 1;
            P2Score=P2Score - 1;
            document.getElementById("P2-score").innerHTML=P2Score;
            document.getElementById("P1-score").innerHTML=P1Score;
        }
    if(Qturn == "Player1")
    {
        Qturn="Player2";
        document.getElementById("P-Question").innerHTML="Question turn-" + P2name;
    }
    else
    {
        Qturn="Player1";
        document.getElementById("P-Question").innerHTML="Question turn-" + P1name;
    }
    if(Ansturn == "Player1")
    {
        Ansturn="Player2";
        document.getElementById("P-Answer").innerHTML="Answer turn-" + P2name;
    }
    else
    {
        Ansturn="Player1";
        document.getElementById("P-Answer").innerHTML="Answer turn-" + P1name;
    }
    document.getElementById("q-Word").innerHTML="";
}