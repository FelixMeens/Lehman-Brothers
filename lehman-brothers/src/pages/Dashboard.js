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
    marginTop: 24
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

const transactionData = {
  group_header: {
    message_identification: "Q8g7FpQGjh4",
    creation_date_time: "2019-11-06T07:05:11.795Z",
    message_pagination: { continuation_key: "sandboxContinuationKey-2" },
    http_code: 200
  },
  response: {
    continuation_key: "sandboxContinuationKey-2",
    transactions: [
      {
        _type: "DebitTransaction",
        transaction_id: "cca0cf4a-7f68-4689-9c31-7ce7456b0be4",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Debet automaattiotto",
        narrative: "EUR 35.00 Helsinki",
        message: "EUR 35.00 Helsinki",
        status: "billed",
        reference: "550772345",
        counterparty_account: "",
        own_message: "EUR 35.00 Helsinki",
        counterparty_name: "ATM Nosto 1212",
        transaction_date: "2019-07-15",
        card_number: "1234",
        payment_date: "2019-07-15",
        amount: "-4.55"
      },
      {
        _type: "CreditTransaction",
        transaction_id: "4adec4be-851e-4128-b0db-782bf91393b5",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Pano",
        narrative: "Kiitos",
        message: "Kiitos",
        status: "billed",
        reference: "111144419244",
        own_message: "Kiitos",
        counterparty_name: "Simon Baker",
        transaction_date: "2019-07-15",
        card_number: "",
        payment_date: "2019-07-15",
        amount: "5.91"
      },
      {
        _type: "DebitTransaction",
        transaction_id: "f30af776-a837-4c24-b423-01109d63e0c6",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Debet automaattiotto",
        narrative: "EUR 35.00 Helsinki",
        message: "EUR 35.00 Helsinki",
        status: "billed",
        reference: "550772345",
        counterparty_account: "",
        own_message: "EUR 35.00 Helsinki",
        counterparty_name: "ATM Nosto 1212",
        transaction_date: "2019-07-15",
        card_number: "1234",
        payment_date: "2019-07-15",
        amount: "-31.85"
      },
      {
        _type: "DebitTransaction",
        transaction_id: "feffbf18-fb83-4f09-a190-a68f467dd6ee",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Itsepalvelu",
        narrative: "Mobile phone",
        message: "Mobile phone",
        status: "billed",
        reference: "447711118878060000",
        counterparty_account: "",
        own_message: "Mobile phone",
        counterparty_name: "Salo Johanna",
        transaction_date: "2019-07-15",
        card_number: "",
        payment_date: "2019-07-15",
        amount: "-19.50"
      },
      {
        _type: "CreditTransaction",
        transaction_id: "3154c858-83da-443d-89cb-131ec8a9a966",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Pano",
        narrative: "Lapsilisä",
        message: "Lapsilisä",
        status: "billed",
        reference: "LL4200K6790",
        own_message: "Lapsilisä",
        counterparty_name: "KELA/FPA",
        transaction_date: "2019-07-15",
        card_number: "",
        payment_date: "2019-07-15",
        amount: "34.54"
      },
      {
        _type: "DebitTransaction",
        transaction_id: "02741192-2209-4f00-aa24-d56ac393a061",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Debet automaattiotto",
        narrative: "EUR 35.00 Helsinki",
        message: "EUR 35.00 Helsinki",
        status: "billed",
        reference: "550772345",
        counterparty_account: "",
        own_message: "EUR 35.00 Helsinki",
        counterparty_name: "ATM Nosto 1212",
        transaction_date: "2019-07-15",
        card_number: "1234",
        payment_date: "2019-07-15",
        amount: "-15.75"
      },
      {
        _type: "DebitTransaction",
        transaction_id: "c997bc2b-8490-4bf4-b5d7-aa793de2884c",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Korttiosto",
        narrative: "Helsinki",
        message: "Helsinki",
        status: "billed",
        reference: "18110005577890",
        counterparty_account: "",
        own_message: "Helsinki",
        counterparty_name: "K market Helsinki",
        transaction_date: "2019-07-15",
        card_number: "1234",
        payment_date: "2019-07-15",
        amount: "-0.68"
      },
      {
        _type: "CreditTransaction",
        transaction_id: "f65fbfb6-c6a7-4977-925f-0729d7565f24",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Oma siirto",
        narrative: "Lahjat",
        message: "Lahjat",
        status: "billed",
        reference: "",
        own_message: "Lahjat",
        counterparty_name: "Salo Ari",
        transaction_date: "2019-07-15",
        card_number: "",
        payment_date: "2019-07-15",
        amount: "40.00"
      },
      {
        _type: "CreditTransaction",
        transaction_id: "2d814f3d-8bd5-4672-9dad-5535b62a1cc6",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Pano",
        narrative: "Lapsilisä",
        message: "Lapsilisä",
        status: "billed",
        reference: "LL4200K6790",
        own_message: "Lapsilisä",
        counterparty_name: "KELA/FPA",
        transaction_date: "2019-07-15",
        card_number: "",
        payment_date: "2019-07-15",
        amount: "132.99"
      },
      {
        _type: "CreditTransaction",
        transaction_id: "c04ef760-8d02-4051-b3ab-3b4e56ae8334",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Pano",
        narrative: "Lapsilisä",
        message: "Lapsilisä",
        status: "billed",
        reference: "LL4200K6790",
        own_message: "Lapsilisä",
        counterparty_name: "KELA/FPA",
        transaction_date: "2019-07-15",
        card_number: "",
        payment_date: "2019-07-15",
        amount: "150.27"
      },
      {
        _type: "DebitTransaction",
        transaction_id: "d460597b-02e1-4108-a121-abab8c78a1d8",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Korttiosto",
        narrative: "USD 9.39 Gotham City",
        message: "USD 9.39 Gotham City",
        status: "billed",
        reference: "678944335600",
        counterparty_account: "",
        own_message: "USD 9.39 Gotham City",
        counterparty_name: "Wallmart",
        transaction_date: "2019-07-15",
        card_number: "1234.0",
        payment_date: "2019-07-15",
        original_currency: "USD",
        original_currency_amount: "9.39",
        currency_rate: "1.1729",
        amount: "-7.93"
      },
      {
        _type: "CreditTransaction",
        transaction_id: "bd1436d1-39b9-4ed0-a535-e52e1a56890a",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Pano",
        narrative: "Kiitos",
        message: "Kiitos",
        status: "billed",
        reference: "111144419244",
        own_message: "Kiitos",
        counterparty_name: "Simon Baker",
        transaction_date: "2019-07-15",
        card_number: "",
        payment_date: "2019-07-15",
        amount: "7.72"
      },
      {
        _type: "CreditTransaction",
        transaction_id: "a2bfb9d3-6c58-43f5-ab71-a2805dd6efc1",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Oma siirto",
        narrative: "Lahjat",
        message: "Lahjat",
        status: "billed",
        reference: "",
        own_message: "Lahjat",
        counterparty_name: "Salo Ari",
        transaction_date: "2019-07-15",
        card_number: "",
        payment_date: "2019-07-15",
        amount: "18.40"
      },
      {
        _type: "DebitTransaction",
        transaction_id: "5807a822-cbf6-4a15-b39c-7658bb43c6ff",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Mibiilimaksu",
        narrative: "For present to Johanna",
        message: "For present to Johanna",
        status: "billed",
        reference: "221127000000",
        counterparty_account: "",
        own_message: "For present to Johanna",
        counterparty_name: "Salo Ari",
        transaction_date: "2019-07-15",
        card_number: "",
        payment_date: "2019-07-15",
        amount: "-0.60"
      },
      {
        _type: "CreditTransaction",
        transaction_id: "78d00c6d-069e-4a5a-9aed-e010cd15a820",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-17",
        type_description: "Pano",
        narrative: "Rent",
        message: "Rent",
        status: "billed",
        reference: "221127019888",
        own_message: "Rent",
        counterparty_name: "SMM Appartments",
        transaction_date: "2019-07-15",
        card_number: "",
        payment_date: "2019-07-15",
        amount: "37.40"
      },
      {
        _type: "DebitTransaction",
        transaction_id: "fe1f1c7b-9422-4ad2-a7e8-bd3ecf4a219b",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Debet automaattiotto",
        narrative: "EUR 35.00 Helsinki",
        message: "EUR 35.00 Helsinki",
        status: "billed",
        reference: "550772345",
        counterparty_account: "",
        own_message: "EUR 35.00 Helsinki",
        counterparty_name: "ATM Nosto 1212",
        transaction_date: "2019-07-15",
        card_number: "1234",
        payment_date: "2019-07-15",
        amount: "-18.20"
      },
      {
        _type: "DebitTransaction",
        transaction_id: "0a92b89e-bc0e-4e1b-98fb-ed5b14b390f2",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Korttiosto",
        narrative: "USD 9.39 Gotham City",
        message: "USD 9.39 Gotham City",
        status: "billed",
        reference: "678944335600",
        counterparty_account: "",
        own_message: "USD 9.39 Gotham City",
        counterparty_name: "Wallmart",
        transaction_date: "2019-07-15",
        card_number: "1234.0",
        payment_date: "2019-07-15",
        original_currency: "USD",
        original_currency_amount: "9.39",
        currency_rate: "1.1729",
        amount: "-8.01"
      },
      {
        _type: "DebitTransaction",
        transaction_id: "01847f22-64df-4571-9ebd-eaf2f5a80abb",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Mibiilimaksu",
        narrative: "For present to Johanna",
        message: "For present to Johanna",
        status: "billed",
        reference: "221127000000",
        counterparty_account: "",
        own_message: "For present to Johanna",
        counterparty_name: "Salo Ari",
        transaction_date: "2019-07-15",
        card_number: "",
        payment_date: "2019-07-15",
        amount: "-2.05"
      },
      {
        _type: "CreditTransaction",
        transaction_id: "f5c098e3-8978-440b-971e-dfc7d93e36b2",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Pano",
        narrative: "Lotto",
        message: "Lotto",
        status: "billed",
        reference: "301127019500",
        own_message: "Lotto",
        counterparty_name: "Salo Ari",
        transaction_date: "2019-07-15",
        card_number: "",
        payment_date: "2019-07-15",
        amount: "0.12"
      },
      {
        _type: "DebitTransaction",
        transaction_id: "eacc7bd8-7a9c-4d5a-8029-a2dd839f6d53",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Korttiosto",
        narrative: "USD 9.39 Gotham City",
        message: "USD 9.39 Gotham City",
        status: "billed",
        reference: "678944335600",
        counterparty_account: "",
        own_message: "USD 9.39 Gotham City",
        counterparty_name: "Wallmart",
        transaction_date: "2019-07-15",
        card_number: "1234.0",
        payment_date: "2019-07-15",
        original_currency: "USD",
        original_currency_amount: "9.39",
        currency_rate: "1.1729",
        amount: "-7.77"
      },
      {
        _type: "DebitTransaction",
        transaction_id: "a4bd1481-df95-4334-8eb0-1581eed44439",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Debet automaattiotto",
        narrative: "EUR 20.00 Vasa",
        message: "EUR 20.00 Vasa",
        status: "billed",
        reference: "101015553332",
        counterparty_account: "",
        own_message: "EUR 20.00 Vasa",
        counterparty_name: "ATM 2312",
        transaction_date: "2019-07-15",
        card_number: "1234",
        payment_date: "2019-07-15",
        amount: "-12.40"
      },
      {
        _type: "CreditTransaction",
        transaction_id: "cd3fe436-9e3a-460c-8d83-d4fd1d19b6a5",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Pano",
        narrative: "Lotto",
        message: "Lotto",
        status: "billed",
        reference: "301127019500",
        own_message: "Lotto",
        counterparty_name: "Salo Ari",
        transaction_date: "2019-07-15",
        card_number: "",
        payment_date: "2019-07-15",
        amount: "0.04"
      },
      {
        _type: "DebitTransaction",
        transaction_id: "bb8d0292-b043-49d8-9c56-56bfee6926be",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Itsepalvelu",
        narrative: "Kino ",
        message: "Kino",
        status: "billed",
        reference: "671232100994",
        counterparty_account: "",
        own_message: "Kino",
        counterparty_name: "Salo Johanna",
        transaction_date: "2019-07-15",
        card_number: "",
        payment_date: "2019-07-15",
        amount: "-0.15"
      },
      {
        _type: "DebitTransaction",
        transaction_id: "57fe03cf-69c4-42c5-b767-b7448d5a0d4b",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-17",
        type_description: "Korttiosto",
        narrative: "GBP 31.20 Heathrow",
        message: "GBP 31.20 Heathrow",
        status: "billed",
        reference: "795622333023",
        counterparty_account: "",
        own_message: "GBP 31.20 Heathrow",
        counterparty_name: "Avis",
        transaction_date: "2019-07-15",
        card_number: "1234.0",
        payment_date: "2019-07-15",
        original_currency: "GBP",
        original_currency_amount: "31.20",
        currency_rate: "0.8756",
        amount: "-32.42"
      },
      {
        _type: "DebitTransaction",
        transaction_id: "e18d3ea0-5608-4b69-91f5-eb8a330b191f",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Korttiosto",
        narrative: "USD 9.39 Gotham City",
        message: "USD 9.39 Gotham City",
        status: "billed",
        reference: "678944335600",
        counterparty_account: "",
        own_message: "USD 9.39 Gotham City",
        counterparty_name: "Wallmart",
        transaction_date: "2019-07-15",
        card_number: "1234.0",
        payment_date: "2019-07-15",
        original_currency: "USD",
        original_currency_amount: "9.39",
        currency_rate: "1.1729",
        amount: "-3.60"
      },
      {
        _type: "DebitTransaction",
        transaction_id: "ed686a05-1b59-4c38-9e47-04d14683b6f1",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Debet automaattiotto",
        narrative: "EUR 35.00 Helsinki",
        message: "EUR 35.00 Helsinki",
        status: "billed",
        reference: "550772345",
        counterparty_account: "",
        own_message: "EUR 35.00 Helsinki",
        counterparty_name: "ATM Nosto 1212",
        transaction_date: "2019-07-15",
        card_number: "1234",
        payment_date: "2019-07-15",
        amount: "-6.65"
      },
      {
        _type: "CreditTransaction",
        transaction_id: "f2741ff9-9f44-4499-8e66-ca279639b251",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Pano",
        narrative: "Lotto",
        message: "Lotto",
        status: "billed",
        reference: "301127019500",
        own_message: "Lotto",
        counterparty_name: "Salo Ari",
        transaction_date: "2019-07-15",
        card_number: "",
        payment_date: "2019-07-15",
        amount: "0.10"
      },
      {
        _type: "CreditTransaction",
        transaction_id: "4af5023e-232c-4250-8d26-8640954111a1",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Pano",
        narrative: "Rent",
        message: "Rent",
        status: "billed",
        reference: "221127019888",
        own_message: "Rent",
        counterparty_name: "SMM Appartments",
        transaction_date: "2019-07-15",
        card_number: "",
        payment_date: "2019-07-15",
        amount: "30.80"
      },
      {
        _type: "CreditTransaction",
        transaction_id: "09067ccd-93c5-415e-86b5-f526dafe4f24",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Pano",
        narrative: "Kiitos",
        message: "Kiitos",
        status: "billed",
        reference: "111144419244",
        own_message: "Kiitos",
        counterparty_name: "Simon Baker",
        transaction_date: "2019-07-15",
        card_number: "",
        payment_date: "2019-07-15",
        amount: "9.52"
      },
      {
        _type: "DebitTransaction",
        transaction_id: "a3126897-c317-4fb1-82b7-74f426c54d73",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Korttiosto",
        narrative: "Helsinki",
        message: "Helsinki",
        status: "billed",
        reference: "18110005577890",
        counterparty_account: "",
        own_message: "Helsinki",
        counterparty_name: "K market Helsinki",
        transaction_date: "2019-07-15",
        card_number: "1234",
        payment_date: "2019-07-15",
        amount: "-4.92"
      },
      {
        _type: "DebitTransaction",
        transaction_id: "97a15430-99fd-46e9-927d-2115d26d99fa",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Debet automaattiotto",
        narrative: "EUR 35.00 Helsinki",
        message: "EUR 35.00 Helsinki",
        status: "billed",
        reference: "550772345",
        counterparty_account: "",
        own_message: "EUR 35.00 Helsinki",
        counterparty_name: "ATM Nosto 1212",
        transaction_date: "2019-07-15",
        card_number: "1234",
        payment_date: "2019-07-15",
        amount: "-19.95"
      },
      {
        _type: "DebitTransaction",
        transaction_id: "65fc8c22-bd90-4c62-951e-bba178809083",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Korttiosto",
        narrative: "USD 9.39 Gotham City",
        message: "USD 9.39 Gotham City",
        status: "billed",
        reference: "678944335600",
        counterparty_account: "",
        own_message: "USD 9.39 Gotham City",
        counterparty_name: "Wallmart",
        transaction_date: "2019-07-15",
        card_number: "1234.0",
        payment_date: "2019-07-15",
        original_currency: "USD",
        original_currency_amount: "9.39",
        currency_rate: "1.1729",
        amount: "-0.40"
      },
      {
        _type: "DebitTransaction",
        transaction_id: "852da4cf-d045-49a1-a729-c6a5833efb16",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Debet automaattiotto",
        narrative: "EUR 20.00 Vasa",
        message: "EUR 20.00 Vasa",
        status: "billed",
        reference: "101015553332",
        counterparty_account: "",
        own_message: "EUR 20.00 Vasa",
        counterparty_name: "ATM 2312",
        transaction_date: "2019-07-15",
        card_number: "1234",
        payment_date: "2019-07-15",
        amount: "-5.80"
      },
      {
        _type: "CreditTransaction",
        transaction_id: "4ca66d06-8eae-45cd-a8cb-e71b2e042b6b",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-16",
        type_description: "Pano",
        narrative: "Rent",
        message: "Rent",
        status: "billed",
        reference: "221127019888",
        own_message: "Rent",
        counterparty_name: "SMM Appartments",
        transaction_date: "2019-07-15",
        card_number: "",
        payment_date: "2019-07-15",
        amount: "20.35"
      },
      {
        _type: "CreditTransaction",
        transaction_id: "92fd4056-a8db-48fc-8e20-e941c4180563",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Oma siirto",
        narrative: "Lahjat",
        message: "Lahjat",
        status: "billed",
        reference: "",
        own_message: "Lahjat",
        counterparty_name: "Salo Ari",
        transaction_date: "2019-07-15",
        card_number: "",
        payment_date: "2019-07-15",
        amount: "11.60"
      },
      {
        _type: "CreditTransaction",
        transaction_id: "ef0e6899-adbd-4468-a798-2b824a7f3092",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Pano",
        narrative: "Lotto",
        message: "Lotto",
        status: "billed",
        reference: "301127019500",
        own_message: "Lotto",
        counterparty_name: "Salo Ari",
        transaction_date: "2019-07-15",
        card_number: "",
        payment_date: "2019-07-15",
        amount: "0.10"
      },
      {
        _type: "DebitTransaction",
        transaction_id: "fb06822e-1cee-4548-9a06-0fd74b8a6505",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Korttiosto",
        narrative: "USD 9.39 Gotham City",
        message: "USD 9.39 Gotham City",
        status: "billed",
        reference: "678944335600",
        counterparty_account: "",
        own_message: "USD 9.39 Gotham City",
        counterparty_name: "Wallmart",
        transaction_date: "2019-07-15",
        card_number: "1234.0",
        payment_date: "2019-07-15",
        original_currency: "USD",
        original_currency_amount: "9.39",
        currency_rate: "1.1729",
        amount: "-6.25"
      },
      {
        _type: "CreditTransaction",
        transaction_id: "850ed0e7-b834-41fd-9d86-8b0e3b15371c",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-16",
        type_description: "Pano",
        narrative: "Rent",
        message: "Rent",
        status: "billed",
        reference: "221127019888",
        own_message: "Rent",
        counterparty_name: "SMM Appartments",
        transaction_date: "2019-07-15",
        card_number: "",
        payment_date: "2019-07-15",
        amount: "44.00"
      },
      {
        _type: "CreditTransaction",
        transaction_id: "6a0af32d-b86d-4989-9910-350ed8d1edbd",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Pano",
        narrative: "Lotto",
        message: "Lotto",
        status: "billed",
        reference: "301127019500",
        own_message: "Lotto",
        counterparty_name: "Salo Ari",
        transaction_date: "2019-07-15",
        card_number: "",
        payment_date: "2019-07-15",
        amount: "0.10"
      },
      {
        _type: "DebitTransaction",
        transaction_id: "f45ceb2c-fcc0-4ff8-9572-9792bd308442",
        currency: "EUR",
        booking_date: "2019-07-15",
        value_date: "2019-07-15",
        type_description: "Itsepalvelu",
        narrative: "Mobile phone",
        message: "Mobile phone",
        status: "billed",
        reference: "447711118878060000",
        counterparty_account: "",
        own_message: "Mobile phone",
        counterparty_name: "Salo Johanna",
        transaction_date: "2019-07-15",
        card_number: "",
        payment_date: "2019-07-15",
        amount: "-114.00"
      }
    ],
    _links: [
      { rel: "self", href: "/v3/accounts/FI7473834510057469-EUR/transactions" },
      {
        rel: "next",
        href:
          "/v3/accounts/FI7473834510057469-EUR/transactions?continuationKey=sandboxContinuationKey-2"
      }
    ]
  }
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
              variant="h4"
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

  const transactionRow = transactionData.response.transactions.map(row => (
    <TableRow key={row.id}>
      <TableCell>{row.booking_date}</TableCell>
      <TableCell>{row.type_description}</TableCell>
      <TableCell>{row.counterparty_name}</TableCell>
      <TableCell>{row.message}</TableCell>
      <TableCell align="right">{row.amount}</TableCell>
    </TableRow>
  ));

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
              <TableCell>Type description</TableCell>
              <TableCell>Counterparty name</TableCell>
              <TableCell>Message</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{transactionRow}</TableBody>
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
        <Grid container spacing={3}>
          {AccountCard}
        </Grid>
        {open && <Transactions></Transactions>}
      </Container>
    </React.Fragment>
  );
}
