import React from 'react';
import { useNotification } from '../contexts/NotificationContext';

const Notification = () => {
  const { notification } = useNotification();

  if (!notification) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 shadow-lg">
        <p className="text-green-800">{notification.message}</p>
      </div>
    </div>
  );
};

export default Notification;