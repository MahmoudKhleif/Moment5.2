window.onload = getdata();

//ajax anrop-- med fetch Api

function getdata(){
    fetch('student.json')
    .then((res) => res.json())
    .then((data) => {
        let num1 = data[0].information;
        let num2 = data[0].websites;
        showInfo(num1);
        showSites(num2); })}


// loop inside student/json file 
function showInfo(student){
let outPut = document.getElementById("info");
 for(let i=0; i<student.length; i++){
    outPut.innerHTML += 
    "<strong>Namn:</strong> "+student[i].name+"<br>"+"<strong>Email:</strong>"+
    "<a href='mailto:"+ student[i].email +"'>Mahmoud89ah@hotmail.com</a>"+"<br>"+
    "<strong>Webbplats</strong>: "+
    "<a href='"+student[i].webSite+"'target=_blank>https://github.com/MahmoudKhleif<br></a>"
 }}


 // loop inside student/json file 

function showSites(site){
    let outPut2 = document.getElementById("sites");
    for(let i = 0; i<site.length; i++){
        outPut2.innerHTML += 
       " <li>"+"<a href='"+site[i].siteurl+"' target=_blank title='"+ site[i].description+"'>"+site[i].sitename+"</a>"
    +"</li>"
};}





