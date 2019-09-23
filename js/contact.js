

$(function(){

      $('#formContact').submit(function(e){
        // ---2 Stopper la redirection de la page
        e.preventDefault();

        $("#formContact .alert-danger").remove();
        $("#formContact .is-invalid").removeClass();


        const nom = $("#nom");
        const prenom = $("#prenom");
        const email = $("#email");
        const tel = $("#tel");
        const sujet = $("#sujet");
        const message = $("#message");

        if(nom.val() == ''){
            nom.addClass('is-invalid');
        }
        if(prenom.val() == ''){
            prenom.addClass('is-invalid');
        }
        if(email.val() == ''){
            email.addClass('is-invalid');
        }
        if(tel.val() == ''){
            tel.addClass('is-invalid');
        }
        if(sujet.val() == ''){
            sujet.addClass('is-invalid');
        }
        if(sujet.val() == ''){
            sujet.addClass('is-invalid');
        }
        if(message.val() == ''){
            message.addClass('is-invalid');
        }

        if($("#formContact .is-invalid").length === 0){
            $(this).replaceWith (`
                <div class="alert alert-success">
                Nous avons bien pris en compte votre demande
                de contact
                </div>
            `);
        }else {
            $(this).prepend (`
            <div class="alert alert-danger">
                Nous n'avons été en mesure de valider votre contact.
                Vérifiez vos informations.
            </div>
        `);

    }


    });


     




     
     

})

