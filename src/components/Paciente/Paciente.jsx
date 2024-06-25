import "./Paciente.css";
import React, { useState } from "react";
import { Space, Table, Tag, Button } from "antd";
import CreatePaciente from "./Create/CreatePaciente";

const Paciente = () => {
  let data = [];
  let columns = [];
  let filter = [];

  //Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // Fin Modal

  //Cargar data
  data = [
    {
      key: "1",
      name: "John Brown",
      chinese: 98,
      math: 60,
      english: 22,
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      chinese: 98,
      math: 60,
      english: 40,
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      chinese: 98,
      math: 90,
      english: 10,
      tags: ["cool", "teacher"],
    },
    {
      key: "4",
      name: "Jim Red",
      chinese: 88,
      math: 99,
      english: 89,
      tags: ["nice", "developer"],
    },
  ];

  //Llenar filtros
  data.forEach(element => {
    filter.push({
      text: element.name,
      value: element.name,
    })
  });

  //Llenar columnas
  columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: {
        compare: (a, b) => a.name - b.name,
        multiple: 4,
      },
      filters: filter,
      onFilter: (value, record) => record.name.startsWith(value),
      filterSearch: true,
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Chinese Score",
      dataIndex: "chinese",
      align: "center",
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: "Math Score",
      dataIndex: "math",
      align: "center",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: "English Score",
      dataIndex: "english",
      align: "center",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      align: "center",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={showModal}>
            Editar {record.key}
          </Button>
          <CreatePaciente
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            handleCancel={handleCancel}
          />
          <button>Eliminar</button>
        </Space>
      ),
    },
  ];
  
  //Data de prueba
  // for (let i = 0; i < 100; i++) {
  //   data.push({
  //     key: i,
  //     name: 'John Brown',
  //     age: i + 1,
  //     street: 'Lake Park',
  //     building: 'C',
  //     number: 2035,
  //     companyAddress: 'Lake Street 42',
  //     companyName: 'SoftLake Co',
  //     gender: 'M',
  //   });
  // }

  // columns = [
  //   {
  //     title: 'Name',
  //     dataIndex: 'name',
  //     key: 'name',
  //     width: 100,
  //     fixed: 'left',
  //     filters: [
  //       {
  //         text: 'Joe',
  //         value: 'Joe',
  //       },
  //       {
  //         text: 'John',
  //         value: 'John',
  //       },
  //     ],
  //     onFilter: (value, record) => record.name.indexOf(value) === 0,
  //   },
  //   {
  //     title: 'Other',
  //     children: [
  //       {
  //         title: 'Age',
  //         dataIndex: 'age',
  //         key: 'age',
  //         width: 150,
  //         sorter: (a, b) => a.age - b.age,
  //       },
  //       {
  //         title: 'Address',
  //         children: [
  //           {
  //             title: 'Street',
  //             dataIndex: 'street',
  //             key: 'street',
  //             width: 150,
  //           },
  //           {
  //             title: 'Block',
  //             children: [
  //               {
  //                 title: 'Building',
  //                 dataIndex: 'building',
  //                 key: 'building',
  //                 width: 100,
  //               },
  //               {
  //                 title: 'Door No.',
  //                 dataIndex: 'number',
  //                 key: 'number',
  //                 width: 100,
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Company',
  //     children: [
  //       {
  //         title: 'Company Address',
  //         dataIndex: 'companyAddress',
  //         key: 'companyAddress',
  //         width: 200,
  //       },
  //       {
  //         title: 'Company Name',
  //         dataIndex: 'companyName',
  //         key: 'companyName',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Gender',
  //     dataIndex: 'gender',
  //     key: 'gender',
  //     width: 80,
  //     fixed: 'right',
  //   },
  // ];

  const handleTableChange = (pagination, filters, sorter) => {
    console.log(pagination)
    console.log(filters)
    console.log(sorter)
  };

  return (
    <div>
      <Table 
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 2,
          position: ["bottomRight"]
        }}
        onChange={handleTableChange} />;
    </div>
  );
};

export default Paciente;