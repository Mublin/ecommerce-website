import React, { useEffect, useState } from "react";
import "./productsScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, listProducts, saveProduct } from "../../actions/productActions";


const ProductsScreen = (props)=>{
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false)
    const productSave = useSelector(state => state.productSave)
    const { loading: loadingSave, success: successSave, error: errorSave } = productSave;
    const productDelete = useSelector(state => state.productDelete)
    const { loading: loadingDelete, success: successDelete, error: errorDelete } = productDelete;
    const productList = useSelector(state=> state.productList)
    const {loading, products, error} = productList
    
    const [id, setId] = useState('')
    const [name, setName]= useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState(0)
    const [description, sethescription] = useState('')
    const [brand, setBrand] = useState('')
    const [countInStock, setCountInStock] = useState(0)
    const [image, setImage] = useState('')
    
    useEffect(()=>{
        if (successSave){
            setModalVisible(false)
        }
        dispatch(listProducts())
        return () => {
            //
        };
    }, [successSave, successDelete])
    const openModal = (product) => {
        setModalVisible(true)
        setId(product._id)
        setName(product.name)
        setCategory(product.category)
        setPrice(product.price)
        sethescription(product.description)
        setBrand(product.brand)
        setCountInStock(product.countInStock)
        setImage(product.image)
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(saveProduct({ 
            _id: id, name, price, image, 
            countInStock, brand, description, category
        }))
    }
    const deleteHandler = (product) =>{
        dispatch(deleteProduct(product._id))
    }
    return (
    <div>
        <div className="content content-margined">
            <div className="product-header">
                <h3>Products</h3>
                <button onClick={()=>openModal({})}>Create Product</button>
            </div>
        </div>
        {modalVisible && 
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h3>Create a Product</h3>
                    </li>
                    <li>
                        {loadingSave && <div>Loading...</div>}
                        {errorSave && <div>{errorSave}</div>}
                    </li>
                    <li>
                        <label htmlFor="name">
                            Name
                        </label>
                        <input type="text" name="name" defaultValue={name} placeholder="ex.. zaki" id="name" onChange={(e)=>{ setName(e.target.value)}} />
                    </li>
                    <li>
                        <label htmlFor="image">
                            Image
                        </label>
                        <input type="text" name="image"  defaultValue={image} id="image" onChange={(e)=>{ setImage(e.target.value)}} />
                    </li>
                    <li>
                        <label htmlFor="price">
                            Price
                        </label>
                        <input type="number" name="price" defaultValue={price} placeholder="eg.. $190" id="price" onChange={(e)=>{ setPrice(e.target.value)}} />
                    </li>
                    <li>
                        <label htmlFor="brand">
                            Brand
                        </label>
                        <input type="text" name="brand" defaultValue={brand} placeholder="e.g.. Nike" id="brand" onChange={(e)=>{ setBrand(e.target.value)}} />
                    </li>
                    <li>
                        <label htmlFor="category">
                            Category
                        </label>
                        <input type="text" name="category" defaultValue={category} placeholder="ex.. shirts" id="category" onChange={(e)=>{ setCategory(e.target.value)}} />
                    </li>
                    <li>
                        <label htmlFor="instock">
                            Instock
                        </label>
                        <input type="number" name="countInStock" defaultValue={countInStock} placeholder="ex.. 1000" id="instock" onChange={(e)=>{ setCountInStock(e.target.value)}} />
                    </li>
                    <li>
                        <label htmlFor="description">Description</label>
                        <textarea type="text" defaultValue={description} name="description" id="description" placeholder="Enter product description" onChange={(e)=>{ sethescription(e.target.value) }} />
                    </li>
                    <li>
                        <button type="submit" className="submitbutton">{ id ? "Update" : "Create a Product" }</button>
                    </li>
                    <li>
                        <button type="button" className="button-secondary" onClick={()=> setModalVisible(false)}>Back</button>
                    </li>
                </ul>
            </form>
            </div>
            }
            <div className="product-list">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, i)=> (
                            <tr key={product._id}>
                            <td>{product._id}</td>
                            <th>{product.name}</th>
                            <th>{product.price}</th>
                            <th>{product.category}</th>
                            <th>{product.brand}</th>
                            <th>
                                <button onClick={()=>openModal(product)}>Edit</button>
                                {"    "}
                                <button onClick={()=>deleteHandler(product)}>Delete</button>
                            </th>
                            <th></th>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>)}



export default ProductsScreen