import React, { useState } from 'react'
import styled from 'styled-components'
import { RiDeleteBin7Line } from "react-icons/ri";
import { ROUTE } from '../api/route';
import { AiOutlinePlus } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
import { memo } from 'react';

function ProductImage({ formData, images, setimages }) {
    // const [images, setimages] = useState([]);

    const onAddNewImages = (e) => {
        const file = e.target.files[0];
        if (file) {
            setimages(img => [URL.createObjectURL(file), ...img])
            formData.current.append('files', file)
        }
    }

    const onRemoveImages = (deleteIndex) => {
        setimages(img => img.filter((value, index) => index !== deleteIndex))
        const image = formData.current.getAll('files');
        for (var i = 0; i < image.length; i++) {
            formData.current.delete('files');
        }
        image.splice(deleteIndex, 1);
        for (var i = 0; i < image.length; i++) {
            formData.current.append('files', image[i]);
        }
    }



    return (
        <Container>
            <h2>Image</h2>
            <div className="images-container">

                {images.length < 5 ?

                    <div className="image">
                        <label className="add-new-img">
                            <AiOutlinePlus />
                            <input type="file" id="file-upload" onChange={(e) => onAddNewImages(e)} />
                        </label>
                    </div> : undefined
                }

                {images.map((img, index) =>
                    <div className="image" key={uuidv4()}>
                        <img src={`${img}`} alt="" key={uuidv4()} />
                        <div className="remove-image" onClick={() => onRemoveImages(index)}>
                            <RiDeleteBin7Line />
                        </div>
                    </div>)}

            </div>
        </Container>
    )
}

export default memo(ProductImage)

const Container = styled.div`
    padding: var(--padding);
    width: 40%;
    /* height: 500px;  */
    height: 100%; 
    box-sizing: border-box;
    gap: var(--padding);
    background-color: #ffc786b8;
    border-radius: 5px;
    @media screen and (max-width: 600px)  {
        margin: 10px 0;
        height: 50%;
        width: 100%;
        padding: 10px;
    }
    button{
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
    h2{
        height: 10%;
    }
    .images-container{
        width: 100%;
        height: 250px;
        display: flex;
        flex-direction: column;
        gap: 25px;
        overflow-y: auto;
        margin-bottom: 10px;
        .image{
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 110px;
            background-color: #ffff;
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
            img{
                height: 100%;
            }
            .remove-image{
                width: 15%;
                /* background-color: #ffc786b8; */
                display: flex;
                align-items: center;
                justify-content: center;
                svg{
                    font-size: 20px;
                    cursor: pointer;
                }
            }
        }
    }
    button{
        height: 10%;
    }
 `