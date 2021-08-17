import React from "react";
import { Table, Tag, Space } from "antd";
const { Column, ColumnGroup } = Table;

const data = [
  {
    key: "1",
    nombreContrato: "John",
    constratista: "Brown",
    vigencia: "16 Feb 2020",
    monto: 100,
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    nombreContrato: "Jim",
    constratista: "Green",
    vigencia: "16 Mar 2020",
    monto: 100000,
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    nombreContrato: "Joe",
    constratista: "Black",
    vigencia: "16 Feb 2020",
    monto: 1200,
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const Contratos = () => {
  return (
    <Table dataSource={data} className="mt-3 rounded">
      <ColumnGroup className="table-header-contratos text-white text-left p-2" title="Resultado de b&uacute;squeda">
        <Column
          title="Nombre contrato"
          dataIndex="nombreContrato"
          key="firstName"
        />
        <Column title="Contratista" dataIndex="constratista" key="lastName" />
        <Column title="Vigencia" dataIndex="vigencia" key="age" />
        <Column title="Monto" dataIndex="monto" key="address" />
        <Column
          title="Estado"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <a>Invite {record.lastName}</a>
              <a>Delete</a>
            </Space>
          )}
        />
      </ColumnGroup>
    </Table>
  );
};

export default Contratos;
