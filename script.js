// JavaScript Document

function validate() {
	
	if( document.rsvpform.fname.value == "" )
         {
            alert( "Please complete all required fields!" );
            document.myForm.fname.focus() ;
            return false;
         }
		 
	if( document.rsvpform.lname.value == "" )
         {
            alert( "Please complete all required fields!" );
            document.myForm.lname.focus() ;
            return false;
         }
}

function enlarge(x) {
    x.style.height = "100px";
    x.style.width = "100px";
}

function shrink(x) {
    x.style.height = "50px";
    x.style.width = "50px";
}