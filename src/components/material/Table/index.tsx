import * as React from 'react';
import { DataGrid, DataGridProps } from '@mui/x-data-grid';
import { Box, Paper, SxProps, Theme, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

export default function DataTable(
  props: DataGridProps & { title?: string; height?: number | string; sxBox?: SxProps<Theme> },
) {
  if (props?.height) {
    return (
      <Box sx={{ height: props.height, ...props.sxBox }} component={Paper}>
        <DataGrid
          components={{
            LoadingOverlay: LinearProgress,
            Header(props) {
              return <Box>{props.children}</Box>;
            },
          }}
          paginationMode='client'
          {...props}
        />
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', ...props.sxBox }} component={Paper}>
      {props?.title && (
        <Box p={2}>
          <Typography variant='h4'>{props.title}</Typography>
        </Box>
      )}
      <DataGrid
        components={{
          LoadingOverlay: LinearProgress,
          Header(props) {
            return <Box bgcolor='red'>{props.children}</Box>;
          },
        }}
        paginationMode='client'
        disableSelectionOnClick
        checkboxSelection
        {...props}
      />
    </Box>
  );
}
