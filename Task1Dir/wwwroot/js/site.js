window.onload = function () {
    initEvent()
}

function initEvent() {

}

function openForm(e) {

    var id = e.target.id

    url = `${apiUrl}/Form/GetSignature?formName=${id}`

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            form = document.getElementById('form')
            form.innerHTML = ""
            obj = JSON.parse(this.responseText)
            form.onsubmit = function (e) {
                e.preventDefault();
                form.innerHTML = ""
                submit = document.createElement("div")
                submit.innerHTML = obj.form.postmessage

                form.appendChild(submit)
            }

            for (i = 0; i < obj.form.items.length; i++) {
                switch (obj.form.items[i].type) {
                    case 'filler':
                        var elem = createFiller(obj.form.items[i]);
                        form.appendChild(elem);
                        break;
                    case 'text':
                        var elem = createText(obj.form.items[i]);
                        form.appendChild(elem);
                        break;
                    case 'textarea':
                        var elem = createTextArea(obj.form.items[i]);
                        form.appendChild(elem);
                        break;
                    case 'checkbox':
                        var elem = createCheckbox(obj.form.items[i]);
                        form.appendChild(elem);
                        break;
                    case 'button':
                        var elem = createButton(obj.form.items[i]);
                        form.appendChild(elem);
                        break;
                    case 'select':
                        var elem = createSelect(obj.form.items[i]);
                        form.appendChild(elem);
                        break;
                    case 'radio':
                        var elem = createRadio(obj.form.items[i]);
                        form.appendChild(elem);
                        break;
                }
            }
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader("Access-Control-Allow-Origin", apiUrl)
    xmlhttp.setRequestHeader("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
    xmlhttp.setRequestHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")
    xmlhttp.send();
}

function createFiller(item) {
    elem = document.createElement("div");

    elemFiller = document.createElement("filler")
    elemFiller.innerHTML = item.message;

    elem.appendChild(elemFiller)
    return elem;
}

function createText(item) {
    elem = document.createElement("div");
    elem.classList.add("item")
    elemInput = document.createElement("input")
    elemLabel = document.createElement("label")

    elemInput.name = item.name;
    elemInput.type = item.validationRules.type
    elemInput.required = item.required
    elemInput.disabled = item.disabled

    elemLabel.innerHTML = item.label

    elem.appendChild(elemLabel);
    elem.appendChild(elemInput);

    return elem;
}

function createTextArea(item) {
    elem = document.createElement("div");
    elem.classList.add("item")
    elemInput = document.createElement("textarea")
    elemLabel = document.createElement("label")

    elemInput.name = item.name;
    elemInput.required = item.required
    elemInput.type = item.validationRules.type
    elemInput.classList.add("elblock")
    elemInput.disabled = item.disabled

    elemLabel.innerHTML = item.label

    elem.appendChild(elemLabel);
    elem.appendChild(elemInput);

    return elem;
}

function createCheckbox(item) {
    elem = document.createElement("div");
    elem.classList.add("item")

    elemCheckbox = document.createElement("input")
    elemLabel = document.createElement("label")

    elemCheckbox.type = "checkbox"

    elemLabel.innerHTML = item.label

    elem.appendChild(elemLabel);
    elem.appendChild(elemCheckbox);

    return elem;
}

function createButton(item) {
    elem = document.createElement("input");
    elem.type = "submit"
    elem.text = item.text
    return elem;
}

function createSelect(item) {
    elem = document.createElement("div");
    elem.classList.add("item")

    elemSelect = document.createElement("select")
    elemLabel = document.createElement("label")

    elemSelect.name = item.name
    elemSelect.required = item.required
    elemSelect.disabled = item.disabled
    elemSelect.type = item.validationRules.type

    for (j = 0; j < item.options.length; j++) {
        var opt = document.createElement('option');
        opt.value = item.options[j].value;
        opt.innerHTML = item.options[j].text;
        opt.selected = item.options[j].selected;
        elemSelect.appendChild(opt);
    }

    elemLabel.innerHTML = item.label

    elem.appendChild(elemLabel);
    elem.appendChild(elemSelect);

    return elem;
}

function createRadio(item) {
    elem = document.createElement("div");
    elem.classList.add("item")

    elem.style.left = '500px'

    for (k = 0; k < item.items.length; k++) {
        elemRadioBtn = document.createElement("input")
        elemLabelBtn = document.createElement("label")

        elemRadioBtn.value = item.items[k].value
        elemRadioBtn.checked = item.items[k].checked
        elemRadioBtn.name = item.name
        elemRadioBtn.type = item.validationRules.type

        elemLabelBtn.innerHTML = item.items[k].label

        elem.appendChild(elemLabelBtn);
        elem.appendChild(elemRadioBtn);
    }


    return elem;
}