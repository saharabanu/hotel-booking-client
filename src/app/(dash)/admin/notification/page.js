'use client'
import { Button, notification } from 'antd';

const openNotification = (type, message, description) => {
  notification[type]({
    message: message,
    description: description,
  });
};

const handleNotification = () => {
  openNotification('success', 'Success', 'This is a success notification.');
};

const NotificationPage = () => {
  return (
    <div>
      <Button onClick={handleNotification}>Show Notification</Button>
    </div>
  );
};

export default NotificationPage;
