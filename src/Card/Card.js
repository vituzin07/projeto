import './Card.css'

export default function Card({ titulo, dataLancamento, capa, avalicao}) {
    return (
        <div className="card">
            <div className="thumbnail">
                <img width={200} height={100} src={capa} alt="" />
            </div>
            <div className="conteudo">
                <div className="titulo">
                    {titulo}
                </div>
                <div className="ano">
                    {new Date(dataLancamento).getFullYear()}
                </div>
                <div className="avaliacao">
                   Nota: {avalicao}
                </div>
            </div>
        </div>
    )
}