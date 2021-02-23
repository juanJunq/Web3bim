import {
    LoginComponent,
    FormH,
    Form,
    Label,
    Input,
    Button,
    Text,
    H1,
    A
} from '../../styles/LoginStyle' 

import {Linha} from '../../styles/BodyStyle'

export default function Login(){
    return(
        <LoginComponent>
            <Linha></Linha>
            <div className = "formulario">
                <FormH>Cadastre-se</FormH>
                <Form>
                    <Label>Usuario</Label>
                    <Input type="text" placeholder="Insira um nome de usuario" name="user" id="user" required></Input>
                    <Label>E-mail</Label>
                    <Input type="email" placeholder="seu_nome@gmail.com" name="email" id="email" required></Input>
                    <Label>Senha</Label>
                    <Input type="password" placeholder="*******" name="senha" id="senha" required></Input>
                    <Button>Cadastrar</Button>
                    <Text>
                        <H1>Ja tem cadastro?</H1>
                        <A href = {`/enter`}>Faça login</A>
                    </Text>
                </Form>
            </div>
        </LoginComponent>
    )
}