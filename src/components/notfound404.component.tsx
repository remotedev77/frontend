import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NotFound404 = () => {
  const Container = styled.div`
    color: #141414;
    gap: 10px;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      object-fit: cover;
      width: 800px;
      height: 400px;
    }

    a {
      color: #ffffff;
      border-radius: 8px;
      background: #f3673e;
      padding: 0.5rem 2rem;
    }
  `;

  const Title = styled.h1`
    color: #737373;
    font-size: 8rem;
    line-height: 1;
  `;
  const Subtitle = styled.h2`
    font-size: 2rem;
  `;

  const Details = styled.p``;
  return (
    <Container>
      <img src="/ufo.gif" alt="ufo" />
      <Title>404</Title>
      <Subtitle>Page Not Found</Subtitle>
      <Details>Sorry, the page you are looking for could not be found.</Details>
      <Link to={"/"}>Back Home</Link>
    </Container>
  );
};
