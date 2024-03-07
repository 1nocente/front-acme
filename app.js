document.addEventListener('DOMContentLoaded', function () {
    const main = document.getElementById('main');

    let currentImageIndex = 0;

    function changeBackgroundImage(imageUrl) {
      main.style.transition = 'background-image 1s ease-out'; // Adiciona a transição
      main.style.backgroundImage = `url('${imageUrl}')`;
      main.style.backgroundSize = 'cover'; // Garante que a imagem cubra completamente o elemento

      // Reinicia a transição após um pequeno atraso
      setTimeout(() => {
        main.style.transition = 'none';
      }, 1000);
    }

    function fetchFilmes() {
      // Substitua 'caminho/para/seu/json' pelo caminho real do seu arquivo JSON
      fetch('./module/listaDeFilmes.json')
        .then(response => response.json())
        .then(filmes => {
          // Intervalo de troca de imagem (em milissegundos)
          const interval = 5000; // Troca a imagem a cada 5 segundos (ajuste conforme necessário)

          // Inicia o intervalo para trocar a imagem
          setInterval(() => {
            const filmeAtual = filmes[currentImageIndex];
            if (filmeAtual) {
              changeBackgroundImage(filmeAtual.imagem);
              currentImageIndex = (currentImageIndex + 1) % filmes.length;
            }
          }, interval);
        })
        .catch(error => console.error('Erro ao buscar o JSON:', error));
    }

    fetchFilmes();


  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const listaDeFilmes = document.getElementById('listaDeFilmes');

    // Substitua 'caminho/para/seu/json' pelo caminho real do seu arquivo JSON
    fetch('./module/listaDeFilmes')
      .then(response => response.json())
      .then(filmes => {
        filmes.forEach(filme => {
          // Criar div para cada filme
          const filmeDiv = document.createElement('div');
          filmeDiv.classList.add('filme', 'mb-4', 'mr-4');
          
          // Adicionar imagem
          const imagemDiv = document.createElement('div');
          imagemDiv.classList.add('w-32', 'h-48', 'bg-cover', 'bg-center', 'cursor-pointer');
          imagemDiv.style.backgroundImage = `url('${filme.imagem}')`;
          
          // Adicionar nome do filme ao passar o mouse
          imagemDiv.addEventListener('mouseover', function() {
            alert(filme.nome);
          });

          filmeDiv.appendChild(imagemDiv);
          
          // Adicionar div do filme à listaDeFilmes
          listaDeFilmes.appendChild(filmeDiv);
        });
      })
      .catch(error => console.error('Erro ao buscar o JSON:', error));
  });
  