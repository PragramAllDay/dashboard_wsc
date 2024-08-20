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
      return parsedData;
    } else {
      return false;
    }
  }
};

/**
 *  status of session
 * @returns  {void}
 */
export const sessionStatus = () => {
  const data = checkForSession();
  if (data) {
    return { isLoggedIn: true, role: data.role };
  } else {
    return { isLoggedIn: false, role: '' };
  }
};
