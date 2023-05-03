import React from "react";

const Wrapper = ({children}) => {
    return <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '100%', margin: '0 auto', padding: '20px', justifyContent: 'center', alignItems: 'center'}}>
        {children}
    </div>
}

export default Wrapper;