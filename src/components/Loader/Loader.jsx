import { createPortal } from 'react-dom';
import { Puff } from 'react-loader-spinner';
import { Container } from './Loader.styled';

const loaderRoot = document.querySelector('#loader-root');

const Loader = () => {
    return createPortal(
        <Container>
            <Puff
                height="80"
                width="80"
                radisu={1}
                color="rgb(255 69 0)"
            />
        </Container>, loaderRoot
    );
}

export default Loader;