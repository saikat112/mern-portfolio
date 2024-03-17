import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Form, message } from "antd";
import { HideLoading, ReloadData, ShowLoading } from '../../redux/rootSlice';
import axios from 'axios';

function Experiences() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);
    const { experience } = portfolioData;

    const [showAddEditModal, setShowAddEditModal] = useState(false);
    const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);

    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading());
            let response;
            if (selectedItemForEdit) {
                response = await axios.post("/api/portfolio/update-experience", {
                    ...values,
                    _id: selectedItemForEdit._id,
                });
            } else {
                response = await axios.post("/api/portfolio/add-experience", values);
            }
            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                setShowAddEditModal(false);
                setSelectedItemForEdit(null);
                dispatch(HideLoading());
                dispatch(ReloadData(true));
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            message.error(error.message);
        }
    };

    const onDelete = async (item) => {
        try {
            dispatch(ShowLoading());
            const response = await axios.post("/api/portfolio/delete-experience", {
                _id: item._id,
            });
            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                dispatch(HideLoading());
                dispatch(ReloadData(true));
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    };

    return (
        <div>
            <div className="flex justify-end">
                <button className='bg-primary px-5 py-2 text-white cursor-pointer' onClick={() => {
                    setSelectedItemForEdit(null);
                    setShowAddEditModal(true);
                }}>Add Experience</button>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-5">
                {experience.map((experience, index) => (
                    <div className='shadow border border-gray-400 flex p-5 flex-col'>
                        <h1 className='text-primary text-xl font-bold'>{experience.period}</h1><hr /><br />
                        <h1>Company: {experience.company}</h1><br />
                        <h1>Role: {experience.title}</h1><br />
                        <h1>Description: {experience.description}</h1><br />
                        <div className="flex justify-end gap-5 mt-5">
                            <button className='bg-red-500 text-white px-5 py-2 cursor-pointer'
                                onClick={() => onDelete(experience)}> Delete</button>
                            <button className='bg-primary text-white px-5 py-2'
                                onClick={() => {
                                    setSelectedItemForEdit(experience);
                                    setShowAddEditModal(true);
                                }}>Edit</button>
                        </div>
                    </div>
                ))}
            </div>
            <Modal visible={showAddEditModal}
                title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
                footer={null}
                onCancel={() => setShowAddEditModal(false)}>
                <Form layout="vertical" onFinish={onFinish} initialValues={selectedItemForEdit || {}}>
                    <Form.Item name="period" label="Period">
                        <input placeholder="Period" />
                    </Form.Item>
                    <Form.Item name="company" label="Company">
                        <input placeholder="Company" />
                    </Form.Item>
                    <Form.Item name="title" label="Title">
                        <input placeholder="Title" />
                    </Form.Item>
                    <Form.Item name="description" label="Description">
                        <input placeholder="Description" />
                    </Form.Item>
                    <div className="flex justify-end">
                        <button className="border-primary text-primary px-5 py-2" onClick={() => {
                            setShowAddEditModal(false);
                        }}>Cancel</button>
                        <button className="bg-primary text-white px-5 py-2">
                            {selectedItemForEdit ? "Update" : "Add"}
                        </button>
                    </div>
                </Form>
            </Modal>
        </div>
    );
}

export default Experiences;
