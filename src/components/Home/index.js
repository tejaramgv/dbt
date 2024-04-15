// import {useState, useEffect} from 'react'
// import {Link} from 'react-router-dom'
// import Loader from 'react-loader-spinner'

// const Home = () => {
//   const [data, setData] = useState([])

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch('https://apis.ccbp.in/ipl')
//       const dat = await res.json()
//       if (res.ok) {
//         setData(dat.teams)
//         console.log(dat)
//       } else {
//         console.log('wrong')
//       }
//     }
//     fetchData()
//   }, [])

//   return (
//     <div data-testid="loader">
//       {data.length === 0 ? (
//         <div data-testid="loader">
//           <Loader
//             data-testid="loader"
//             type="TailSpin"
//             color="#00BFFF"
//             height={100}
//             width={100}
//           />
//         </div>
//       ) : (
//         <ul>
//           <h1>IPL Dashboard</h1>
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
//             alt="ipl logo"
//           />
//           {data.map(each => (
//             <li key={each.id}>
//               <Link to={`/team-matches/${each.id}`}>
//                 {' '}
//                 <img src={each.team_image_url} alt={each.name} />
//                 <p>{each.name}</p>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }
// export default Home

import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://apis.ccbp.in/ipl')
        const dat = await res.json()
        if (res.ok) {
          setData(dat.teams)
          console.log(dat)
        } else {
          console.log('Fetch Error')
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div data-testid="loader">
      {data.length === 0 ? (
        <div data-testid="loader">
          <Loader
            data-testid="loader"
            type="TailSpin"
            color="#00BFFF"
            height={100}
            width={100}
          />
        </div>
      ) : (
        <ul>
          <h1>IPL Dashboard</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          {data.map(each => (
            <li key={each.id}>
              <Link to={`/team-matches/${each.id}`}>
                <img src={each.team_image_url} alt={each.name} />
                <p>{each.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Home
