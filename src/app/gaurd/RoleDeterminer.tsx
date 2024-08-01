const determineAllowedRoles = (pathname: string) => {
  if (pathname.includes('store-owner')) {
    return ['STORE_OWNER'];
  } else if (pathname.includes('store-manager')) {
    return ['STORE_MANAGER'];
  } else {
    return ['SUPERADMIN'];
  }
};

export default determineAllowedRoles;

