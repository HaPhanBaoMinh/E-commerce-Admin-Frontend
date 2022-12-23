import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import { ROUTE } from '../../components/api/route';
import Button1 from '../../components/buttons/Button_1';
import BasicInfo from '../../components/productInfo/BasicInfo';
import CategoryInfo from '../../components/productInfo/CategoryInfo';
import PriceInfo from '../../components/productInfo/PriceInfo';
import ProductImage from '../../components/productInfo/ProductImage';
import { FiBox } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductsData, updateProductData } from '../../action/productsReducerAction';
import { toast } from "react-toastify";
import Loading from '../loading/Loading';

function ProductDetail() {
    const { sku } = useParams();
    const formData = useRef(new FormData());
    const [product, setProduct] = useState(undefined);
    const dispath = useDispatch();
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


    const toastOption = {
        position: "bottom-right",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };

    const onDeleteProduct = async (sku) => {
        setIsLoading(true)
        const { data } = await axios.delete(`${ROUTE}/api/product/${sku}`);
        if (data.status) {
            setIsLoading(false)
            toast.success("Deleted product!", toastOption);
            dispath(deleteProductsData(sku))
        }
    }

    const onSaveProduct = async () => {
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
        formData.current.append('sku', sku);
        for (let index = 0; index < images.length; index++) {
            formData.current.append('images', images[index]);
        }
        setIsLoading(true)
        const { data } = await axios.put(`${ROUTE}/api/product`, formData.current)
        if (data.status) {
            setIsLoading(false)
            dispath(updateProductData(data.inserted))
            toast.success("Updated product!", toastOption);
        }

    }

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await axios.get(`${ROUTE}/api/product/${sku}`);
            if (data.status) {
                const productDetail = await data.result[0];
                const day = new Date(productDetail.day_end_discount);
                const dayEndDiscount = `${day.getMonth() + 1}-${day.getDate()}-${day.getFullYear()}`
                setProduct(productDetail)
                setname(productDetail.name);
                setbrand(productDetail.brand);
                setquantity(productDetail.quantity);
                setdiscount(productDetail.discount_price);
                setdescription(productDetail.description);
                setcategoryId(productDetail.category_id);
                setprice(productDetail.price);
                setday_end_discount(dayEndDiscount);
                setprice(productDetail.price);
                setimages(productDetail.images);
            }
        }
        getProduct()
    }, [])

    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <Container>
            {
                product ? <>
                    <div className="title">
                        <h1>Edit product #{sku}</h1>
                        <div className="button-container">
                            <button className='delete-button' onClick={() => onDeleteProduct(sku)}>
                                Delete Product
                            </button>

                            <button onClick={() => onSaveProduct()}>
                                Save Product
                            </button>
                        </div>

                    </div>
                    <div className="half-row top-div">
                        <BasicInfo
                            product={product}
                            setname={setname}
                            setbrand={setbrand}
                            setquantity={setquantity}
                            setdescription={setdescription}
                            name={name}
                            brand={brand}
                            quantity={quantity}
                            description={description}
                        />
                        <ProductImage images={images} setimages={setimages} formData={formData} />
                    </div>
                    <div className="half-row bottom-div">
                        <PriceInfo
                            price={price}
                            discount={discount}
                            endDate={day_end_discount}
                            setprice={setprice}
                            setdiscount={setdiscount}
                            setday_end_discount={setday_end_discount}
                        />
                        <CategoryInfo categoryId={product.category_id} setcategoryId={setcategoryId} />
                    </div>
                </>
                    : <p>loading...</p>
            }
        </Container>
    )
}

export default ProductDetail

const Container = styled.div`
    padding: var(--padding);
    width: 100%;
    height: 100%; 
    box-sizing: border-box;
    gap: var(--padding);
    display: flex;
    flex-direction: column;
    font-size: 20px;
    
    .half-row {
        @media screen and (max-width: 600px)  {
            flex-direction: column;
        }
    }
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
        /* background-color: aqua; */
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
        .delete-button{
            background-color: #f34040;
        }
        h1{
            @media screen and (max-width: 600px)  {
                font-size: small;
            }
        }
        button{
            height: 40px;
            outline: none;
            cursor: pointer;
            margin-left: 10px;
            border: none;
            border-radius: 5px;
            font-weight: 600;
            /* padding: 0 15px; */
            background-color: var(--orange);
            &:hover{
                outline: 0.5px solid;
            }
        }
    }
`