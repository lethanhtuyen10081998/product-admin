import * as React from 'react';
import { DataGrid, DataGridProps } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';
import { Box, Paper, Typography } from '@mui/material';

export default function DataTable(props: DataGridProps & { title?: string }) {
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
        paginationMode='server'
        autoHeight
        disableSelectionOnClick
        checkboxSelection
        {...props}
      />
    </Box>
  );
}
