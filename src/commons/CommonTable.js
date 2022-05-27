import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function CommonTable({headCoins, rowsCoins}) {

  return ( 
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">RANK</StyledTableCell>
            <StyledTableCell align="center">COINS</StyledTableCell>
            <StyledTableCell align="center">PRICE (USD)</StyledTableCell>
            <StyledTableCell align="center">PRICE (BTC)</StyledTableCell>
            <StyledTableCell align="center">VOLUME</StyledTableCell>
            <StyledTableCell align="center">PRICECHANGE (1h)</StyledTableCell>
            <StyledTableCell align="center">PRICECHANGE (1d)</StyledTableCell>
            <StyledTableCell align="center">PRICECHANGE (1w)</StyledTableCell>
            <StyledTableCell align="center">WEBSITE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsCoins.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="center">{row.rank}</StyledTableCell>
              <Link to={`/coinsProfile/${(row.rank)}`}><StyledTableCell>
                <img src={row.icon} alt={row.name} align="left" width="30px" /> {row.name} ({row.symbol})
              </StyledTableCell></Link>
              <StyledTableCell align="center">{row.price}</StyledTableCell>
              <StyledTableCell align="center">{row.priceBtc}</StyledTableCell>
              <StyledTableCell align="center">{row.volume}</StyledTableCell>
              <StyledTableCell align="center">{row.priceChange1h}</StyledTableCell>
              <StyledTableCell align="center">{row.priceChange1d}</StyledTableCell>
              <StyledTableCell align="center">{row.priceChange1w}</StyledTableCell>
              <StyledTableCell align="center">{row.websiteUrl}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
  );
}

export default CommonTable;
