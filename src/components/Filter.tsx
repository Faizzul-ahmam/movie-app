import {useContext, useState } from "react"
import { MoviesContext } from "../context/movie.context"

const sort_by = [
    {id:1 ,name:'Release Date', value:'primary_release_date.desc'},
    {id:2 ,name:'Title', value:'title.asc'},
    {id:3 ,name:'Rating', value:'vote_average.desc'}
]


export const Filter = () =>
{
    const {updateParam} = useContext(MoviesContext)
    const [,setSortBy] = useState('')
    

    function setSelectedSortBy(event:any){
        event.preventDefault()
        let selectedSortBy = event.target.value
        setSortBy(selectedSortBy)
        updateParam(selectedSortBy)
    }

    return(
        <div className="filter">
            <h3>Sort by :</h3> &nbsp; &nbsp;  <select name="filter-selector" id="filter" onChange={setSelectedSortBy}>
            {sort_by.map((item) =>
                <option key={item.id} value={item.value}>{item.name}</option>
            )}
            </select>
        </div>
        );

}