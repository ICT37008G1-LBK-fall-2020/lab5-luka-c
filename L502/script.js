var isEmpty = document.getElementById("empty-list");

if (isEmpty.children.length == 0){
    alert('empty');
} else if (isEmpty.children.length > 0) {
    alert('is not empty');
}