import React from 'react';
import { LaunchesQuery } from '../../generated/graphql';
import { Link } from 'react-router-dom';


interface Props {
    data: LaunchesQuery
}

const Launch: React.FC<Props> = ({ data }) => {
    const displayData = data.launches?.map((launch, i) => {
        return(
            <div key={launch?.flight_number} className='launch-box'>
                <div className='launch-margin'>
                    <div className='launch-mission'>
                        <span className='sp-one'>{`${launch?.flight_number}`}</span>
                        <Link to={`launch/${launch?.flight_number}`}>
                            <span className='sp-two'>Mission: {launch?.mission_name}</span>
                        </Link>
                    </div>
                    <div className='launch-site'>
                        <span className='sp-one'>LaunchSite: </span><span>{launch?.launch_site?.site_name}</span>
                    </div>
                </div>
            </div>
        )
    })
}