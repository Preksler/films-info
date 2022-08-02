import { Button } from './LoadMoreBtn.styled';

const LoadMoreBtn = ({ onLoadMore }) => {
    return (
        <Button onClick={onLoadMore}>
            <span>Load more</span>
        </Button>
    );
}
export default LoadMoreBtn;