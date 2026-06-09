import { Link } from 'react-router-dom'

const Eli = () => {
  return (
    <div className="p-8">
        <Link to="/" className='text-sm text-gray-500 hover:text-pink-300 py-4'>
            Go back
        </Link>
    <div className="flex items-left mt-10 justify-left flex-col text-pink-600">
        <h1 className="text-4xl">Elias Molberg</h1>
        <h2>aka. "Ninja Hudi"</h2>

        <div className='flex flex-col md:flex-row items-start gap-8 mt-8'>
            <div className='w-full md:w-300'>
                <img src="/images/eli.png" alt="Eli" className="mt-4 border border-neutral-600 rounded-md" />
            </div>
            <div>
            <p className='mt-4 text-md text-pink-300'>
            Elias is an extremely dangerous adversary, as he strikes from the shadows and chooses his targets in unexpected ways. He is not afraid to attack stronger players, and often comes out on top, earning him the nickname "Ninja Hudi". 
            </p>
            <p className='mt-4 text-md text-pink-300'>
            Elias is a master of deception and misdirection, and uses unpredictability to his advantage. Other players might not understand his strategies, but it is clear that he is a force to be reckoned with. 
            </p>
            <p className='mt-4 text-md text-pink-300'>
            He is a wild card, not to be underestimated, and can strike at any moment, often when his opponents least wish to engage in battle. However, Elias does not always appear in the tournament, making him a bit of an enigma. 
            </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Eli