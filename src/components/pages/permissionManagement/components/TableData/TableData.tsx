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
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { UserRole } from 'src/types/user';

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
              <TableRow key={user.id} hover>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box>
                      <Typography>{user.name}</Typography>
                      <Typography variant='caption'>{user.role}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                {modules.map((module) => (
                  <TableCell key={`${user.id}-${module}`}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      {permissions.map((permission) => (
                        <Box key={`${user.id}-${module}-${permission}`}>
                          <FormControlLabel
                            control={<Checkbox size='small' sx={{ p: 0.5 }} />}
                            label={permission}
                          />
                        </Box>
                      ))}
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