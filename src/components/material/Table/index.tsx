import * as React from 'react';
import { DataGrid, DataGridProps } from '@mui/x-data-grid';
import { Box, Paper, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

export default function DataTable(
  props: DataGridProps & { title?: string; height?: number | string },
) {
  if (props?.height) {
    return (
      <Box sx={{ height: props.height }} component={Paper}>
        <DataGrid
          components={{
            LoadingOverlay: LinearProgress,
          }}
          paginationMode='client'
          disableSelectionOnClick
          {...props}
        />
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%' }} component={Paper}>
      {props?.title && (
        <Box p={2}>
          <Typography variant='h4'>{props.title}</Typography>
        </Box>
      )}
      <DataGrid
        components={{
          LoadingOverlay: LinearProgress,
        }}
        paginationMode='client'
        autoHeight
        disableSelectionOnClick
        checkboxSelection
        {...props}
      />
    </Box>
  );
}
