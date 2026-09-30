import '@/components/CardProdutos/cardProduto.css';

export default function CardProdutos({ produto }) {
    if (!produto) return null;

    return (
        <main className='grid-produtos'>
            <div className='produto'>
                <a href={`/produtos/${produto.id}`}>
                    <h1 className='subtitle'>{produto.title}</h1>
                    <img src={produto.thumbnail} />
                </a>
            </div>
        </main>
    )
}

