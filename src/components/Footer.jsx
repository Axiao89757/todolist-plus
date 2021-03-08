import styled from "styled-components";
// import MENU_LIST from "../common/constants/index";
export const MENU_TYPE = {
    ACTIVE: "ACTIVE",
    ALL: "ALL",
    COMPLETED: "COMPLETED"
};

export const MENU_LIST = [
    {
        menuName: "Active",
        type: MENU_TYPE.ACTIVE,
    },
    {
        menuName: "All",
        type: MENU_TYPE.ALL,
    },
    {
        menuName: "Completed",
        type: MENU_TYPE.COMPLETED,
    },
];

export default function Footer(props) {
    const { currentMenuType, handleChooseMenu } = props;
    return (
        <Div>
            {
                MENU_LIST.map((item, index) => {
                    return (
                        <P key={index}
                            data-type={item.type}
                            isChoosed={currentMenuType === item.type}
                            onClick={handleChooseMenu}
                        >{item.menuName}</P>
                    );
                })
            }
        </Div>
    )
}

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: baseline;
    width: 500px;

    margin: 20px auto;
`;
const P = styled.p`
    background: ${props => props.isChoosed ? "#009ad6" : 'white'};
    color:  ${props => props.isChoosed ? "white" : '#009ad6'};

    width: 100px;
    height: 20px;
    padding: 2px;
    border-style: outset;
    border-radius: 30px;
    border-width: 3px; 
    border-color: #009ad6;

    font-family: Monospace;
    font-size: 15px;
    font-weight: bold;
    user-select: none;    
`;
