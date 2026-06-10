import BilledLinks from "../components/BilledLinks"
import { useEffect, useRef, useState } from "react"

const Landing = () => {
  const h1Ref = useRef(null)
  const finalText = "The Official Risk Tournament of World Domination"
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&"

   // Sæt din dato her
   const targetDate = new Date("2026-12-05T13:00:00")

   const [timeLeft, setTimeLeft] = useState(getTimeLeft())
 
   function getTimeLeft() {
     const diff = targetDate - new Date()
     if (diff <= 0) return null
     return {
       days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
       hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
       minutes: Math.floor((diff / (1000 * 60)) % 60),
       seconds: Math.floor((diff / 1000) % 60),
     }
   }
 
   useEffect(() => {
     const timer = setInterval(() => {
       setTimeLeft(getTimeLeft())
     }, 1000)
     return () => clearInterval(timer)
   }, [])

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

    <div className="mt-12 flex gap-8 text-center">
          {timeLeft ? (
            ["days", "hours", "minutes", "seconds"].map((unit) => (
              <div key={unit} className="flex flex-col">
                <span className="text-4xl font-bold text-secondary">
                  {String(timeLeft[unit]).padStart(2, "0")}
                </span>
                <span className="text-sm text-primary uppercase">{unit}</span>
              </div>
            ))
          ) : (
            <p className="text-secondary font-bold text-xl">The tournament has begun!</p>
          )}
        </div>

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