import React, { Component } from 'react'

class ProductForm extends Component {

    render() {
        return (
            <div>
                <h2>Add a new Product</h2>
                <div >
                    <form> 
                        <div >
                            <label >Name</label><br/>
                            <input className="form-control" id="productName" type="text"  name="name"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="productCategory">Category</label><br/>
                            <input className="form-control" id="productCategory" type="text"  name="category"></input>
                        </div>
                        <div className="form-group">
                            <label >Price</label><br/>
                            <input  id="productPrice" type="text" name="price"></input>
                        </div>
                    
                        <button  type="button" onClick>Save</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ProductForm;