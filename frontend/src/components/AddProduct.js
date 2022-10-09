import React from 'react';
import { useState, Fragment } from 'react'
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import { toast } from "react-toastify";


// toast.configure();
 
const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const navigate= useNavigate();
 
    const saveProduct = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/products',{
            title: title,
            price: price
        });
        navigate("/");
        
        toast.success("Produit ajouté avec succés", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            bodyClassName: "toastity-color",
          });
    }
 
    return (
        <>
        <h1 className="text-center my-5">Ajouter un produit</h1>
        <div className='container'>
            <form onSubmit={ saveProduct }>
                <div className="field">
                    <label className="label">Nom du produit</label>
                    <input 
                        className="form-control w-50"
                        type="text"
                        placeholder="Nom du produit"
                        value={ title }
                        onChange={ (e) => setTitle(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Prix</label>
                    <input 
                        className="form-control w-50"
                        type="text"
                        placeholder="Prix"
                        value={ price }
                        onChange={ (e) => setPrice(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="btn btn-success mt-3">Ajouter</button>
                    <Link to="/" className="btn btn-secondary mt-3 ms-3">Retourner sur la liste des produits</Link>
                </div>
            </form>
        </div>
        </>
    )
}
 
export default AddProduct