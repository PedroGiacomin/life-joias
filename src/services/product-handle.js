export const PRODUTO_ATUAL = "@produto-atual-Token";

export const addProdutoAtual = (produto) =>{
  sessionStorage.setItem(PRODUTO_ATUAL, JSON.stringify(produto));
};

export const getProdutoAtual = () => {
  let c = JSON.parse(sessionStorage.getItem(PRODUTO_ATUAL));
  return c;
};

export const deleteProdutoAtual = () => {
  sessionStorage.removeItem(PRODUTO_ATUAL);
};

