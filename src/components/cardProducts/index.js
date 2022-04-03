import * as React from "react";
import "../cardProducts/styles.css";

export default function RecipeReviewCard() {
    return (
        <div className="card">
            <div className="img-card">
                <img src="https://www.oficinadanet.com.br/imagens/post/25197/images.jpg"  className="image"/>
            </div>
            <div className="text-card">
                <p>Este é um texto ao lado de uma imagem!</p>
            </div>
        </div>
    );
}
