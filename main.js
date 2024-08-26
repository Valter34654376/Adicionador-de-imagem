//Nesta parte ele irá criar uma função onde ao clicar no butão de (Nova imagem +) ele desse a parte do header
$(document).ready(function(){
    $('header button').click(function(){
         $('form').slideDown();
     })
///////////////////////////////////////////////////////////////////////////////////////////////////////////// 




//Nesta parte ele irá criar uma função onde ao clicar no butão de (Cancelar) ele sobi a parte do header
    $('#Cancelar').click(function() {
        $('form').slideUp();
    })
///////////////////////////////////////////////////////////////////////////////////////////////////////////// 




//Nesta função, permite que ao adicionar uma nova imagem ele  adiciona esta nova imagem ao redor da outras imagens.
$('form').on('submit', function(e){
    e.preventDefault();
    const endereçoImagemNova = $('#imagem-nova').val();
    const novoIntem  = $('<li style="display: none"></li>');
    $(`<img src="${endereçoImagemNova}"/>`).appendTo(novoIntem);
    $(`
        <div class="overley-imgamen-link ">
         <a href="${endereçoImagemNova}" targer="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
         </a>
        </div> `)

    .appendTo(novoIntem);
    $(novoIntem).appendTo('ul');
    $(novoIntem).fadeIn(1000);
    $('#imagem-nova').val('');
})

})
///////////////////////////////////////////////////////////////////////////////////////////////////////////// 
