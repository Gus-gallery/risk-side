import { Link } from 'react-router-dom'

const Villas = () => {
  return (
    <div className="p-8">
        <Link to="/" className='text-sm text-gray-500 hover:text-yellow-300 py-4'>
            Go back
        </Link>
    <div className="flex items-left mt-10 justify-left flex-col text-yellow-400">
        <h1 className="text-4xl">Villas Højholt</h1>
        <h2>aka. "Zacharias el Revolution"</h2>

        <div className='flex flex-col md:flex-row items-start gap-8 mt-8'>
            <div className='w-full md:w-300'>
                <img src="/images/villas.png" alt="Villas" className="mt-4 border border-neutral-600 rounded-md" />
            </div>
            <div>
            <p className='mt-4 text-md text-yellow-200'>
            Villas is a dangerous opponent, partly because of his patience and ability to read the game. He is a master of timing, often waiting for the perfect moment to strike. 
                        </p>
            <p className='mt-4 text-md text-yellow-200'>
            He works patiently, building armies in corners of the world, and has nothing against being the underdog. He is a master of the long game, and can often outlast his opponents by playing defensively and waiting for them to make mistakes, which he utilizes to his own advantage.
            </p>
            <p className='mt-4 text-md text-yellow-200'>
                The potential weakness in Villas' game is his tendency to be too patient and wait for the perfect moment to strike. This can sometimes lead to hesitation at critical moments. As his opponent, you can exploit this by forcing him to make quick decisions, and acting in unexpected ways to throw him off his game.
            </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Villas