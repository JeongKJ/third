import { useState } from 'react';



export default function Check({ reservetime, open, lastId, title, place, list, movie, number, onAdd }) {
                    const adddata =
                    {
                        id: lastId + 1,
                        movieName: title,
                        cinemaName: place,
                        movieDate: reservetime,
                        movieTime: list,
                        personNumber: number,
                        moviePoster: movie
                }
    const [dropdown, setDropdown] = useState(false);
       if (open === false) {
        return null;
       }
       else {
           return (
               <button className='submit' type='submit' onClick={() => {
                    setDropdown(!false);

                    if (dropdown !== false) {
                    document.querySelector('#lastpage').style.display = 'block';
                    document.querySelector('.submit').style.display = 'none';
                    document.querySelector('#thirdwrap').style.display = 'none';
                    document.querySelector('#check').style.display = 'block';
                    onAdd(adddata);
                   console.log(adddata);
                   alert('예매완료');
                   
                    }
            }}>예약완료</button> 
           )
    //            function formadd() {
               
            
    // }
    } 

}
