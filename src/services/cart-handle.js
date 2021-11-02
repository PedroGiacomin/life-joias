//Salva o id de todos os itens presentes no carrinho no local storage

export const addItemToCart = (itemId) =>{
  //Pega o array de itens, se nao tiver cria um vazio
 
  //String --> array
  let cartItens = JSON.parse(localStorage.getItem('cartItens') || '[]');
  //Add elemento ao array
  cartItens.push(itemId);

  //Array --> String e salva no local storage
  localStorage.setItem('cartItens', JSON.stringify(cartItens));
};


