import React, {Fragment} from 'react';
import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; //css toast notification
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

 
// toast.configure();
const ProductList = () => {
    const [products, setProduct] = useState([]);
 
    useEffect(() => {
        getProducts();
    }, []);
 
    const getProducts = async () => {
        const response = await axios.get('http://localhost:5000/products');
        setProduct(response.data);
    }
 
    const deleteProduct = async (id) => {
        if (window.confirm('Etes-vous sûr de vouloir supprimer l\'article?') == true){
            await axios.delete(`http://localhost:5000/products/${id}`);
            getProducts();
            toast.success("Produit supprimé avec succés", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                // bodyClassName: "toastity-color",
              });
        } else {
            return false;
        }  
    }

    // const options = {
    //     title: 'Title',
    //     message: 'Message',
    //     buttons: [
    //       {
    //         label: 'Yes',
    //         onClick: async (id)  => {
    //             await axios.delete(`http://localhost:5000/products/${id}`);
    //             getProducts();
    //         }
    //       },
    //       {
    //         label: 'No',
    //         onClick: () => alert('Ok alors pourquoi tu clic sur ce bouton alors ?')
    //       }
    //     ],
    //     closeOnEscape: true,
    //     closeOnClickOutside: true,
    //     keyCodeForClose: [8, 32],
    //     willUnmount: () => {},
    //     afterClose: () => {},
    //     onClickOutside: () => {},
    //     onKeypress: () => {},
    //     onKeypressEscape: () => {},
    //     overlayClassName: "overlay-custom-class-name"
    //   };
    //   confirmAlert(options);

    //fenetre confirmation
    // confirmAlert({
    //     customUI: ({ onClose }) => {
    //       return (
    //         <div className='custom-ui'>
    //           <h1>Are you sure?</h1>
    //           <p>You want to delete this file?</p>
    //           <button onClick={onClose}>No</button>
    //           <button
    //             onClick={() => {
    //               this.handleClickDelete();
    //               onClose();
    //             }}
    //           >
    //             Yes, Delete it!
    //           </button>
    //         </div>
    //       );
    //     }
    //   });

    return (
        <Fragment>
        <ToastContainer />
        <div>
            <h1 className="text-center my-5">Crud React NodeJs MySQL</h1>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Nom du produit</th>
                        <th>Prix</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { products.map((product, index) => (
                        <tr key={ product.id }>
                            <td>{ index + 1 }</td>
                            <td>{ product.title }</td>
                            <td>{ product.price }</td>
                            <td>
                                <Link to={`/edit/${product.id}`} className="btn btn-success me-2">Modifier</Link>
                                <button onClick={ () => deleteProduct(product.id)}className="btn btn-danger">Supprimer</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
            <Link to="/add" className="btn btn-secondary">Ajouter un nouveau produit</Link>
        </div>
        </Fragment>
    )
}
 
export default ProductList