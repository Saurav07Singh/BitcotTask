import React from 'react'
import Banner from './Banner'

import useAxiosFetch from '../hooks/useAxiosFetch'

const Series = ({name}) => {
    const {isLoading,data,error} = useAxiosFetch('series');
    const result= data.map(d=><div key={d.title} className='items'>
    <img className='item-img' src={d?.images["Poster Art"].url}/>
    <p>{d.title}</p>
</div>)
return (
<>
        <Banner name={name}/>
        {isLoading ? <p>Loading...</p>:""}
        {!isLoading && error ? <p>{error}</p>:""}
        {!isLoading && !error ?   <div className='item-img-container'>{result}</div>:""}
</>
)
}

export default Series