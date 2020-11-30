var phoneCont = document.getElementById('phone-container');

var phoneModels = phoneCont.getElementsByClassName('model');

for (var i = 0; i < phoneModels.length; i ++) {
    console.log(phoneModels[i].innerHTML);
}

