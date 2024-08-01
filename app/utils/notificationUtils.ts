import { notification } from 'antd';
import { ReactNode } from 'react';

interface NotificationOptions {
  message: string;
  description?: ReactNode;
  duration?: number; // Add duration property
}

export enum NotificationType {
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Warning = 'warning',
  Open = 'open',
}

interface UseNotification {
  showNotification: (type: NotificationType, options: NotificationOptions) => void;
  contextHolder: React.ReactNode;
}

export const useNotification = (): UseNotification => {
  const [api, contextHolder] = notification.useNotification();

  const showNotification = (type: NotificationType, options: NotificationOptions): void => {
    const { message, description, duration } = options;

    api[type]({
      message,
      description,
      duration,
      placement:'bottomRight',
    },);
  };

  return { showNotification, contextHolder };
};
