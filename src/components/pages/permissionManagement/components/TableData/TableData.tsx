'use client';

import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { UserRole } from 'src/types/user';
import PermissionsCheckbox from './components/PermissionsCheckbox';

// Sample data
const modules = ['Dashboard', 'Users', 'Products', 'Orders', 'Reports', 'Settings', 'Sell'];
const permissions = ['All', 'View', 'Create', 'Edit', 'Delete'];

const users = [
  { id: 1, name: 'Super Admin', role: UserRole.SUPER_ADMIN },
  { id: 2, name: 'Admin', role: UserRole.ADMIN },
  { id: 3, name: 'Seller', role: UserRole.SELLER },
];

export default function UserPermissions() {
  const filteredUsers = users;

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table size='small'>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'primary.main' }}>
              <TableCell sx={{ color: 'common.white' }}>User Role</TableCell>
              {modules.map((module) => (
                <TableCell key={module} align='left' sx={{ color: 'common.white' }}>
                  {module}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id} hover sx={{ py: 2 }}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box>
                      <Typography>{user.name}</Typography>
                      <Typography variant='caption'>{user.role}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                {modules.map((module) => (
                  <TableCell sx={{ py: 2 }} key={`${user.id}-${module}`}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <PermissionsCheckbox module={module} permissions={permissions} />
                    </Box>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
