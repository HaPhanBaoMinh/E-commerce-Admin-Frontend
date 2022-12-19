import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { ROUTE } from '../../components/api/route';
import Button1 from '../../components/buttons/Button_1';
import BasicInfo from '../../components/newProductInfo/BasicInfo';
import CategoryInfo from '../../components/newProductInfo/CategoryInfo';
import PriceInfo from '../../components/newProductInfo/PriceInfo';
import ProductImage from '../../components/newProductInfo/ProductImage';
import { FiBox } from "react-icons/fi";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { addProductsData } from '../../action/productsReducerAction';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from '../loading/Loading';

function NewProduct() {
    const formData = useRef(new FormData());
    const [name, setname] = useState("");
    const [brand, setbrand] = useState("");
    const [quantity, setquantity] = useState("");
    const [price, setprice] = useState("");
    const [discount, setdiscount] = useState("");
    const [description, setdescription] = useState("");
    const [categoryId, setcategoryId] = useState("");
    const [day_end_discount, setday_end_discount] = useState("");
    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const dispath = useDispatch();
    const toastOption = {
        position: "bottom-right",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };

    const onNewProduct = async () => {
        if (name.length < 3) {
            toast.error("Product name must have more 3 character", toastOption);
            return
        }

        if (brand.length < 3) {
            toast.error("Product brand must have more 3 character", toastOption);
            return
        }

        if (description.length < 3) {
            toast.error("Product description must have more 3 character", toastOption);
            return
        }

        if (categoryId === "") {
            toast.error("Select category for Product", toastOption);
            return
        }

        if (day_end_discount === "") {
            toast.error("Select day end discount for Product", toastOption);
            return
        }

        formData.current.append('name', name);
        formData.current.append('brand', brand);
        formData.current.append('description', description);
        formData.current.append('category_id', categoryId);
        formData.current.append('quantity', quantity);
        formData.current.append('price', price);
        formData.current.append('discount_price', discount);
        formData.current.append('day_end_discount', day_end_discount);

        setIsLoading(true)
        const { data } = await axios.post(`${ROUTE}/api/product`, formData.current,)
        if (data.status) {
            setIsLoading(false)
            dispath(addProductsData(data.inserted))
            formData.current.delete('name');
            formData.current.delete('brand');
            formData.current.delete('description');
            formData.current.delete('category_id');
            formData.current.delete('quantity');
            formData.current.delete('price');
            formData.current.delete('discount_price');
            formData.current.delete('day_end_discount');
            for (let index = 0; index < 5; index++) {
                formData.current.delete('files');
            }
            toast.success("New product!", toastOption);
            setday_end_discount(null);
            setcategoryId("")
            setdescription("")
            setdiscount("")
            setprice("")
            setquantity("")
            setbrand("")
            setname("")
            setimages([])
        }

        // for (const value of formData.current.values()) {
        //     console.log(value);
        // }
        formData.current.delete('name');
        formData.current.delete('brand');
        formData.current.delete('description');
        formData.current.delete('category_id');
        formData.current.delete('quantity');
        formData.current.delete('price');
        formData.current.delete('discount_price');
        formData.current.delete('day_end_discount');
        for (let index = 0; index < 5; index++) {
            formData.current.delete('files');
        }

    }

    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <Container>

            <div className="title">
                <h1>New product</h1>
                <button onClick={() => onNewProduct()}>
                    Save Product
                </button>
            </div>
            <div className="half-row top-div">
                <BasicInfo
                    name={name}
                    brand={brand}
                    quantity={quantity}
                    description={description}
                    setname={setname}
                    setbrand={setbrand}
                    setquantity={setquantity}
                    setdescription={setdescription}
                />
                <ProductImage formData={formData} setimages={setimages} images={images} />
            </div>
            <div className="half-row bottom-div">
                <PriceInfo
                    price={price}
                    discount={discount}
                    day_end_discount={day_end_discount}
                    setprice={setprice}
                    setdiscount={setdiscount}
                    setday_end_discount={setday_end_discount} />
                <CategoryInfo setcategoryId={setcategoryId} categoryId={categoryId} />
            </div>


        </Container>
    )
}

export default NewProduct

const Container = styled.div`
    padding: var(--padding);
    width: 100%;
    height: 100%; 
    box-sizing: border-box;
    gap: var(--padding);
    display: flex;
    flex-direction: column;
    font-size: 20px;
    .sucess-inform{
        height: 100%;
        width: 100%;
        /* background-color: aqua; */
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        flex-direction: column;
        .back{
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.2s ease;
            &:hover{
                background-color: #a1a1a158;
                transition: 0.2s ease;
            }
            svg{
                font-size: 40px;
            }
        }
        svg{
            font-size: 150px;
        }
        h1{
            font-size: 50px;
        }
    }
    .top-div{
        height: 70%;
    }
    .bottom-div{
        height: 30%;
    }
    .half-row{
        width: 100%;
        display: flex;
        gap: var(--padding);
    }
    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        button{
            height: 40px;
            outline: none;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            font-weight: 600;
            padding: 0 15px;
            background-color: var(--orange);
            &:hover{
                outline: 0.5px solid;
            }
        }
    }
`