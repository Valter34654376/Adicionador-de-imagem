$(document).ready(function() {

    // Quando o documento estiver pronto, executa o código abaixo.

    // Função para exibir o formulário ao clicar no botão do header
    $('header button').click(function() {
        // Quando o botão dentro do header for clicado, a função `slideDown()` faz com que o formulário deslize para baixo, tornando-o visível.
        $('form').slideDown();
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Função para ocultar o formulário ao clicar no botão "Cancelar"
    $('#Cancelar').click(function() {
        // Quando o botão com o ID "Cancelar" for clicado, a função `slideUp()` faz com que o formulário deslize para cima, ocultando-o.
        $('form').slideUp();
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Função para adicionar uma nova imagem à lista ao redor das outras imagens ao submeter o formulário
    $('form').on('submit', function(e) {
        // Previne o comportamento padrão de submissão do formulário, que recarregaria a página
        e.preventDefault();

        // Captura o valor do campo de input com o ID "imagem-nova", que é o URL da nova imagem
        const endereçoImagemNova = $('#imagem-nova').val();

        // Cria um novo item de lista (<li>) que inicialmente está oculto (display: none)
        const novoItem = $('<li style="display: none"></li>');

        // Cria um novo elemento de imagem (<img>) com o src definido para o URL capturado e o adiciona ao novo item de lista
        $(`<img src="${endereçoImagemNova}"/>`).appendTo(novoItem);

        // Cria um overlay com um link para ver a imagem em tamanho real e o adiciona ao novo item de lista
        $(`
            <div class="overley-imagem-link">
                <a href="${endereçoImagemNova}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);

        // Adiciona o novo item de lista (que contém a nova imagem e o link) ao elemento <ul>
        $(novoItem).appendTo('ul');

        // Faz o novo item de lista aparecer gradualmente (fade in) em 1 segundo (1000 milissegundos)
        $(novoItem).fadeIn(1000);

        // Limpa o campo de input após a submissão para que o usuário possa adicionar uma nova imagem
        $('#imagem-nova').val('');
    });

});
