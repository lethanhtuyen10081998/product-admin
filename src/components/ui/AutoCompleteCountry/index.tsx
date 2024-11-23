import { useEffect, useState } from 'react';
import AutoComplete, { Props } from 'src/components/material/AutoComplete';
import useListCountry from 'src/services/core/country';
import { Country } from 'src/types/core';

const AutoCompletePackage = (props: Omit<Props<Country>, 'options'>) => {
  const [open, setOpen] = useState(false);
  const { mutation, data, loading } = useListCountry();

  useEffect(() => {
    if (open && data.length === 0) {
      mutation({ group: '' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.length, open]);

  return (
    <AutoComplete
      {...props}
      options={data}
      loading={loading}
      getItemLabel={(item) => item.country}
      getItemValue={(item) => item.country}
      onOpen={() => setOpen(true)}
      open={open}
      onClose={() => setOpen(false)}
    />
  );
};

export default AutoCompletePackage;
