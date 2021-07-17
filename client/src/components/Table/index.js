import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const NoDataComponent = () => <TableRow><TableCell colSpan="3">No Data...</TableCell></TableRow>;

export default function BasicTable({ data, clickShortUrls }) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Url</TableCell>
                        <TableCell>Short Url</TableCell>
                        <TableCell align="right">Used/Clicks</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.length > 0 ?
                        data.map((row) => (
                            <TableRow key={row.url}>
                                <TableCell component="th" scope="row">
                                    {row.url}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    <a
                                        href={row.url}
                                        target="_blank"
                                        without rel="noreferrer"
                                        onClick={() => clickShortUrls(row.shortUrl)}
                                    >{row.shortUrl}</a>
                                </TableCell>
                                <TableCell align="center">{row.clicks}</TableCell>
                            </TableRow>
                        )) :
                        <NoDataComponent />}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
