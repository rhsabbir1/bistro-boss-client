import React, { useContext } from 'react';
import { AuthContex } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const FoodCard = ({ item }) => {
    const { name, image, recipe, price, _id } = item;

    const { user } = useContext(AuthContex)
    const navigate = useNavigate()
    const location = useLocation()
    const [ ,refetch] = useCart()

    const handleAddToCart = item => {
        const { name, image, price, _id } = item;
        

        if (user && user.email) {
            const cartItem = {
                email : user.email,
                foodId : _id,
                name,
                price,
                image
            }
            fetch('http://localhost:5000/carts',{
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                       
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added to cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
               
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login !'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login' ,{state: {from : location}})
                }
            })
        }

    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='bg-black text-white absolute right-4 top-4 rounded-lg px-4'>${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-orange-400 bg-zinc-200 border-b-4 border-0">Add To Card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;