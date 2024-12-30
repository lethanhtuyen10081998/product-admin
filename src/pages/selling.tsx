import SellingPage from 'src/components/pages/selling';
import { ModuleContextProvider } from 'src/context/moduleContext/provider';
import { SelectedProductContextProvider } from 'src/modules/selling/selectedProductContext/provider';
import { ModulesName } from 'src/types/user';

const Selling = () => {
  return (
    <ModuleContextProvider module={ModulesName.SELL}>
      <SelectedProductContextProvider>
        <SellingPage />
      </SelectedProductContextProvider>
    </ModuleContextProvider>
  );
};

export default Selling;
