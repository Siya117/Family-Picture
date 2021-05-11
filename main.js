var i = 0;
var names=["father name", "mother name"];
var images=[ "father.jpg", "mother.png"];
function next_slide(){
    if (i > 1){
            i = 0;
    }
        document.getElementById("family_book_image").src = images [i];
        document.getElementById("family_member_name").innerHTML = names [i];
        i++;
    
}