import styled, { ThemeProvider } from "styled-components";

const Button = styled.div`
  button {
    background: ${(props) => props.theme.main};
    border-radius: 5px;
    color: white;
    text-decoration: none;
    outline: none;
    border: none;
    width: 100%;
    padding: 0.8em 1em;
    transition: opacity 200ms ease-in-out;
    line-height: 1;
    text-align: center;
    box-sizing: border-box;
    font-weight: 500;
    cursor: pointer;
    font-size: 16px;
    white-space: nowrap;
    align-items: center;
    margin-top: 12px;
  }
`;

const theme = {
  main: "var(--main-color)",
  red: "linear-gradient(221.82deg, #FF7059 0%, #FF664E 63.02%, #F2543A 100%)",
};

export default function MainButton({ button_title }) {
  return (
    <ThemeProvider theme={theme}>
      <Button>
        <button type="submit">
          <span>{button_title}</span>
        </button>
      </Button>
    </ThemeProvider>
  );
}
