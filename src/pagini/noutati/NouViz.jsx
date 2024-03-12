import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const NouViz = ({ children }) => {
    const location = useLocation();
    const [showNoutati, setShowNoutati] = useState(false)
    useEffect(() => {
        if (location.pathname === '/acasă') {
            setShowNoutati(true)
        } else {
            setShowNoutati(false)
        }
    }, [location])
    
    return (
        <div>{showNoutati && children }</div>
    )
}
export default NouViz