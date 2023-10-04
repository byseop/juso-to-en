'use client';

import styled from 'styled-components';
import Header from './Header';

const S = styled(Header)`
  .link__heading {
    text-decoration: none;
    color: inherit;
  }

  .mode__icons {
    button {
      background: none;
      border: none;
      cursor: pointer;
    }

    svg {
      font-size: 24px;
    }
  }
`;

export default S;
