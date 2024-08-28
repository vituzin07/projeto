import './Card.css';

export default function Card({imagem, titulo, desenvolvedor, plataforma }) {

    return(
        <div className='container'>
            <div className = 'Imagem'>
                <img src = {imagem} alt = 'Foto do jogo'></img>
            </div>
            <div className='Titulo'>
                <h1>
                    {titulo}
                </h1>
            </div>
            <div className='Desenvolvedor'>
                <h2>
                    {desenvolvedor}
                </h2>
            </div>
            <div className='Plataforma'>
                <h2>
                    {plataforma}
                </h2>

            </div>

     

       </div>

  

   
    )
}