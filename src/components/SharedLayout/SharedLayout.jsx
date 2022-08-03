import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, LogoLink, LinkNav } from './SharedLayout.styled';
import LogoImage from '../../images/logo.png';
import Loader from 'components/Loader/Loader';

const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <LogoLink to="/">
                    <Logo>
                        <img src={LogoImage} alt="logo" width="32" />
                        <span>Films Info</span>
                    </Logo>
                </LogoLink>
                <nav>
                    <LinkNav to="/"><span>Home</span></LinkNav>
                    <LinkNav to="/movies"><span>Movies</span></LinkNav>
                </nav>
            </Header>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </Container>
    );
}
export default SharedLayout;