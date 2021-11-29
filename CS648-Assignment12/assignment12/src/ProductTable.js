import React, { Component } from 'react'
import ProductRow from './ProductRow';


class ProductTable extends Component {

    render() {
        
        return (
            <div>
                <table >
                    <thead >
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <ProductRow/>
                        <ProductRow/>
                        <ProductRow/>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable;