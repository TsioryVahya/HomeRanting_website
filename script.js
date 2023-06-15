function check(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(form.userid.value == "tsioryvahya@gmail.com" && form.pswrd.value == "1234")
  {
    window.open('file:///C:/Users/Administrateur/Desktop/Tragno/index.html')/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("Error Password or Username")/*displays error message*/
  }
}
