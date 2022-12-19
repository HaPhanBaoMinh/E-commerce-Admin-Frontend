import React, { useState } from 'react'
import styled from 'styled-components'
import Button1 from "../buttons/Button_1"
import { HiOutlineCheckCircle } from 'react-icons/hi'
import { v4 as uuidv4 } from 'uuid';
import { ROUTE } from "../api/route"
import { IoMdClose } from "react-icons/io";
import { AiOutlinePlus } from 'react-icons/ai';

function Banner1({ img_1, setImg_1, title_1, description_1, span_1, setSpan_1, setTitle_1, setDescription_1, formData }) {
  const [newSpan, setnewSpan] = useState("");

  const deleteSpan = (deleteIndex) => {
    setSpan_1(preSpan => preSpan.filter((span, index) => index !== deleteIndex));
  }

  const onAddNewImages = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg_1(URL.createObjectURL(file))
      formData.current.append('img', file, 'img1')
    }
  }

  const addSpan = (text) => {
    setSpan_1(pre => [...pre, text])
    setnewSpan("")
  }

  return (
    <Container>
      <div className="header">
        <div className="header-title">
          <h1 className="header-text">
            {title_1 ? <textarea type="text" rows="3" value={title_1} onChange={(e) => setTitle_1(e.target.value)} /> : <p>loading...</p>}
          </h1>
          <br />
          <h4 className="header-description">
            {description_1 ? <input type="text" value={description_1} onChange={(e) => setDescription_1(e.target.value)} /> : <p>loading...</p>}
          </h4>
          <br />
          <Button1 width={"150px"} height={"12%"} radius={"5px"}  >
            <h2>Shop Now</h2>
          </Button1>

          <div className='add-widget'>
            <HiOutlineCheckCircle className='check-icons' />
            <input type="text" value={newSpan} onChange={(e) => setnewSpan(e.target.value)} />
            <button className='add-button' onClick={() => addSpan(newSpan)} >+</button>
          </div>

          {span_1 ? span_1.map((span, index) =>
            <div className='widget' key={uuidv4()}>
              <HiOutlineCheckCircle className='check-icons' />
              <h3> {span} </h3>
              <button className='delete-button' onClick={() => deleteSpan(index)}>
                <IoMdClose />
              </button>
            </div>
          ) : undefined}
        </div>
      </div>
      <div className="images">
        <div className="banner-widget">
          {img_1
            ?
            <>
              <img src={img_1} alt="" />
              <button onClick={() => setImg_1("")}>
                <IoMdClose />
              </button>
            </>
            :
            <label className="add-new-img">
              <AiOutlinePlus />
              <input type="file" id="file-upload" onChange={(e) => onAddNewImages(e)} />
            </label>}
        </div>
      </div>
    </Container>
  )
}

export default Banner1

const Container = styled.div`
  box-sizing: border-box;
  background-color: var(--green);
  width: 100%;
  height:85vh;
  display: grid;
  grid-template-columns: 50% 50%;
  position: relative;
  @media screen and (max-width: 600px) {
    grid-template-columns: unset;
    height: fit-content;
  }
  .delete-button{
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--orange);
    border: none;
    border-radius: 2px;
    cursor: pointer;
    svg{
      position: unset;
      font-size: 15px;
    }

  }
  .add-button{
    background-color: var(--orange);
    border: none;
    border-radius: 2px;
    cursor: pointer;
    svg{
      position: unset;
      font-size: 15px;
    }
  }
  svg{
        position: absolute;
        bottom: 0;
    }
  .widget{
    display: flex;
    gap: 10px;
    margin-top: 10px;
    align-items: center;
    z-index: 1;
  }
  .check-icons{
    position: unset;
    color: var(--orange);
  }
  .header{
    width: 100%;
    padding-left: var(--padding);
    display: flex;
    align-items: center;
    @media screen and (max-width: 600px) {
      padding-left: 0;
      height: fit-content;
    }
    .header-title{
      width: 80%;
      height: 70%;
      @media screen and (max-width: 600px) {
        width: 100%;
      }
    }
    .header-description{
      input{
        height: 20px;
        font-size: 20px;
        font-weight: 400;
        color: var(--small-text);
        width: 100%;
        @media screen and (max-width: 600px) {
          box-sizing: border-box;
          height: 40px;
        }
      }
    }
    .header-text{
      textarea{
          width: 100%;
          font-size: 62px;
          font-weight: 700;
          @media screen and (max-width: 600px) {
            box-sizing: border-box;
          }
              }
            }

        h2 {
             font-size: 17px;
          }
  }

  .add-widget{ 
    display: flex;
    gap: 10px;
    margin-top: 30px;
    height: 40px;
    align-items: center;
    /* background-color: aqua; */
    input{
      width: 60%;
      height: 70%;
      font-size: 14px;
    }
    button{
      width: 30px;
      height: 30px;
      cursor: pointer;
      
    }
  }

  .images{
    width: 100%;
    height: 100%;
    background-color: var(--green);
    position: relative;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    overflow: hidden;
    /* background-color: aqua; */
      .banner-widget{
        width: 70%;
        height: 65%;
        /* background-color: aquamarine; */
        position: relative;
        box-sizing: border-box;
        margin-bottom: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url("https://content.app-sources.com/s/65227832491034842/uploads/Images/orange-circle-small-0966143.png");
        background-repeat: no-repeat;
        background-position: center;
        .add-new-img{
                height: 100px;
                width: 100px;
                margin: auto 0;
                border-radius: 5px;
                border: 2px dashed var(--black);
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                input{
                    display: none;
                }
                svg{
                    color: var(--black);
                    font-size: 25px;
                    position: unset;
                }
            
            }
        button{
          width: 30px;
          height: 30px;
          cursor: pointer;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 0;
          right: 0;
          background-color: var(--orange);
          border: none;
          border-radius: 2px;
          cursor: pointer;
          svg{
            position: unset;
            font-size: 15px;
          }
        }
        img {
          width: 150%;   
          height: auto;
            }
        }
  }
`