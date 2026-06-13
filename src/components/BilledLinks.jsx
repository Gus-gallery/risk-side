import { Link } from 'react-router-dom'

const BilledLinks = () => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-5 gap-8 mt-2 p-8 px-8 md:px-48 bg-neutral-900 border-t border-b border-neutral-950 shadow-md">
      <Link to="/david" className="hover:scale-110 hover:shadow-lg transition-all ease-in-out duration-300 hover:cursor-pointer border border-red-300">
        <img src="/risk-side/images/david.png" alt="David" className="w-full h-auto shadow-md" />
      </Link>
      <Link to="/villas" className="hover:scale-110 hover:shadow-lg transition-all ease-in-out duration-300 hover:cursor-pointer border border-yellow-200">
        <img src="/risk-side/images/villas.png" alt="Villas" className="w-full h-auto shadow-md" />
      </Link>
      <Link to="/gulle" className="hover:scale-110 hover:shadow-lg transition-all ease-in-out duration-300 hover:cursor-pointer border border-primary">
        <img src="/risk-side/images/gulle.png" alt="Gulle" className="w-full h-auto shadow-md" />
      </Link>
      <Link to="/niko" className="hover:scale-110 hover:shadow-lg transition-all ease-in-out duration-300 hover:cursor-pointer border border-sky-200">
        <img src="/risk-side/images/niko.png" alt="Niko" className="w-full h-auto shadow-md" />
      </Link>
      <Link to="/eli" className="hover:scale-110 hover:shadow-lg transition-all ease-in-out duration-300 hover:cursor-pointer border border-pink-300">
        <img src="/risk-side/images/eli.png" alt="Eli" className="w-full h-auto shadow-md" />
      </Link>
    </div>
  )
}

export default BilledLinks