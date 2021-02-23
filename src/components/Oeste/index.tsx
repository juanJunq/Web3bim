import { Linha } from '../../styles/BodyStyle'

import Image from 'next/image'

import {
    BodyComponent,
    Grid,
    H2,
    Conf,
    Menu,
    Div,
    Meio,
    Dentro
} from '../../styles/OesteStyle'
export default function Header() {
    return (
        <BodyComponent>
            <Linha></Linha>
            <Grid>
                <Conf>
                    <H2>Classificação da Conferência 2019-2020</H2>
                    <Menu>
                        <Div>
                            <h1>Temporada regular</h1>
                            <Image
                                src={"/img/seta.svg"}
                                alt={"seta"}
                                width={12}
                                height={12}
                            />
                        </Div>
                        <Div>
                            <h1>2019-2020</h1>
                            <Image
                                src={"/img/seta.svg"}
                                alt={"seta"}
                                width={12}
                                height={12}
                            />
                        </Div>
                    </Menu>
                    <Image
                        src={"/img/oeste.svg"}
                        alt={"oeste"}
                        width={826}
                        height={729}
                    />
                </Conf>
                <Meio>
                    <Image
                        src={"/img/oeste_logo.svg"}
                        alt={"oeste_logo"}
                        width={340}
                        height={255}
                    />
                    <div className = "stats">
                        <h1>Lider de APG</h1>
                        <Dentro>
                            <Image
                                src = {"/img/LBJ.svg"}
                                alt = {"lbj"}
                                width = {162}
                                height = {140}
                            />
                            <h1>10.2 APG</h1>
                        </Dentro>
                        <h1>Lider de PPG</h1>
                        <Dentro>
                            <Image
                                src = {"/img/JH.svg"}
                                alt = {"jh"}
                                width = {170}
                                height = {140}
                            />
                            <h1>34.4 PPG</h1>
                        </Dentro>
                        <h1>Lider de RPG</h1>
                        <Dentro>
                            <Image
                                src = {"/img/AD.svg"}
                                alt = {"ad"}
                                width = {220}
                                height = {140}
                            />
                            <h1>15.2 RPG</h1>
                        </Dentro>
                    </div>
                </Meio>
            </Grid>
        </BodyComponent>
    )
}   