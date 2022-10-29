import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./table.scss";



function createData(id, borrower, campaignName, campaignType) {
  return { id, borrower, campaignName, campaignType };
}

const rows = [
  createData('001', 'Alice Anderson', 'Campaign Name #1', 'Home Deposit'),
  createData('002', 'Becky Bradshaw', 'Campaign Name #2', 'Home Deposit'),
  createData('003', 'Charlie Cuckworth','Campaign Name #3', 'Other'), 
];

export default function CampaignTable() {
  return (
    <TableContainer component={Paper} className="tableContainer">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Borrower</TableCell>
            <TableCell align="left">Campaign Name</TableCell>
            <TableCell align="left">Campaign Type</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
          
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.borrower}</TableCell>
              <TableCell align="left">{row.campaignName}</TableCell>
              <TableCell align="left">{row.campaignType}</TableCell>
              <TableCell align="right" className="Edit">Edit</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

