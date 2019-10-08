import React, { Component } from 'react';

import { ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../server/api';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    // const response = await api.get('products');
    // this.setState({ products: response.data });
    // console.log(response.data, 'teste');
  }

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(product => (
          <li>
            <img
              src="https://static.netshoes.com.br/produtos/chuteira-futsal-joma-vulcano-in/14/049-3391-014/049-3391-014_detalhe1.jpg?ims=326x"
              alt="Tenis"
            ></img>
            <strong>Tênis para seu treino</strong>
            <span>R$ 130,00</span>

            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#fff" />
              </div>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}
