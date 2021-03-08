import styled from "styled-components";
// import PropTypes from "styled-components"
export const ITEM_TYPE = {
    DONE: "DONE",
    ACTIVE: "ACTIVE"
}

export default function List(props) {

    const { itemList, handleDelete, handleItemClick } = props;
    console.log(itemList)
    return (
        <Ul>
            {itemList.map((item, index) => {
                return (
                    <Li key={item.key}
                        data-key={item.key}
                        onClick={handleItemClick}>
                        <P itemType={item.type}>{item.text}</P>
                        <Button onClick={handleDelete}>X</Button>
                    </Li>
                );
            })}
        </Ul>

    );
}

// List.propTypes = {
//     itemList: PropTypes.array,
//     handleDelete: PropTypes.func,
// }


const Ul = styled.ul`
    width: 500px;
    max-height: 400px;
    margin: 10px auto;
    overflow-y: scroll;
`;

const Li = styled.li`
    list-style-type: none;
    padding: 15px 5px 2px 30px;
    border-bottom: 1px solid grey; 
    margin-right: 32px;

    font-family: cursive;
    font-size: 20px;

    text-align: left;

    &:hover {
        border-bottom: 2px solid #009ad6; 
        color: #009ad6;
        > Button {
            font-size: 20px;
            color: #90d7ec;
        }
    }

`;

const Button = styled.button`
    width:5%;

    padding: 2px 0;
    background: white;
    border:none;
    outline:none;

    font-size: 15px;
    font-weight: bold;
    color: white;

    user-select: none;
`;

const P = styled.p`
    display:inline-block;
    width: 95%;
    margin:0;

    text-decoration:${props => props.itemType === ITEM_TYPE.DONE ? "line-through" : "none"};
    text-decoration-color: grey;
    color: ${props => props.itemType === ITEM_TYPE.DONE ? "grey" : "default"};

`;


