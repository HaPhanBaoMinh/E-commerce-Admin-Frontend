import React, { memo, useRef, useState } from 'react'
import styled from 'styled-components'
import { GrFormClose } from "react-icons/gr";
import Button2 from '../buttons/Button_2';
import { ROUTE } from "../api/route";
import { useDispatch } from 'react-redux';
import { deleteCategoryData, updateCategoryData } from '../../action/categoryListAction';
import { AiOutlinePlus } from "react-icons/ai";
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../../pages/loading/Loading';


function CategoryItem({ category }) {
    const formData = useRef(new FormData());
    const [title, settitle] = useState(category.name);
    const [description, setDescription] = useState(category.description);
    const [image, setimage] = useState(`${ROUTE}/images/${category.image}`);
    const dispath = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const toastOption = {
        position: "bottom-right",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };

    const onDeleteImage = () => {
        setimage(undefined)
    }

    const onDeleteCategory = async () => {
        setIsLoading(true)
        const { data } = await axios.delete(`${ROUTE}/api/category`, {
            data: {
                id: category.id
            }
        })
        if (data.status) {
            setIsLoading(false)
            dispath(deleteCategoryData(category.id))
            toast.success("Delete success", toastOption);
        }
        console.log(data);
    }

    const onAddNewImages = (e) => {
        const file = e.target.files[0];
        if (file) {
            setimage(URL.createObjectURL(file))
            formData.current.append('file', file)
        }
    }

    const onSaveCategory = async () => {
        formData.current.append('id', category.id)
        formData.current.append('name', title)
        formData.current.append('description', description)
        formData.current.append('image', category.image)

        if (!image) {
            toast.error("Select image please", toastOption);
            return;
        }
        // for (const value of formData.current.values()) {
        //     console.log(value); 
        // }
        setIsLoading(true)
        const { data } = await axios.put(`${ROUTE}/api/category`, formData.current)
        // console.log(data);
        if (data.status) {
            setIsLoading(false)
            dispath(updateCategoryData(data.inserted));
            toast.success("Updated category", toastOption);
        }

        formData.current.delete("id")
        formData.current.delete("name")
        formData.current.delete("description")
        formData.current.delete("file")
        formData.current.delete("image")
    }

    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <Container>
            {category ? <>
                <div className="title">
                    <h2>Category</h2>
                    <button onClick={() => onDeleteCategory()}>
                        <GrFormClose />
                    </button>
                </div>
                <div className="images">

                    {image ?
                        <>
                            <img src={image} alt="" />
                            <span onClick={() => onDeleteImage()}><GrFormClose /></span>
                        </> :
                        <label className="add-new-img">
                            <AiOutlinePlus />
                            <input type="file" id="file-upload" onChange={(e) => onAddNewImages(e)} />
                        </label>
                    }
                </div>
                <div className="category">
                    <input type="text" value={title} onChange={(e) => settitle(e.target.value)} />
                    <textarea name="" id="" cols="30" rows="10" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <Button2 height={"35px"} width={"50%"} onClick={() => onSaveCategory()}>
                    <h2>Save</h2>
                </Button2>
            </> : <p>loading...</p>}
        </Container>
    )
}

export default memo(CategoryItem)

const Container = styled.div`
    width: calc(96%/3);
    min-width: 310px;
    background-color: #ffff;
    border-radius: 5px;
    padding: var(--padding);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    @media screen and (max-width: 600px)  {
        width: 100%;
    }
    @media only screen and (max-width: 1050px) and (min-width: 450px) {
        width: 49%;
    }
    .title{
        width: 100%;
        display: flex;
        justify-content: space-between;
        button{
            cursor: pointer;
            height: 30px;
            width: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--orange);
            border: none;
            border-radius: 3px;
            svg{
                font-size: 20px;
            }
            &:hover{
                outline: 0.5px solid;
            }
        }
    }
    .images{
        width: 60%;
        height: 300px;
        background-color: #ffffff;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        span{
            position: absolute;
            top: 0;
            right: 0;
            height: 20px;
            width: 20px;
            background-color: #b8b8b8;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
        img{
            width: 100%;
        }
        .add-new-img{
                height: 100px;
                width: 100px;
                margin: auto 0;
                border-radius: 5px;
                border: 2px dashed var(--orange);
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                input{
                    display: none;
                }
                svg{
                    color: var(--orange);
                    font-size: 25px;
                }
            
            }
    }
    .category{
        height: 140px;
        /* background-color: aqua; */
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        input{
            font-size: 20px;
            border: none;
            outline: none;
            border-bottom: 1px solid;
        }
        textarea{
            font-size: 15px;
            padding: 10px;

        }
        /* h1{
            font-size: 20px;
        } */
    }
`