# Entrega de projeto - Carrinho de compras shopee com Node.js | DIO

Neste projeto, foi desenvolvido um carrinho de compras afim de entender alguns conceitos da programação (modularizar codigo, organizar codigo, controller), services são partes do codigo para lidar com regras de negocios, foi criado 2 services (item e cart) e um controler(index.js) para realizar a interação com esses serviços

O carrinho esta sendo representado em um array de items

<table>
    <tr><th>Funcionalidades implementadas:</th></tr>
    <tr>
        <td>Adicionar item</td>
        <td>addItem(userCart,item)</td>
    </tr>
    <tr>
        <td>Remover item</td>
        <td>removeItem(userCart,name)</td>
    </tr>
    <tr>
        <td>Deletar item</td>
        <td>deleteItem(userCart,name)</td>
    </tr>
    <tr>
        <td>Total do carrinho</td>
        <td>calculateTotal(useCart)</td>
    </tr>
    <tr>
        <td>Mostrar carrinho</td>
        <td>displayCart(useCart)</td>
    </tr>
    <tr>
        <td>Ordem alfabetica por nome</td>
        <td>orderByName(userCart)</td>
    </tr>
</table>

## Tecnologias Utilizadas

- JavaScript.
- NodeJs.

## Como Executar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/Davi-Andrade/bootcamp-meutudo-dio
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd shopee-cart
   ```

3. Em seu terminal e na pasta do projeto

   ```bash
   node src/index.js