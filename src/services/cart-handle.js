//Salva o id de todos os itens presentes no carrinho no local storage

export const addItemToCart = (itemId) =>{
  //Pega o array de itens, se nao tiver cria um vazio
 
  //String --> array
  let cartItens = JSON.parse(localStorage.getItem('cartItens') || '[]');
  //Add elemento ao array
  if(!cartItens.includes(itemId))
    cartItens.push(itemId);

  //Array --> String e salva no local storage
  localStorage.setItem('cartItens', JSON.stringify(cartItens));
};

//Limpa o carrinho
export const cleanCart = () =>{
  localStorage.setItem('cartItens', '[]');
}

//Deleta item do carrinho
export const deleteItem = (itemId) =>{
  //String --> array
  let cartItens = JSON.parse(localStorage.getItem('cartItens') || '[]');
  
  //tira elemento do array
  cartItens.splice(itemId,);

}
