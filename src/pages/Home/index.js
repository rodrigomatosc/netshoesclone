import React, { Component } from 'react';

import { ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../server/api';
import { formatPrice } from '../../util/format';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormated: formatPrice(product.price),
    }));

    this.setState({ products: data });
    console.log(response.data, 'teste');
  }

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title}></img>
            <strong>{product.title}</strong>
            <span>{product.priceFormated}</span>

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
