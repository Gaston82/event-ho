import styled from "styled-components";

const EventComponentStyled = styled.article`
  .card {
    max-width: 32rem;
    max-height: 32rem;
    padding: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;

    &__button-edit {
      position: absolute;
      top: 3rem;
      right: 3rem;
      font-size: 4rem;
      background: white;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      color: #333;
    }

    &__container-image {
      max-width: 28rem;
      overflow: hidden;
    }

    &__image {
      object-fit: contain;
    }

    &__info {
      padding-top: 1rem;
      max-width: 28rem;

      .container-info-city {
        display: flex;
        justify-content: space-between;

        .card__info-city {
          font-size: 2rem;
        }
        .card__info-date {
          font-size: 1.8rem;
          text-align: right;
        }
      }
      .container-info-title {
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
        .card__info-title {
          font-size: 3.4rem;
          font-weight: bold;
          letter-spacing: -0.02em;
        }
        .card__button-fav {
          font-size: 2rem;
          justify-self: left;
          background: #333;
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          margin-right: 2rem;
        }
      }
    }
  }
`;
export default EventComponentStyled;
