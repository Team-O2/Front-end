import Styled from 'styled-components';

interface ISHeader {
  url?: string;
}

const SHeader = Styled.div<ISHeader>`
.header{

    &__img{
        width: 100%;
        height:253px;
        position:relative;
        background: url(${(props) => props.url}) center center / cover;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &__text{
      color: black;                                                                   
      width: 600px;
      height: 68px;
      font-size: 46px;
      font-weight: bold;
      line-height: 1.22;
      letter-spacing: -0.5px;
      text-align: left;
      color: var(--colors-grayscale-ff);
    }
    &__fixed{
        position: fixed;
        top: 0px;
        width: 100%;
        background-color: #FFFFFF;
    }
}
`;

export default SHeader;
