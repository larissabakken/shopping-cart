import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "../acima/styles.css";

export default function Main() {
    return (
        <div>
            <Card className="card-home">
                <CardContent className="tittle-card">
                    <h1>Escolha o carrinho de compra</h1>
                    <hr width="100%" align=" right noshade" />
                    <Stack direction="row" spacing={2}>
                        <Button href="/acima" variant="contained">Acima de R$10,00</Button>
                        <Button href="/abaixo" variant="contained">Abaixo de R$10,00</Button>
                    </Stack>
                </CardContent>
            </Card>
        </div>
    );
}
