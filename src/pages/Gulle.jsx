import { Link } from 'react-router-dom'

const Gulle = () => {
  return (
    <div className="p-8">
        <Link to="/" className='text-sm text-gray-500 hover:text-primary py-4'>
            Go back
        </Link>
    <div className="flex items-left mt-10 justify-left flex-col">
        <h1 className="text-4xl">Gustav Werdelin</h1>
        <h2>aka. "Biscuits and tea"</h2>

        <div className='flex flex-col md:flex-row items-start gap-8 mt-8'>
            <div className='w-full md:w-300'>
                <img src="/images/gulle.png" alt="Gulle" className="mt-4 border border-neutral-600 rounded-md" />
            </div>
            <div>
            <p className='mt-4 text-md text-primary'>
            Gustav is a challenging opponent, as he is known to pick fights against the stronger players in the tournament. He is not afraid to take risks and can be unpredictable in his gameplay, which can catch opponents off guard. 
            </p>
            <p className='mt-4 text-md text-primary'>
            He can be a bit of a wildcard, and can sometimes make bold moves that pay off in unexpected ways. However, his tendency to pick fights with strong players can also be a weakness, as it can lead to him being targeted by multiple opponents at once.
            </p>
            <p className='mt-4 text-md text-primary'>
               To counter Gustav effectively, it is important to be aware of his tendencies and to try to predict his moves. It may also be helpful to form alliances with other players to take him down, as he rarely creates alliances and can be vulnerable to coordinated attacks. 
            </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Gulle