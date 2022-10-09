/* eslint-disable react-hooks/exhaustive-deps */
import React, {Fragment} from 'react';
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify";
 
const EditProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
 
    const updateProduct = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/products/${id}`,{
            title: title,
            price: price
        });
        navigate("/");
        toast.success("Produit modifié avec succés", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            // bodyClassName: "toastity-color",
          });
    }
 
    useEffect(() => {
        getProductById();
    }, []);
 
    const getProductById = async () => {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setTitle(response.data.title);
        setPrice(response.data.price);
    }
 
    return (
        <Fragment>
        <h1 className="my-5 text-center">Modifier le produit : { title }</h1>
        <div>
            <form onSubmit={ updateProduct }>
                <div className="field">
                    <label className="label">Nom du produit</label>
                    <input 
                        className="form-control w-50"
                        type="text"
                        placeholder="Title"
                        value={ title }
                        onChange={ (e) => setTitle(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Price</label>
                    <input 
                        className="form-control w-50"
                        type="text"
                        placeholder="Price"
                        value={ price }
                        onChange={ (e) => setPrice(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="btn btn-warning my-2">Modifier le produit</button>
                </div>
            </form>
        </div>
        </Fragment>
    )
}
 
export default EditProduct