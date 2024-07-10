import Banner from 'components/Banner'
import styles from './Player.module.css'
import Titulo from 'components/Titulo'
import { useParams } from 'react-router-dom'
import NaoEncontrada from 'pages/NaoEncontrada'
import { useEffect, useState } from 'react'


export default function Player() {

    const [video, setVideo] = useState();
    const parametros = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/DavidAndradee/cine-room-api/videos?id=${parametros.id}`).then(resposta => resposta.json()).then(dados => {
            setVideo(...dados)
        })
    }, [])

    if (!video) {
        return <NaoEncontrada />
    }
    return (
        <>
            <Banner imagem="player"></Banner>
            <Titulo>{video.titulo}</Titulo>
            <section className={styles.container}>
                <iframe height="500" src={video.link} title={video.titulo} frameborder="0" allow=''></iframe>
            </section>
        </>
    )
}