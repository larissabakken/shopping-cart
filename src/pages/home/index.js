import React, { useState, useEffect } from "react";
import "../home/styles.css";
import CardProducts from "../../components/cardProducts";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export default function Home() {
    const [abaixo, setAbaixo] = useState([]);
    // const [acima, setAcima] = useState([]);

    const getAbaixo = async () => {
        const res = await fetch("./abaixo.json");
        const abaixo = await res.json();
        setAbaixo(abaixo);
    };

    useEffect(() => {
        getAbaixo();
        return JSON.stringify(abaixo);
    }, []);

    const item = abaixo?.items;

    const price = item
        .map((item) => item.sellingPrice * item.quantity)
        .reduce((total, price) => total + price);

    const totalPrice = price / 100;
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
                        {console.log(
                            totalPrice,
                            "total price !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
                        )}
                        <CardProducts data={abaixo} className="prod-card" />
                        <hr width="100%" align=" right noshade" />
                        <h1>Total: {totalPriceBRL} </h1>
                        {isFree}
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
