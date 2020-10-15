import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Navbar from "./navbar";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import dis01 from '../resources/images/dis01.jpg'
import Footer from "./Footer/footer";

const useStyles = makeStyles((theme) => ({
    root1: {
        flexGrow: 1,
    },
    root2: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 'left',

        }},
    paper: {
        padding: theme.spacing(4),
        margin: 'auto',
        maxWidth: 2000,
    },
    image: {
        width: 400,
        height: 400,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    margin: {
        margin: theme.spacing(2),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },

}));
const TAX_RATE = 0.15;

const useStyles1 = makeStyles({
    table: {

        minWidth: 700,
    },
});

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
    return qty * unit;
}

function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
}

function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
    createRow('Funny Party Luminous Glasses', 10, 12.00),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal =  invoiceSubtotal - invoiceTaxes;

export default function ComplexGrid() {
    const classes = useStyles();

    return (
        <div>
            <Navbar/>
            <div className={classes.root1}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <h2
                                style={{color: "blue"}}>
                                Funny Party Luminous Glasses
                            </h2>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src={dis01} />
                            </ButtonBase>
                            <h2
                                style={{color: "red"}}>
                                $ 12.00
                            </h2>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography  gutterBottom variant="subtitle1">
                                        The product requires 1 23A batteries, but the product set does not contain batteries, buyers need to purchase separately
                                        Due to the way of illumination is similar to fluorescent stick, it is better use in dark place like parties, bar, night clubs, dark hallways, concert etc.
                                        Ergonomic design. Regular adult size and comfortable to wear. Easy to see out of, and the lights has no impact on vision at a SUPER STAR: Pretty cool and attractive after wearing this LED glasses, make you a super star in parties.
                                        LED luminous glasses use LED lights as a light source, with energy saving and environmental protection, gorgeous dazzling and other characteristics, very suitable for Halloween, carnival, daily masquerade, party party, birthday party and oth
                                        er holiday celebrations, as well as Cosplay performances, bar performances, Night show, personalized decoration, etc.

                                       </Typography>
                                    <form className={classes.root2} noValidate autoComplete="on">
                                        <div>
                                            <TableContainer component={Paper}>
                                                <Table className={classes.table} aria-label="spanning table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>Item</TableCell>
                                                            <TableCell align="right">Qty.</TableCell>
                                                            <TableCell align="right">Unit.price </TableCell>
                                                            <TableCell align="right">Sum</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {rows.map((row) => (
                                                            <TableRow key={row.desc}>
                                                                <TableCell>{row.desc}</TableCell>
                                                                <TableCell align="right">{row.qty}</TableCell>
                                                                <TableCell align="right">{row.unit}</TableCell>
                                                                <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                                                            </TableRow>
                                                        ))}

                                                        <TableRow>
                                                            <TableCell rowSpan={3} />
                                                            <TableCell colSpan={2}>Subtotal</TableCell>
                                                            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>Discount</TableCell>
                                                            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}
                                                            </TableCell>
                                                            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell colSpan={2}>Total</TableCell>
                                                            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                                                        </TableRow>
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>


                                        </div>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            color="primary"
                                            className={classes.margin}>
                                            Add to Card
                                        </Button>
                                    </form>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
            <Footer/>
        </div>
    );
}