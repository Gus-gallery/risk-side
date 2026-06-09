import { Link } from 'react-router-dom'

const Niko = () => {
  return (
    <div className="p-8">
        <Link to="/" className='text-sm text-gray-500 hover:text-sky-300 py-4'>
            Go back
        </Link>
    <div className="flex items-left mt-10 justify-left flex-col text-sky-500">
        <h1 className="text-4xl">Nikolas Lindgaard</h1>
        <h2>aka. "Barcarocks202"</h2>

        <div className='flex flex-col md:flex-row items-start gap-8 mt-8'>
            <div className='w-full md:w-300'>
                <img src="/images/niko.png" alt="Niko" className="mt-4 border border-neutral-600 rounded-md" />
            </div>
            <div>
            <p className='mt-4 text-md text-sky-200'>
            Nikolas has a unique playstyle that combines aggressive expansion with strategic diplomacy. He is known for his ability to quickly adapt to changing circumstances and for his willingness to take risks when necessary. 
            </p>
            <p className='mt-4 text-md text-sky-200'>
            He is patient and methodical in his approach to the game, but he can also be aggressive when the situation calls for it. He is not afraid to make bold moves and can be unpredictable in his gameplay, which often changes up the game completely. 
             </p>
            <p className='mt-4 text-md text-sky-200'>
            However, his tendency to take risks can sometimes lead to overextension and vulnerability to counterattacks. As his opponent, it is important to be aware of his playstyle and to try to hit him when he is at his weakest, while also being prepared for attacks from unexpected angles. 
            </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Niko