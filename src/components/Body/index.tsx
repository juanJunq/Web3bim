import Image from 'next/image'

import {
    Linha,
    BodyComponent,
    Grid,
    News,
    Background,
    Text,
    Meio,
    Conf,
    Baixo,
    Contra,
    Imagem
} from '../../styles/BodyStyle' 

export default function Body(){
    return(
        <BodyComponent>
            <Linha></Linha>
            <Grid>
                <News>
                    <Background>
                        <Text>
                            <h1>Principais noticias</h1>
                            <h2>Giannis eleito melhor jogador defensivo da temporada</h2>
                        </Text>
                    </Background>
                </News>
                <Meio>
                    <h1>Confrontos hoje</h1>
                    <Conf>
                        <Image
                            src = {"/img/bucks.svg"}
                            alt = {"conf1"}
                            width = {443}
                            height = {152}
                        />
                        <Image
                            src = {"/img/rockets.svg"}
                            alt = {"conf2"}
                            width = {443}
                            height = {152}
                        />
                        <Image
                            src = {"/img/LA.svg"}
                            alt = {"conf3"}
                            width = {443}
                            height = {152}
                        />
                    </Conf>
                </Meio>
                <Baixo>
                    <h1>Analise 1 contra 1</h1>
                    <Contra>
                        <Imagem>
                            <Image
                                src = {"/img/MJxLBJ.svg"}
                                alt = {"contra1"}
                                width = {214}
                                height = {140}
                            />
                        </Imagem>
                        <Image
                            src = {"/img/KDxLB.svg"}
                            alt = {"contra2"}
                            width = {214}
                            height = {144}
                        />
                    </Contra>
                </Baixo>
            </Grid>
        </BodyComponent>
    )
}