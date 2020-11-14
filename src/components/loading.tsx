import React from 'react';
import { CircularProgress } from '@material-ui/core';

function Loading(){
    return(
        <div>
            <CircularProgress />
            <h6>Loading...</h6>
        </div>
    )
}
export default Loading;