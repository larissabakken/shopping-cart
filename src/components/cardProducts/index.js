import * as React from "react";
import "../cardProducts/styles.css";

export default function RecipeReviewCard({ data }) {
    const body = data.items;
    console.log(body, "body aqui");

    return (
        <>
            {body?.map((item, i) => {
                return (
                    <div className="card" key={i}>
                        <div className="img-card">
                            <img
                                key={i}
                                src={item.imageUrl}
                                className="image"
                            />
                        </div>
                        <div className="text-card" key={i}>
                            <h3>{item.name}</h3>
                            <p>Preço {(item.price/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                            <h4>Valor cobrado {item.sellingPrice/100}</h4>
                            <p>Quantidade: {item.quantity}</p>
                            <h6>Valor total: {(item.quantity *(item.sellingPrice/100)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</h6>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
