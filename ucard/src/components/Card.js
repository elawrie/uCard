import { StyledCard } from "./styles/Card.styled";

export default function Card({id, title, body}) {
    return (
        <StyledCard>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        </StyledCard>
    );
}