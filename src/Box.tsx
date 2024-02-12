import { useState } from "react";

interface IBox {
    hidden?: boolean;
    isGreen: number | boolean;
    coordinate: (boolean | number)[];
    setBox? :React.Dispatch<React.SetStateAction<(number | boolean)[][][]>>;
    box? : (number | boolean)[][][];
}

export const Box: React.FC<IBox> = ({ hidden, isGreen, setBox, box, coordinate }) => {

    // const [isGreen, setIsGreen] = useState<boolean>(false);

    const clickBox = () => {
        console.log("clicked");
        box[coordinate[0]][coordinate[1]]
        setBox()
    }

    return (
        <div 
            style={{ width: "100px", height: "100px", border: "1px solid black", display: "inline-block", visibility: hidden ? "hidden" : "initial", backgroundColor: isGreen ? "green" : "initial" }}
            onClick={clickBox}
        >Hello</div>
    )
}