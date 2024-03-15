import React, { useState } from 'react'
import { Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";
function AdminAbout() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
       const tempSkills = values.skills.split(",");
       values.skills = tempSkills;
      dispatch(ShowLoading())
      const response = await axios.post("/api/portfolio/update-about", {
        ...values,
        _id: portfolioData.about._id,
      });
      dispatch(HideLoading())
      if (response.data.success) {
        message.success(response.data.message)
      } else {
        message.error(response.data.message)

      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message)
    }
  }
  return (
    <div>
      <Form onFinish={onFinish} layout='vertical' initialValues={{...portfolioData.about,
         skills: portfolioData.about.skills.join(","),}}>
        <Form.Item name='lottieURl' label='lottie URl'>
          <input placeholder='lottie URl' />
        </Form.Item>
        <Form.Item name='descriptionOne' label='description One'>
          <textarea placeholder='description One' />
        </Form.Item>
        <Form.Item name='descriptionTwo' label='description Two'>
          <textarea placeholder='description Two' />
        </Form.Item>
        <Form.Item name='skills' label='skills'>
          <textarea placeholder='skills' />
        </Form.Item>
        <div className="flex justify-end w-full">
          <button className='px-10 py-2 bg-primary text-white' type='submit'>Save</button>
        </div>
      </Form>
    </div>
  )
}

export default AdminAbout;
