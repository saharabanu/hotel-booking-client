'use client'
import HotelBreadCrumb from '../../../../component/ui/HotelBreadCrumb';
import DynamicTable  from '../../../../component/others/DynamicTable'
import Link from 'next/link';
import { Button, Modal, message } from 'antd';
import {EditOutlined,DeleteOutlined} from '@ant-design/icons';
import { useDeleteUserMutation, useGetUsersQuery } from '../../../../redux/api/userApi';




const UserManagePage = () => {
  const { data, isLoading } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation()
   
  const users = data?.users;
  
    const base = "admin";


     // delete function
  
  const deleteFunc = async (id) => {
    try {
      Modal.confirm({
        title: 'Confirm Deletion',
        content: 'Are you sure you want to delete this User?',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk: async () => {
          // Delete department logic here
          try {
            await deleteUser(id);
            message.success('User Deleted successfully');
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
          title: "Name",
          dataIndex: "name"
      
        },
        
        {
          title: "Email",
          dataIndex: "email",
        },
        
        {
          title: "Phone Number",
          dataIndex: "phonenumber",
        },
        {
          title: "Role",
          dataIndex: "role",
        },
        
        {
          title: "Action",
          render: function (data) {
            return (
              <>
                
                <Link href={`/admin/user-manage/edit/${data?.id}`}   ><Button onClick={() => console.log(data)} type="primary" style={{ margin: "0px 10px" }}>
              <EditOutlined />
            </Button></Link>
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
    <div className="container">
        <HotelBreadCrumb
          items={[
            {
              label: "Admin",
              link: `/${base}`,
            },
            {
              label: "User-manage",
              link: `/${base}/user-manage`,
            },

            
          ]}
          style={{ paddingLeft: "20px " }}
        />
      </div>
        <h1>All Users are here</h1>

        <DynamicTable
        loading={isLoading}
        columns={columns}
        dataSource={users}
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

export default UserManagePage