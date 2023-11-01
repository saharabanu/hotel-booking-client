'use client'
import DynamicTable  from '../../../../component/others/DynamicTable'
import Link from 'next/link';
import { Button, Modal, message } from 'antd';
import {EditOutlined,EyeOutlined,DeleteOutlined} from '@ant-design/icons';
import { useDeleteServiceMutation, useGetServicesQuery } from '../../../../redux/api/serviceApi';
import Heading from '../../../../component/ui/reUsable/Heading';




const ServiceManagePage = () => {

  const {data, isLoading} = useGetServicesQuery();
  const [deleteService] = useDeleteServiceMutation()
   
    const base = "admin";

    const services = data?.services;

      // delete function
  
  const deleteFunc = async (id) => {
    try {
      Modal.confirm({
        title: 'Confirm Deletion',
        content: 'Are you sure you want to delete this service?',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk: async () => {
          // Delete service logic here
          try {
            await deleteService(id);
            message.success(' service deleted successfully');
          } catch (err) {
            message.error('An error occurred while deleting the department');
          }
        },
      });
    } catch (err) {
      message.error(err.message);
    }

  }

    const columns = [
        {
          title: "Title",
          dataIndex: "title"
      
        },
        {
          title: "Address",
          dataIndex: "address"
      
        },
        {
          title: "Country",
          dataIndex: "country"
      
        },
        {
          title: "Category",
          dataIndex: "category"
      
        },
        {
          title: "Price",
          dataIndex: "price"
      
        },
        {
          title: "Contact",
          dataIndex: "contact"
      
        },
        
        
        
  
        
        {
          title: "Action",
          render: function (data) {
            return (
              <>
                <Link href={`/details/${data._id}`}>
                  <Button onClick={() => console.log(data)} type="primary">
                    <EyeOutlined />
                  </Button>
                </Link>
                <Link href={`/admin/service-manage/edit/${data?._id}`}>
                  <Button
                    style={{
                      margin: "0px 5px",
                    }}
                    // onClick={() => console.log(data)}
                    // type="primary"
                  >
                    <EditOutlined />
                  </Button>
                </Link>
                <Button onClick={()=> deleteFunc(data?._id)} type="primary" danger>
                  <DeleteOutlined />
                </Button>
              </>
            );
          },
        },
      ];



  return (
    <div>
    <Heading title="All Services Are Here"/>

        <DynamicTable
        loading={isLoading}
        columns={columns}
        dataSource={services}
        // dataSource={admins}
        // pageSize={size}
        // totalPAge={meta?.total}
        // showSizeChanger={true}
        // onPaginationChange={onPaginationChange}
        // onTableChange={onTableChange}
        // showPagination={true}
      />
    </div>
  )
}

export default ServiceManagePage