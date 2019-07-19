    for (t = 0; t < currentTemple.length; t++) {
        if (currentTemple[t].code == templeCode)
        parseSummary(currentTemple[t].summary);
        console.log(currentTemple[t].summary);
    }
}

function parseSummary(jsonObj) {
    var currentSummary = jsonObj;
    //console.log(currentSummary);
    var myPara = document.createElement('p');
    myPara.textContent = currentSummary;
    document.getElementById("summary").appendChild(myPara);

    setTimeout("changeImg()", time);

    myPara.textContent = currentSummary;
    document.getElementById("summary").replaceChild("")
    document.getElementById("summary").appendChild(myPara);