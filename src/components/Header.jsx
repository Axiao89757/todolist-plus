import PropTypes from "prop-types"
import styled from "styled-components";

const Input = styled.input`
width: 500px;
height: 50px;
padding-top: 10px;
border-style: none none solid none;
border-width: 2px; 
border-radius: 15px;
border-color: #009ad6;
outline: medium;
margin: 100px auto 0;
background-color: #F7F7F7;

font-family: Monospace;
font-size: 30px;
font-weight: bold;
color: #009ad6;

text-align: center;

:focus::-webkit-input-placeholder {
    color: transparent;
    }
::placeholder{
    color: #009ad6;
}
:focus{
    // background-color: #009ad0;
    // color: white;
    // text-align: left;
    // margin-left: 100px;
    // border: 10px outset #009ad6;
}
`;

export default function Header(props) {

    const { inputValue, handleEnter, handleChange } = props;

    return (
        <Input
            type="text"
            value={inputValue}
            placeholder="What to be done?"
            onKeyUp={handleEnter}
            onChange={handleChange} />
    );
}

Header.propTypes = {
    inputVaule: PropTypes.string,
    handleEnter: PropTypes.func,
    handleChange: PropTypes.func,
}