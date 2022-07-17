import { Outlet } from 'react-router-dom';
import Admin from './Admin';
import ApiUpdate from './ApiUpdate';

const SharedAdminLayout = () => {
  return (
    <>
      <Admin />
    </>
  );
};

export default SharedAdminLayout;
