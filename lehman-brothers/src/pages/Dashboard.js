import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  appBar: {
    paddingLeft: 24,
    paddingTop: 16,
    paddingBottom: 16
  },
  card: {
    maxWidth: 345,
    minWidth: 300,
    marginTop: 24
  },
  container: {},
  accountHeader: {
    padding: 16
  },
  number: {
    paddingTop: 16
  },
  tableContainer: {
    padding: 16,
    marginTop: 16
  }
}));

const accountData = {
  accounts: [
    {
      _id: "FI7473834510057469-EUR",
      _links: [
        { href: "/v3/accounts/FI7473834510057469-EUR", rel: "details" },
        {
          href: "/v3/accounts/FI7473834510057469-EUR/transactions",
          rel: "transactions"
        }
      ],
      account_name: "Aino Salo",
      account_numbers: [{ _type: "IBAN", value: "FI7473834510057469" }],
      account_type: "Current",
      available_balance: "507.03",
      bank: { bic: "NDEAFIHH", country: "FI", name: "Nordea" },
      booked_balance: "494.93",
      country: "FI",
      credit_limit: "100.00",
      currency: "EUR",
      latest_transaction_booking_date: "2019-11-06",
      product: "KÄYTTÖTILI",
      status: "OPEN",
      value_dated_balance: "494.93"
    },
    {
      _id: "FI6593857450293470-EUR",
      _links: [
        { href: "/v3/accounts/FI6593857450293470-EUR", rel: "details" },
        {
          href: "/v3/accounts/FI6593857450293470-EUR/transactions",
          rel: "transactions"
        }
      ],
      account_name: "Aino Salo",
      account_numbers: [{ _type: "IBAN", value: "FI6593857450293470" }],
      account_type: "Current",
      available_balance: "-57.94",
      bank: { bic: "NDEAFIHH", country: "FI", name: "Nordea" },
      booked_balance: "-70.04",
      country: "FI",
      credit_limit: "100.00",
      currency: "EUR",
      latest_transaction_booking_date: "2019-11-06",
      product: "KÄYTTÖTILI",
      status: "OPEN",
      value_dated_balance: "-70.04"
    }
  ]
};

export default function Dashboard() {
  const [open, opening] = useState(false);

  const classes = useStyles();

  const AccountCard = accountData.accounts.map(card => (
    <Grid item spacing={3}>
      <Card className={classes.card}>
        <CardActionArea onClick={() => opening(true)}>
          <Box className={classes.accountHeader}>
            <Typography variant="h5" component="h2">
              {card.account_name}
            </Typography>
            <Typography variant="subtitle" color="textSecondary">
              {card.account_numbers[0].value}
            </Typography>
          </Box>
          <Divider></Divider>
          <CardContent>
            <Typography
              align="right"
              variant="h3"
              color={card.available_balance > 0 ? "primary" : "secondary"}
              component="p"
              className={classes.number}
            >
              {card.available_balance}
            </Typography>
            <Typography
              align="right"
              color={card.available_balance > 0 ? "primary" : "secondary"}
              variant="body2"
              component="p"
            >
              Available balance
            </Typography>
            <Typography
              align="right"
              variant="h3"
              color="textSecondary"
              component="p"
              className={classes.number}
            >
              {card.booked_balance}
            </Typography>
            <Typography
              align="right"
              color="textSecondary"
              variant="body2"
              component="p"
            >
              Booked balance
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  ));

  function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
  }

  const rows = [
    createData(
      0,
      "16 Mar, 2019",
      "Elvis Presley",
      "Tupelo, MS",
      "VISA ⠀•••• 3719",
      312.44
    ),
    createData(
      1,
      "16 Mar, 2019",
      "Paul McCartney",
      "London, UK",
      "VISA ⠀•••• 2574",
      866.99
    ),
    createData(
      2,
      "16 Mar, 2019",
      "Tom Scholz",
      "Boston, MA",
      "MC ⠀•••• 1253",
      100.81
    ),
    createData(
      3,
      "16 Mar, 2019",
      "Michael Jackson",
      "Gary, IN",
      "AMEX ⠀•••• 2000",
      654.39
    ),
    createData(
      4,
      "15 Mar, 2019",
      "Bruce Springsteen",
      "Long Branch, NJ",
      "VISA ⠀•••• 5919",
      212.79
    )
  ];

  function Transactions() {
    return (
      <Paper className={classes.tableContainer}>
        <Typography variant="h5" component="h2">
          Transactions
        </Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Ship To</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell align="right">Sale Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.shipTo}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }

  return (
    <React.Fragment>
      <AppBar className={classes.appBar} position="relative">
        <Typography variant="">DASHBOARD</Typography>
      </AppBar>
      <Container maxWidth="md" className={classes.container}>
        <Grid container spacing={1}>
          {AccountCard}
        </Grid>
        {open && <Transactions></Transactions>}
      </Container>
    </React.Fragment>
  );
}
