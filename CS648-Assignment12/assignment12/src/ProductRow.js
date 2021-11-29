import React, { Component } from 'react'

class ProductRow extends Component {

    destroy = () => {
        this.props.onDestroy(this.props.product.id);
   }

    render() {
        const {name, price, category}=this.props.product
        return (
            <tr>
                <td>{name}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>
                    <button class="btn btn-info" type="button" onClick={this.destroy}>Delete</button>
                </td>
            </tr>
        )
    }
}

export default ProductRow
