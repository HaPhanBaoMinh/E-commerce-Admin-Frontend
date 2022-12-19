import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import CategoryItem from '../../components/categoryItem/CategoryItem'
import { v4 as uuidv4 } from 'uuid';
import { GrFormClose } from 'react-icons/gr';
import { AiOutlinePlus } from 'react-icons/ai';
import Button2 from '../../components/buttons/Button_2';
import { toast } from 'react-toastify';
import axios from 'axios';
import { ROUTE } from '../../components/api/route';
import { addnewCategoryData } from '../../action/categoryListAction';
import Loading from '../loading/Loading';

function Category() {
    const categoryList = useSelector(state => state.categoryList);
    const formData = useRef(new FormData());
    const [title, settitle] = useState();
    const [description, setDescription] = useState();
    const [image, setimage] = useState();
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

    const onAddNewImages = (e) => {
        const file = e.target.files[0];
        if (file) {
            setimage(URL.createObjectURL(file))
            formData.current.append('file', file)
        }
    }

    const onSaveCategory = async () => {
        formData.current.append('name', title)
        formData.current.append('description', description)
        if (!image) {
            toast.error("Select image please", toastOption);
            return;
        }
        // for (const value of formData.current.values()) {
        //     console.log(value); 
        // }

        setIsLoading(true);
        const { data } = await axios.post(`${ROUTE}/api/category`, formData.current)
        if (data.status) {
            setIsLoading(false);
            toast.success("New category!", toastOption);
            dispath(addnewCategoryData(data.inserted))
            settitle("")
            setimage("")
            setDescription("")
        }

        formData.current.delete("id")
        formData.current.delete("name")
        formData.current.delete("description")
        formData.current.delete("file")
        formData.current.delete("img1")
        formData.current.delete("img2")
    }

    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <Container>

            <div className="add-category">
                <div className="title">
                    <h2>New Category</h2>
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
                    <input type="text" placeholder='Title' value={title || ""} onChange={(e) => settitle(e.target.value)} />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Description' value={description || ""} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <Button2 height={"35px"} width={"50%"} onClick={() => onSaveCategory()} >
                    <h2>Save</h2>
                </Button2>
            </div>

            {categoryList.length > 0 ? categoryList.map(category => <CategoryItem category={category} key={uuidv4()} />) :
                <p className='Non-category'>No category</p>}
        </Container>
    )
}

export default Category

const Container = styled.div`
    padding: var(--padding);
    box-sizing: border-box;
    gap: var(--padding);
    display: flex;
    width: 100%;
    /* overflow: auto; */
    flex-wrap: wrap;
    height: fit-content;
    align-items: center;
    justify-content: flex-start;
    
    .Non-category{
        font-size: 20px;
        margin: auto;
    }
    .add-category{
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
            height: 30px;
            display: flex;
            justify-content: space-between;
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
`