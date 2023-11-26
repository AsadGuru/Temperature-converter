function my() {
    var cy = document.getElementById("cc").value;
document.getElementById("fc").value = Number(cy*9/5)+32;
document.getElementById("kc").value = Number(cy)+273;
}
function your() {
        var fy = document.getElementById("fc").value;
document.getElementById("cc").value = Number(fy-32)*5/9;
document.getElementById("kc").value = Number(fy-32)*5/9+273;
}
function its() {
        var ky = document.getElementById("kc").value;
document.getElementById("cc").value = Number(ky)-273;
document.getElementById("fc").value = Number(ky)-273*9/5+32;
}