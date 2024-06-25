import React from "react";
import { Modal } from "antd";

const CreatePaciente = ({ isModalOpen, handleOk, handleCancel }) => {
  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      centered
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default CreatePaciente;
