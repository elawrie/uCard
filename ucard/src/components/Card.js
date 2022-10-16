import { StyledCard } from "./styles/Card.styled";

export default function Card({item: {id, title, body, footer}}) {
    return (
        <StyledCard>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
                <p>{footer}</p>
            </div>
        </StyledCard>
    );
}