import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import styled from "styled-components"
import { ROUTE } from '../../components/api/route';
import Banner1 from '../../components/banner/Banner1'
import Banner2 from '../../components/banner/Banner2'
import { toast } from 'react-toastify';
import Loading from '../loading/Loading';

function Store() {
  const formData = useRef(new FormData());
  const [sale_span, setSale_span] = useState([]);
  const [title_1, setTitle_1] = useState("");
  const [description_1, setDescription_1] = useState("");
  const [description_2, setDescription_2] = useState("");
  const [span_1, setSpan_1] = useState([]);
  const [img_1, setImg_1] = useState("");
  const [img_2, setImg_2] = useState("");
  const [title_2, setTitle_2] = useState("");
  const [span_title_1, setSpan_title_1] = useState("");
  const [span_title_2, setSpan_title_2] = useState("");
  const [span_value_1, setspan_value_1] = useState("");
  const [span_value_2, setspan_value_2] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toastOption = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    const getStoreData = async () => {
      const { data } = await axios.get(`${ROUTE}/api/store`)
      setImg_1(`${ROUTE}/images/${data.result.img_1}`)
      setImg_2(`${ROUTE}/images/${data.result.img_2}`)
      setTitle_1(data.result.title_1)
      setTitle_2(data.result.title_2)
      setDescription_1(data.result.description_1)
      setDescription_2(data.result.description_2)
      setSpan_1(data.result.span_1)
      setSpan_title_1(data.result.span_title_1)
      setSpan_title_2(data.result.span_title_2)
      setspan_value_1(data.result.span_value_1)
      setspan_value_2(data.result.span_value_2)
    }
    getStoreData();

  }, [])

  const onSaveBanner = async () => {
    formData.current.append("title_1", title_1);
    formData.current.append("title_2", title_2);
    formData.current.append("description_1", description_1);
    formData.current.append("description_2", description_2);
    formData.current.append("span_title_1", span_title_1);
    formData.current.append("span_title_2", span_title_2);
    formData.current.append("span_value_1", span_value_1);
    formData.current.append("span_value_2", span_value_2);

    for (let index = 0; index < span_1.length; index++) {
      formData.current.append("span_1", span_1[index]);
    }

    for (const value of formData.current.values()) {
      console.log(value);
    }

    setIsLoading(true)
    const { data } = await axios.put(`${ROUTE}/api/store`, formData.current)
    if (data.status) {
      setIsLoading(false)
      toast.success("Updated Banner", toastOption);

    }

    formData.current.delete("title_1");
    formData.current.delete("title_2");
    formData.current.delete("description_1");
    formData.current.delete("description_2");
    formData.current.delete("span_title_1");
    formData.current.delete("span_title_2");
    formData.current.delete("span_value_1");
    formData.current.delete("span_value_2");
    formData.current.delete("img");
    formData.current.delete("img");
    for (let index = 0; index < span_1.length; index++) {
      formData.current.delete("span_1");
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
        <h1>Edit Banner</h1>
        <div className="button-container">
          <button onClick={() => onSaveBanner()}>
            Save Banner
          </button>
        </div>

      </div>
      <Banner1
        img_1={img_1}
        title_1={title_1}
        description_1={description_1}
        span_1={span_1}
        formData={formData}
        setTitle_1={setTitle_1}
        setDescription_1={setDescription_1}
        setSpan_1={setSpan_1}
        setImg_1={setImg_1}
      />
      <Banner2
        setTitle_2={setTitle_2}
        title_2={title_2}
        setImg_2={setImg_2}
        img_2={img_2}
        formData={formData}
        setSpan_title_1={setSpan_title_1}
        span_title_1={span_title_1}
        setSpan_title_2={setSpan_title_2}
        span_title_2={span_title_2}
        span_value_1={span_value_1}
        span_value_2={span_value_2}
        setspan_value_1={setspan_value_1}
        setspan_value_2={setspan_value_2}
        setDescription_2={setDescription_2}
        description_2={description_2}
      />
    </Container>
  )
}

export default Store

const Container = styled.div`
.title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .delete-button{
            background-color: #f34040;
        }
        button{
            height: 40px;
            outline: none;
            cursor: pointer;
            margin-left: 10px;
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
  padding: var(--padding);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  gap: var(--padding);
`