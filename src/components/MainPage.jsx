import React, {useEffect, useState} from "react";
import axios from "axios";

const MainPage = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [games, setGames] = useState([]);


    const fetchData = async () => {
        setLoading(true);
        try{
            const response = await axios.get('https://www.cheapshark.com/api/1.0/deals', {})
            setGames(response.data);
            setLoading(false);
        }catch(err){
            setError("Błąd podczas ładowania promocji: " + err);
        }
    }
    let i = 1
    let j = 0
    let x;
    for (x of games){
        for(i=1+j; i < games.length; i++){
            if (x.title === games[i].title){
                games.splice(i,1);
            }
        }
        j++

    }

    useEffect(() => {
        fetchData();
    },[])



    return (
        <div className="container mx-auto mt-7 ">
            <p className="text-center font-bold font-black text-2xl font-mono">Latest promotions!</p>

            {error && <p>{error}</p>}
            {loading && <p>⏳ Ładowanie wyników...</p>}
            {!loading && games.length === 0 && <p>😕 Brak promocji.</p>}

            <div className="container grid grid-cols-3 mt-6 items-center">
                {games.map((game, index) => (
                    <div key={index} className="mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg w-full" src={game.thumb} alt=""/>
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{game.title}</h5>
                            </a>
                            <p className="mb-3 font-bold text-xl text-gray-700 dark:text-gray-400">{game.salePrice} $</p>
                            <p className="mb-3 font-mono">old price: {game.normalPrice} $</p>
                            <a href="#"
                               className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                More info
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>

                        {/*<p>{game.title}</p>*/}
                        {/*<p>{game.salePrice}</p>*/}
                        {/*<p>{game.normalPrice}</p>*/}
                        {/*<img src={game.thumb} />*/}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default MainPage