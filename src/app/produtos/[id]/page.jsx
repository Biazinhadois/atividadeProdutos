"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import "./saiba.css";

export default function Produto() {
  const params = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then((resposta) => resposta.json())
      .then((dados) => setProduto(dados));
  }, [params.id]);

  return (
    <main>
      {produto && <>
        <Link href="/produtos" className="comeback">Voltar aos produtos</Link>
        <div className="produto">
        <h1>{produto.title}</h1>
        <img className="image" src={produto.thumbnail} alt={produto.title} />
        <p>{produto.description}</p>
        <p>Categoria: {produto.category}</p>
        <p className="price">Preço: ${produto.price}</p>
        </div>
      </>}
    </main>
  );
}