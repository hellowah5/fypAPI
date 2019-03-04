function addRow() {
    var form = document.querySelector('.rows')
    var br = document.createElement("br")

    var div = document.createElement('div')
    div.classList.add('row')

    var titleLabel = document.createElement('label')
    titleLabel.innerHTML = 'Title '

    var titleInput = document.createElement('input')
    titleInput.setAttribute("type", "text")
    titleInput.name = 'Title'
    titleInput.placeholder = 'Title'
    titleInput.required = true;

    var latLabel = document.createElement('label')
    latLabel.innerHTML = 'Latitude '

    var latInput = document.createElement('input')
    latInput.setAttribute("type", "number")
    latInput.setAttribute("step", "any")
    latInput.name = 'Lat'
    latInput.placeholder = 'Latitude'
    latInput.required = true;

    var lonLabel = document.createElement('label')
    lonLabel.innerHTML = 'Longitude '

    var lonInput = document.createElement('input')
    lonInput.setAttribute("type", "number")
    lonInput.setAttribute("step", "any")
    lonInput.name = 'Lng'
    lonInput.placeholder = 'Longitude'
    lonInput.required = true;

    var descLabel = document.createElement('label')
    descLabel.innerHTML = 'Description '

    var descInput = document.createElement('input')
    descInput.setAttribute("type", "text")
    descInput.name = 'Description'
    descInput.placeholder = 'Description(Optional)'

    var optionArray = ["Building", "Pier", "Beach", "Typhoon shelters", "Others"];
    var selectList = document.createElement('select')
    selectList.className = "dropdown"
    selectList.name = "groupType"
    for (var i = 0; i < optionArray.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", optionArray[i]);
        option.text = optionArray[i];
        selectList.appendChild(option);
    }

    var deleteRowButton = document.createElement('input')
    deleteRowButton.setAttribute("type", "button")
    deleteRowButton.name = 'deleteRowButton'
    deleteRowButton.classList.add('deleteRowButton')
    deleteRowButton.value = 'Delete'
    deleteRowButton.addEventListener("click", deleteRow)

    div.appendChild(br)
    // div.appendChild(titleLabel)
    div.appendChild(titleInput)
    // div.appendChild(latLabel)
    div.appendChild(latInput)
    // div.appendChild(lonLabel)
    div.appendChild(lonInput)
    // div.appendChild(descLabel)
    div.appendChild(descInput)
    div.appendChild(selectList)
    div.appendChild(deleteRowButton)
    div.appendChild(br)

    form.appendChild(div)    
    updateCountMarker();
}

function deleteRow() {
    var form = document.querySelector('.rows')
    form.removeChild(this.parentNode)
    updateCountMarker();
}

function updateCountMarker(){
    var rowCount = document.querySelectorAll('div.row').length;
    var countMarker = document.getElementById('countMarker');
    countMarker.value = "Quantity: " + (rowCount - 1);
    countMarker.style = "display:inline-block";

    if (history.pushState) {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?quantity='+ (rowCount - 1) ;
        window.history.pushState({path:newurl},'',newurl);
    }
}