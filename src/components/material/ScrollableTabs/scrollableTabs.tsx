import React from 'react';
import TabPanel from './components/tabPanel';
import { Props } from './types';
import Tab from '@mui/material/Tab';
import { Box, Paper, Tabs, Typography } from '@mui/material';
import variables from 'src/themes/variables';

const ScrollableTabs = (props: Props) => {
  const { tabs, activeTab = 0, onChangeTab = () => {}, tabProps } = props;
  const [value, setValue] = React.useState(activeTab);

  const handleChange = (_event: any, newValue: number) => {
    setValue(newValue);
    onChangeTab(tabs[newValue].value);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: 1,
      }}
    >
      <Box
        sx={{
          width: 1,
          borderTopLeftRadius: variables.borderRadius,
          borderTopRightRadius: variables.borderRadius,
          py: '1px',
          backgroundColor: 'primary.main',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            margin: '8px 6px',
            '& .MuiTab-root': {
              paddingRight: (theme) => theme.spacing(3),
              paddingLeft: (theme) => theme.spacing(3),
              marginLeft: (theme) => theme.spacing(0.5),
              marginRight: (theme) => theme.spacing(0.5),
              '& .Mui-selected': {
                background: 'white',
              },
            },
            '& .MuiTabs-indicator': {
              background: 'white',
              height: 1,
              borderRadius: variables.borderRadius,
              opacity: 0.4,
            },
          }}
        >
          {tabs.map((item, index) => (
            <Tab
              sx={{
                height: '50px',
                border: 'none',
                backgroundColor: 'primary.main',
                color: 'white',
              }}
              key={item.label}
              label={
                <Typography textTransform='none' sx={{ color: 'white' }}>
                  {item.label}
                </Typography>
              }
              id={`scrollable-auto-tab-${index}`}
              aria-controls={`scrollable-auto-tabpanel-${index}`}
            />
          ))}
        </Tabs>
      </Box>

      <TabPanel
        value={value}
        index={value}
        props={{
          ...tabProps,
          sx: {
            width: 1,
            px: 2,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          },
        }}
      >
        <Box
          sx={{
            py: 2,
          }}
        >
          {tabs[value].component}
        </Box>
      </TabPanel>
    </Box>
  );
};

export default ScrollableTabs;
