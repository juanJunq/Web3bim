import Image from 'next/image'

import {
    HeaderComponent,
    Menu,
    Left,
    Li,
    Ul,
    OesteLink,
    LesteLink,
    Logo,
    Meio,
    Link,
    Seta,
    User,
    Usuario,
    Busca
} from '../../styles/HeaderStyle' 

export default function Header(){
    return (
        <HeaderComponent>
            <Logo href = {`/`}>
                <Image 
                    src = {"/img/logo.svg"}
                    alt = {"logo"}
                    width = {130}
                    height = {78}
                />
            </Logo>
            <Menu>
                <Left>
                    <Ul>
                        <Li>
                            <OesteLink href = "/oeste">Conferencia Oeste</OesteLink>
                        </Li>
                        <Li>
                            <LesteLink href = "#">Conferencia Leste</LesteLink>
                        </Li>
                    </Ul>
                </Left>
                <Meio>
                    <Ul>
                        <Li>
                            <Link href = "#">Estatisticas</Link>
                        </Li>
                        <Li>
                            <Link href = "#">Mais</Link>
                            <Seta>
                                <Image
                                    src = {"/img/seta.svg"}
                                    alt = {"seta"}
                                    width = {12}
                                    height = {12}
                                />
                            </Seta>
                        </Li>
                    </Ul>
                </Meio>
                <User>
                    <Usuario>
                        <Image
                            src = {"/img/user.svg"}
                            alt = {"user"}
                            width = {38}
                            height = {38}
                        />
                    </Usuario>
                    <Link href = {`/login`}>USER</Link>
                </User>
                <Busca>
                    <Image
                        src = {"/img/busca.svg"}
                        alt = {"busca"}
                        width = {46}
                        height = {46}
                    />
                </Busca>
            </Menu>
        </HeaderComponent> 
    )
}
