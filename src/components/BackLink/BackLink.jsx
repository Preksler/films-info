import { LinkBack } from './BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <LinkBack to={to}>
      {children}
    </LinkBack>
  );
};