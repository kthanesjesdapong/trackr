import styled from 'styled-components';

const CardStyles = styled.div`
  /* Add this to make the card component responsive */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      'card1'
      'card2'
      'card3';
  }

  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1.9fr 1fr;
  grid-template-rows: 0.8fr 400px;
  grid-template-areas:
    'card1 card2'
    'card1 card3';
  grid-gap: 5px;
  border-bottom: 1px solid aquamarine;

  .card {
    padding: 20px;
    /* border: 1px solid pink; */
    /* border-radius: 20px; */
    margin: 10px 15px;
  }

  .card:first-child {
    grid-area: card1;
  }

  .card:nth-child(2) {
    grid-area: card2;
    font-size: 13px;
    padding: 3px 0px 3px;
  }

  .card:nth-child(3) {
    grid-area: card3;
  }
`;
export default CardStyles;