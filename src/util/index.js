import { Toast } from 'vant';

export function showLoading() {
  Toast.loading({
    duration: 1000,
    message: '加载中...',
    forbidClick: true
  });
}

export function hideLoading() {
  Toast.clear();
}

export function toastMessage(message) {
  Toast({
    message: message,
    position: 'bottom'
  });
}

export const android = window.android
