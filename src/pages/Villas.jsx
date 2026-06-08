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
            David is a formidable opponent in the tournament for a multitude of reasons. His calm and strategic approach to the game allows him to plan ahead and make calculated moves. 
            </p>
            <p className='mt-4 text-md text-yellow-200'>
            He has a knack for forming alliances and then breaking them at the most opportune moment, earning him the nickname "The Terminator". David's ability to read his opponents and adapt his strategy accordingly makes him a dangerous adversary.
            </p>
            <p className='mt-4 text-md text-yellow-200'>
                There is, however, a potential weakness in David's game. His tendency to overthink and analyze every move can sometimes lead to missed opportunities or hesitation at critical moments. As his opponent, you can exploit this by applying pressure at unexpected times.
            </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Villas