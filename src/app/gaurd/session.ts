'use client';

/**
 *   session
 * @returns  {boolean}
 */
export const checkForSession = () => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem('admin_session');
    if (data) {
      const parsedData = JSON.parse(data);
      console.log('local storage data', parsedData);
      return parsedData;
    } else {
      console.log('No session found');
      return false;
    }
  }
};

/**
 *  status of session
 * @returns  {void}
 */
export const sessionStatus = () => {
  const admin_data = checkForSession();
  if (admin_data) {
    return true;
  } else {
    return false;
  }
};
