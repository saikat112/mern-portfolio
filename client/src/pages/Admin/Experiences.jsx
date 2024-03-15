import React from 'react';
import { useSelector } from 'react-redux';
import { Modal, Form } from "antd";

function Experiences() {
    const { portfolioData } = useSelector((state) => state.root);
    const { experience } = portfolioData;
    const { showAddEditModal, setShowAddEditModal } = React.useState(false);
    const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
    return (
        <div>
            <div className="flex justify-end">
                <button className='bg-primary px-5 py-2 text-white' onClick={() => {
                    setSelectedItemForEdit(null);
                    setShowAddEditModal(true);
                }}> Add Exprience </button>
            </div>
            <div className="grid grid-cols-4 gap-5 ">
                {experience.map((experience) => (
                    <div className='shadow border broder-gray-400 flex p-5 flex-col'>
                        <h1 className='text-primary  text-xl font-bold '>{experience.period}</h1><hr /><br />
                        <h1>Company : {experience.company}</h1><br />
                        <h1> Role : {experience.title}</h1><br />
                        <h1> Description : {experience.description}</h1><br />
                        <div className="flex justify-end  gap-5 mt-5">
                            <button className='bg-red-500 text-white px-5 py-2  '>Delete</button>
                            <button className='bg-primary text-white px-5 py-2  '>Edit</button>
                        </div>


                    </div>
                ))}
            </div>
            <Modal visible={showAddEditModal}
                title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
                footer={null}>
                <Form layout="vertical">
                    <Form.Item name="period" label="period">
                        <input placeholder="period" />
                    </Form.Item>
                    <Form.Item name="company" label="company">
                        <input placeholder="company" />
                    </Form.Item>
                    <Form.Item name="title" label="title">
                        <input placeholder="title" />
                    </Form.Item>
                    <Form.Item name="description" label="description">
                        <input placeholder="description" />
                        <div className="flex justify-end">
                            <button className="border-primary text-primary px-5 py-2" onClick={() => {
                                setShowAddEditModal(false);
                            }}>Cancel</button>
                            <button className="bg-primary text-white px-5 py-2">
                                {selectedItemForEdit ? "update" : "Add"}
                            </button>
                        </div>
                    </Form.Item>
                </Form>

            </Modal>
        </div>
    )
}

export default Experiences
