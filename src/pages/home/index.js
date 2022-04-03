import React from "react";
import "../home/styles.css";
import CardProducts from "../../components/cardProducts";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";


export default function Home() {
    return (
        <>
            <div className="page-home">
                <Card className="card-home">
                    <CardContent className="tittle-card">
                        <h1>Meu carrinho</h1>
                        <hr width="100%" align=" right noshade" />
                    </CardContent>
                    <CardContent>
                        <CardProducts />
                        <hr width="100%" align=" right noshade" />
                        <h1>Total: </h1> 
                        <hr width="100%" align=" right noshade" />
                        <Button variant="contained" fullWidth= { true } className="btn-buy"> <p>Finalizar compra</p> </Button>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
