import { Wrapper, Input, Button } from './SearchBox.styled';

export const SearchBox = ({ value, onChange }) => {
  return (
    <Wrapper>
        <Input
            type="text"
            autoFocus
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
        <Button type="submit">Search</Button>
    </Wrapper>
  );
};