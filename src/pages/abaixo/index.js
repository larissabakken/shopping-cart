import React, { useState, useEffect } from "react";
import "./styles.css";
import CardProducts from "../../components/cardProducts";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import axios from "axios";

export default function Abaixo() {
    const [data, setData] = useState([]);
    const [price, setPrice] = useState([]);
   
    useEffect( ( ) => {
        axios('./abaixo.json').then(response => {
            const { data } = response;
            const item = data.items
            setData(data)
            setPrice(item
                        .map((item) => item.sellingPrice * item.quantity)
                        .reduce((total, price) => total + price));
            return data
        }).catch((error) => {
            console.log(error);
        });
    }, [])

    const totalPrice = price/ 100;
    const totalPriceBRL = totalPrice.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    });

    const isFree = () => {
        if (totalPrice > 10) {
            return (
                <div className="div-btn">
                    <p className="frete">
                        Parabéns, sua compra tem frete grátis !
                    </p>
                </div>
            );
        }
    };

    return (
        <>
            <div className="page-home">
                <Card className="card-home">
                    <CardContent className="tittle-card">
                        <h1>Meu carrinho</h1>
                        <hr width="100%" align=" right noshade" />
                    </CardContent>
                    <CardContent>
                        <CardProducts data={data} className="prod-card" />
                        <hr width="100%" align=" right noshade" />
                        <h1>Total: {totalPriceBRL} </h1>
                        {isFree()}
                        <hr width="100%" align=" right noshade" />
                        <div id="btn">
                            <Button variant="contained" className="btn-buy">
                                {" "}
                                <p>Finalizar compra</p>{" "}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
