import SellingPage from 'src/components/pages/selling';
import { ModuleContextProvider } from 'src/context/moduleContext/provider';
import { ModulesName } from 'src/types/user';

const Selling = () => {
  return (
    <ModuleContextProvider module={ModulesName.SELL}>
      <SellingPage />
    </ModuleContextProvider>
  );
};

export default Selling;
