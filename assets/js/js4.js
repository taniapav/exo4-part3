//fonction pour valider que les mots de passes sont identiques.
function valid()
{
  //On stocke tout l'élement dans la variable pour utiliser la value et le borderColor sans réutiliser document.getElementById.
    var password = document.getElementById('password');
  var confirmPassword = document.getElementById('confirmPassword');
  //!= ça veut dire 'différent de'
  //si les deux sont différent à la validation on vert que les bordures soit rouge.
  if (password.value != confirmPassword.value) {
    confirmPassword.style.borderColor='red';
    password.style.borderColor='red';
    // ou alors si les deux sont égaux à la validation bordure green.
  }else{
    confirmPassword.style.borderColor='green';
    password.style.borderColor='green';
  }
}
