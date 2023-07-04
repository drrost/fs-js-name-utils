import React from 'react'
import {StringUtils} from "./lib";

const App = () => {
    return (
        <>
            <div>
                {'Strings: ' + StringUtils.uuid()}
            </div>
        </>
    )
}

export default App
