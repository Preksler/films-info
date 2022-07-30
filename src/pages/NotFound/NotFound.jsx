import { LinkBack } from '../../components/BackLink/BackLink.styled';

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <p>Page not found</p>
            <LinkBack to={'/'}>Go back to home</LinkBack>
        </div>
    );
}
export default NotFound;