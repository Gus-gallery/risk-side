import BilledLinks from "../components/BilledLinks"
import { useEffect, useRef } from "react"

const Landing = () => {
  const h1Ref = useRef(null)
  const finalText = "The Official Risk Tournament of World Domination"
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&"

  useEffect(() => {
    const el = h1Ref.current
    let iteration = 0
    const totalIterations = finalText.length * 3

    const interval = setInterval(() => {
      el.innerText = finalText
        .split("")
        .map((char, index) => {
          if (char === " ") return " "
          if (index < iteration / 3) return finalText[index]
          return chars[Math.floor(Math.random() * chars.length)]
        })
        .join("")

      iteration++
      if (iteration > totalIterations) clearInterval(interval)
    }, 40)

    return () => clearInterval(interval)
  }, [])


  return (
    <>
    <div className="text-left text-lg p-4 px-8 mt-12 md:px-48 font-bold">
     <h1 ref={h1Ref} className="text-2xl">
      {finalText}
     </h1>
     <h2 className="font-regular text-md">
      2026 Edition
     </h2>

     <p className="mt-12 font-regular text-md text-primary mb-8">
      You have been granted access to a secret site, 
      containing information about the upcoming Risk Tournament of World Domination. 
      The competition will feature alcohol, food, strategic alliances, and thrilling wars as participants battle for the title of <span className="text-secondary font-bold"> Risk World Champion of 2026. </span> 
     </p>

     <p className="mt-12 font-regular text-md text-primary">
      Use this once in a lifetime opportunity to read up on your opponents, and plan ahead for a glorious victory.
     </p>

     <p className="mt-12">
      Press icon to inspect your opponent
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