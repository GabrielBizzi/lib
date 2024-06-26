import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: row-reverse;

  .pagination {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-left: 1rem;

    .arrow {
      width: 30px;
      height: 30px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      transition: all 0.3s;

      &:hover {
        background: #408cfe;
        color: #fff;
      }

      & + .arrow {
        margin-left: 4px;
      }

      img {
        max-width: 10px;
      }

      &:disabled {
        background: transparent;
        opacity: 0.2;
        cursor: default;
      }
    }

    .double-arrow {
      &:first-child {
        transform: rotate(-180deg);
      }
    }

    .links {
      padding: 0 1px;
      display: flex;
      flex-wrap: wrap;
    }
  }

  .pages {
    width: auto;
    display: flex;
    align-items: center;

    .select {
      width: 70px;
    }

    .text {
      p {
        margin-left: 16px;
        font-size: 13px;
        color: #505050;
        line-height: 20px;
        white-space: nowrap;
      }
    }
  }

  @media screen and (max-width: 700px) {
    .pages {
      display: none;
    }
  }
`;

export const SelectContainer = styled.div`
  width: 100%;
  z-index: 10;

  .sel__control {
    background: #ffffff;
    border-radius: 5px;
    border-color: rgba(37, 75, 132, 0.25);

    .sel__value-container {
      .sel__single-value {
        font-size: 13px;
        color: #606060;
      }
    }
  }

  .sel__menu {
    background: #fff;
    color: #606060;

    .sel__menu-list {
      font-size: 13px;
      .sel__option {
        color: #606060;
      }
      .sel__option--is-selected {
        background: #408cfe;
        color: #fff;
      }

      .sel__option--is-focused {
        background: #408cfe;
        color: #fff;
      }
    }
  }
`;

interface ButtonLinkProps {
  active: boolean;
  backgroundActive?: string;
}

export const ButtonLink = styled.button<ButtonLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background: transparent;
  color: #4f4f4f;
  font-weight: 500;
  font-size: 12px;
  margin: 0 2px;
  transition: all 0.3s;

  &:hover {
    background: ${props => darken(0.1, '#408CFE')};
    color: #fff;
  }

  ${props =>
    props.active &&
    css`
      background: ${(props.backgroundActive && props.backgroundActive) ||
      '#408CFE'};
      color: #fff !important;
      margin: 0 4px;

      &:hover {
        background: ${darken(0.05, '#408CFE')};
      }
    `}
`;
