import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import styled from 'styled-components'
import { ROUTE } from '../api/route'
import Button1 from '../buttons/Button_1'

function Banner2({ formData, description_2, setDescription_2, setspan_value_2, setspan_value_1, span_value_2, span_value_1, span_title_2, setSpan_title_2, setTitle_2, title_2, setImg_2, img_2, setSpan_title_1, span_title_1, }) {

  const onAddNewImages = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg_2(URL.createObjectURL(file))
      formData.current.append('img', file, 'img2')
    }
  }

  return (
    <Container>
      <div className="baner-image">
        <div className="back-ground">
          {img_2 ? <>
            <img src={img_2} alt="" />
            <button onClick={() => setImg_2("")}>
              <IoMdClose />
            </button>
          </> :
            <label className="add-new-img">
              <AiOutlinePlus />
              <input type="file" id="file-upload" onChange={(e) => onAddNewImages(e)} />
            </label>}
        </div>
      </div>
      <div className="content">
        <div className="content-form">
          <h1 className='baner-title'>
            {title_2 ? <textarea type="text" rows="3" value={title_2} onChange={(e) => setTitle_2(e.target.value)} /> : <p>loading...</p>}
          </h1>

          <h4 className="header-description">
            {description_2 ? <input type="text" value={description_2} onChange={(e) => setDescription_2(e.target.value)} /> : <p>loading...</p>}
          </h4>

          <br />
          <div className="product-description">
            <div className="description-box">
              <input className='description-title' value={span_title_1} onChange={(e) => setSpan_title_1(e.target.value)} />
              <input type="text" className='description-value' value={span_value_1} onChange={(e) => setspan_value_1(e.target.value)} />
            </div>

            <div className="description-box">
              <input className='description-title' value={span_title_2} onChange={(e) => setSpan_title_2(e.target.value)} />
              <input type="text" className='description-value' value={span_value_2} onChange={(e) => setspan_value_2(e.target.value)} />
            </div>
          </div>

          <Button1 width={"25%"} height={"15%"} >
            <h2>Shop Now</h2>
          </Button1>
        </div>
      </div>
    </Container>
  )
}

export default Banner2

const Container = styled.div`
  box-sizing: border-box;
  background-color: aliceblue;
  width: 100%;
  height: 85vh;
  box-sizing: border-box;
  position: relative;
  background-color: var(--green);
  display: grid;  
  grid-template-columns: 45% 55%;
  @media screen and (max-width: 600px) {
    grid-template-columns: unset;
    height: auto;
  }
  svg{
        transform: rotateX(180deg) rotateY(180deg);
        position: absolute;
        top: 0;
    } 
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
  .baner-image{
    /* background-color: aqua; */
    z-index: 1;
    padding-left: var(--padding);
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    .back-ground{
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: url("https://content.app-sources.com/s/65227832491034842/uploads/Images/orange-circle-small-0966143.png");
      background-repeat: no-repeat;
      background-position: center;
      position: relative;
      button{
          width: 30px;
          height: 30px;
          cursor: pointer;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 10px;
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
      img{
         width: 100%;
         height: auto;
         }      
    }
  }
  .content{
    height: 100%;
    width: 100%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: var(--padding);
    box-sizing: border-box;
    @media screen and (max-width: 600px) {
      height: fit-content;
    }
    .content-form{
      /* background-color: aqua; */
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
      margin-top: 10px;
      width: 90%;
      height: 70%;
      display: flex;
      flex-direction: column;
      .baner-title{
        font-size: 48px;
        textarea{
          width: 100%;
          font-size: 42px;
          font-weight: 700;
              }
        span{
          font-weight: 600;
        }
      }
      p{
        margin-top: 15px;
        color: var(--small-text)
      }
      .product-description{
        width: 100%;
        display: flex;
        gap: 30%;
        z-index: 1;
        margin-bottom: 30px;
        @media screen and (max-width: 600px) {
          gap: 20px;
        }
        .description-box{
          display: flex;
          margin-top: 25px;
          gap: 0px;
          flex-direction: column;    
          .description-value{
            font-size: 40px;
            font-weight: 500;
            width: 60%;
            margin-top: 10px;
            @media screen and (max-width: 600px) {
              width: 100%;
            }
          } 
          .description-title{
            font-size: 20px;
            font-weight: 400;
            width: 60%;
            @media screen and (max-width: 600px) {
              width: 100%;
            }
          }     
        }
      }
    }
  }
`