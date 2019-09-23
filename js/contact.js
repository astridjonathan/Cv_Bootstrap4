

$(function(){

    $('#formContact').submit(function(e){
      // ---2 Stopper la redirection de la page
      e.preventDefault();


      $("#formContact .alert-danger").remove();
      $("#formContact .is-invalid").removeClass();



      // ---3 RFécupérer les éléments à verifier
      const nom = $('#nom');
      const prenom = $('#prenom');
      const email = $('#email');
      const tel = $('#tel');
      const select = $('#selectForm1'); 
    const check= $('#checkForm1'); 
    const sujet= $('#sujet'); 
    const message= $('#message'); 
   /*  const txt= message.length; */

     // ---4 Vérification des champs

          //Nom: si le champ est vide 
          //if (prenom.val().length === 0) autre méthodologie
          if (nom.val() == ''){
                  console.log("Vous avez oublié votre nom");
                  nom.addClass('is-invalid');
          }

           //Prenom: si le champ est vide 
          if (prenom.val() == ''){
              console.log("Vous avez oublié votre prenom");
              prenom.addClass('is-invalid');
          }
           //email: si le champ est vide 
          if (email.val() == ''){
              console.log("Vous avez oublié votre email");
             email.addClass('is-invalid');
          }
          //tel: si le champ est vide 
          if (tel.val() == ''){
              console.log("Vous avez oublié votre tel");
              tel.addClass('is-invalid');
          }
            //selectform1: si une option est sélectionnée
            if (select.val() === ''){
              console.log("Vous avez oublié de selectionner un budget");
              select.addClass('is-invalid');
          }

               //Section check
              /*(check.prop( "checked", true );*/

      // Uncheck #x
/* check.prop( "checked", false ); */
/* if(check.is(':checked')) {
  $(this).prop('checked',true);
  select.addClass('is-invalid');
} else {
  $(this).prop('checked',false);
  select.addClass('is-invalid');
} */

  //tel: si le champ est vide 
  if (sujet.val() == ''){
      console.log("Vous avez oublié votre sujet");
      sujet.addClass('is-invalid');
  }
  //tel: si le champ est vide 
  var minlength = 15;
  var txt = message.val();
  if (txt.length < minlength && txt==''){
      console.log(txt.length) ;
      console.log(txt);
      console.log("Vous entre un message avec min 15 caractères au lieu de " + txt.length);
      message.addClass('is-invalid');
  }

  if( $('#formContact .is-invalid').length === 0 ) {
      console.log("Pas d'erreurs de validation");

      $(this).replaceWith(`
          <div class="alert alert-success">
              Votre contact à bien été transmis.
              Nous vous répondrons dans les meilleurs délais.
          </div>
      `);
  
  
}else {
      console.log("Il y a eu des erreurs de validation");

      $(this).prepend(`
          <div class="alert alert-danger">
              Nous n'avons été en mesure de valider votre contact.
              Vérifiez vos informations.
          </div>
      `);

  }


  });


   




   
   

})

