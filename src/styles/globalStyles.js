import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --main-font: Audiowide;
        --alt-font: Oswald;
        --main-color: rgba(23, 23, 23, 1);
        --green-color: rgba(0, 150, 136, 1);
        --white-color: rgba(255, 255, 255, 1);
        --white-transparent-color: rgba(255, 255, 255, 0.8);
        --main-text-color: rgba(255, 255, 255,1);
        --small-device: 776px;
        --medium-device: 922px;
        --large-device: 1200px;
    }
    html,body {
        margin: 0 0;
        padding: 0 0;
        box-sizing: border-box;
    }
    h1, h2, h3, h4, h5, h6,p,span {
        font-family: var(--alt-font);
        margin-top: 0;
        margin-bottom: 0;
    }
    ul {
        list-style: none;
    }
    a {
        text-decoration: none!important;
        color: #fff;
        :hover {
          color: #fff;
        }
    }
    h4 {
      font-size: 16px;
    }
  
    input {
        outline: none;
        border: none;
        font-family: var(--alt-font);

        &:focus,
      &:valid {
        outline: none;
      }
    }
    .section-landing-page {
        padding: 70px 50px;
  background-color: var(--white-color);

    }
    .section-title-landing-page {
        text-align: center;
        margin-bottom: 40px;
        font-family: var(--main-font);
        transform: skew(2deg, -4deg);
        letter-spacing: 0.9px;
     
        
    }


    form {
      
          label {
            display: block;
            margin-bottom: 6px;
            font-size: 14px;
            font-weight: 300;
            font-family: var(--alt-font);
          }
      select {
        cursor: pointer;
      }
          input, select {
            color: #2f333f;
            border-radius: 4px;
            border: 1px solid #f8f8f8;
            background: #f8f8f8;
            transition: all 0.2s cubic-bezier(0.55, 0, 0.1, 1);
            font-size: 18px;
            font-family: var(--alt-font);
            display: block;
            box-sizing: border-box;
            width: 100%;
            padding: 12px;
            -webkit-appearance: none;
          -moz-appearance: none;
          -ms-appearance: none;
          appearance: none;
          outline: 0;
          box-shadow: none;

          }
   
          select > option {
            opacity:0.7;
            cursor: pointer;
          }
  
        }

        .content_highlight {
  background-image: linear-gradient(120deg, #6d58f4e0 0%, #e9f0ff 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.4em;
  background-position: 0 88%;
  font-weight: inherit;
}
  select {

  }



.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
    }

    
`;

export default GlobalStyle;
