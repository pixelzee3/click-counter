import { useState } from "react";
import ClickButton from "./ClickButton";

const Content = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }
    
    return (
        <div className="content">
            <h2>Clicks: {count}</h2>
            <ClickButton handleClick={handleClick}/>
        </div>
    );
}
 
export default Content;