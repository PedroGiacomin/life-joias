//Salva o id de todos os itens presentes no carrinho no local storage

function arrayRemove(arr, value) { 
  
  const aux = arr.filter(function(ele){ 
      console.log("realizou essa funcao");
      return ele.product_id == value; 
  });
  console.log(aux);
  return aux;
  
}


export const addItemToCart = (item) =>{
  //Pega o array de itens, se nao tiver cria um vazio
 
  //String --> array
  let cartItens = JSON.parse(localStorage.getItem('cartItens') || '[]');
  //Add elemento ao array
  if(!cartItens.includes(item.product_id))
    cartItens.push(item);

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
  cartItens = arrayRemove(cartItens, itemId);
  localStorage.setItem('cartItens', JSON.stringify(cartItens));
}

export const getItem = (itemId) => {
  localStorage.getItem('cartItens', JSON.stringify(itemId));
}
