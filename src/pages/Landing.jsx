import BilledLinks from "../components/BilledLinks"

const Landing = () => {
  return (
    <>
    <div className="text-left text-lg p-4 px-8 mt-12 md:px-48 font-bold">
     <h1 className="text-2xl">
      The Official Risk Tournament of World Domination
     </h1>
     <h2 className="font-regular text-md">
      2026 Edition
     </h2>

     <p className="mt-12 font-regular text-md text-primary mb-8">
      You have been granted access to a secret site, 
      containing information about the upcoming Risk Tournament of World Domination. 
      This is a prestigious event where players compete for global supremacy. 
      The tournament will feature alcohol, food, strategic alliances, and thrilling battles as participants compete for the title of <span className="text-secondary font-bold"> Risk World Champion of 2026. </span> 
     </p>

     <p className="mt-12 font-regular text-md text-primary mb-8">
      Use this once in a lifetime chance to read up on your opponents, and prepare for a glorious victory.
     </p>
     </div>
      <BilledLinks />

      <p className="text-center text-md p-4 px-8 mt-12 mb-12 md:px-48 font-bold text-primary">
      Good luck, and may the best player win.
      </p>
    </>
  )
}

export default Landing