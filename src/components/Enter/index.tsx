import{
    EnterComponent,
    FormH
} from '../../styles/EnterStyle'

import{
    Form,
    Label,
    Input,
    Button
} from '../../styles/LoginStyle'

import {Linha} from '../../styles/BodyStyle'

export default function Enter(){
    return(
        <EnterComponent>
            <Linha></Linha>
            <div className = "formulario">
                <FormH>Login</FormH>
                <Form>
                    <Label>E-mail</Label>
                    <Input type="email" placeholder="seu_nome@gmail.com" name="email" id="email" required></Input>
                    <Label>Senha</Label>
                    <Input type="password" placeholder="*******" name="senha" id="senha" required></Input>
                    <Button>Entrar</Button>
                </Form>
            </div>
        </EnterComponent>
    )
}