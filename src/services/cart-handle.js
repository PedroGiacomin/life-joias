//Salva o id de todos os itens presentes no carrinho no local storage

function arrayRemove(arr, value) { 
  
  const aux = arr.filter(function(ele){ 
      console.log("realizou essa funcao");
      return ele.product_id == value; 
  });
  console.log(aux);
  return aux;
  
}


export const addItemToCart = (item, quantidade, tamanho) =>{
  //Pega o array de itens, se nao tiver cria um vazio
  item.product_quantidade = quantidade;
  item.product_tamanho = tamanho;
  //String --> array
  let cartItens = JSON.parse(sessionStorage.getItem('cartItens') || '[]');
  //Add elemento ao array
  if(!cartItens.some(e => e.product_id === item.product_id))
    cartItens.push(item);

  //Array --> String e salva no local storage
  sessionStorage.setItem('cartItens', JSON.stringify(cartItens));
};

//Limpa o carrinho
export const cleanCart = () =>{
  sessionStorage.setItem('cartItens', '[]');
}

//Deleta item do carrinho
export const deleteItem = (itemId) =>{
  //String --> array
  let cartItens = JSON.parse(sessionStorage.getItem('cartItens') || '[]');
  
  cartItens.splice(cartItens.findIndex(e => e.product_id === itemId), 1);

  sessionStorage.setItem('cartItens', JSON.stringify(cartItens));
}

export const getItem = (itemId) => {
  sessionStorage.getItem('cartItens', JSON.stringify(itemId));
}
