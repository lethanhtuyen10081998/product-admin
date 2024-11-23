import ScrollableTabs from 'src/components/material/ScrollableTabs';
import TableAgency from '../../agency/listAgency';
import TableRechargeLog from './TableRechargeLog';
import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import { useRouter } from 'next/router';

const TabViewTable = ({ userId }: { userId: string }) => {
  const { t } = useTranslation();
  const [tab, setTab] = useState('agency');
  const router = useRouter();
  // const tab = new URLSearchParams(window.location.search).get("tab");
  const parentId = router.query.id as string;

  return (
    <ScrollableTabs
      tabProps={{}}
      activeTab={tab === 'agency' ? 0 : 1}
      onChangeTab={(value: string) => {
        setTab(value);
        //   router.(`${location.pathname}?tab=${value}`, undefined, {
        //   shallow: true,
        // })
      }}
      tabs={[
        {
          label: t('common:menu.agency'),
          component: <TableAgency parentId={parentId} hideCreateButton />,
          value: 'agency',
        },
        {
          label: t('common:menu.recharges_history'),
          component: <TableRechargeLog userId={userId} />,
          value: 'recharge-history',
        },
      ]}
    />
  );
};

export default TabViewTable;
