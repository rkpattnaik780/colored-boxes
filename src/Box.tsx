interface IBox {
    isGreen: number | boolean;
    row: number;
    col:number;
    updateBox : (row: number, col: number) => void;
    isHidden?: boolean;
}

export const Box: React.FC<IBox> = ({ isGreen, updateBox, row, col, isHidden }) => {

    return (
        <div 
            style={{
                width: "100px",
                height: "100px",
                border: "1px solid black",
                display: "inline-block",
                backgroundColor: isGreen ? "green" : "initial",
                visibility: isHidden ? "hidden" : "initial",
                padding: "5px"
            }}
            onClick={() => updateBox(row, col)}
        />
    )
}