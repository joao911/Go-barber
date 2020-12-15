import React from 'react';
import { FiMail, FiLock, FiUser, FiArrowDownLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';

const SignUp: React.FC = () => {
    return (
        <Container>
            <Background />
            <Content>
                <img src={logoImg} alt="GoBarber" />

                <form>
                    <h1>Faça seu logon</h1>

                    <Input name="name" icon={FiUser} placeholder="Nome" />
                    <Input name="email" icon={FiMail} placeholder="E-mail" />

                    <Input
                        name="password"
                        icon={FiLock}
                        type="password"
                        placeholder="Senha"
                    />

                    <Button type="submit">Cadastrar</Button>


                </form>

                <a href="signup">
                    <FiArrowDownLeft />
                    Voltar para logon
                </a>
            </Content>


        </Container>
    );
}

export default SignUp;