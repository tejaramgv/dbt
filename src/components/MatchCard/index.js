// // Write your code here
// import {useEffect, useState} from 'react'
// import {useParams} from 'react-router-dom'
// import Loader from 'react-loader-spinner'

// const MatchCard = () => {
//   const {id} = useParams()
//   const [data, setData] = useState([])

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch(`https://apis.ccbp.in/ipl/${id}`)
//       const dat = await res.json()
//       if (res.ok) {
//         setData(dat)
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
//         <>
//           <img src={data.team_banner_url} alt="team banner" />
//           <h1>Latest Matches</h1>
//           <img
//             src={data.latest_match_details.competing_team_logo}
//             alt={`latest match ${data.latest_match_details.competing_team}`}
//             data-testid="latest-match-image"
//           />
//           <p>{data.latest_match_details.umpires}</p>
//           <p>{data.latest_match_details.result}</p>
//           <p>{data.latest_match_details.man_of_the_match}</p>
//           <p>{data.latest_match_details.id}</p>
//           <p>{data.latest_match_details.date}</p>
//           <p>{data.latest_match_details.venue}</p>
//           <p>{data.latest_match_details.competing_team}</p>
//           <p>{data.latest_match_details.first_innings}</p>
//           <p>{data.latest_match_details.second_innings}</p>
//           <p>{data.latest_match_details.match_status}</p>
//           <ul>
//             {data.recent_matches.map(each => (
//               <li key={each.id}>
//                 <img
//                   src={each.competing_team_logo}
//                   alt={`competing team ${each.competing_team}`}
//                 />
//                 <p>{each.result}</p>
//                 <p>{each.competing_team}</p>
//                 <p>{each.match_status}</p>
//               </li>
//             ))}
//           </ul>
//         </>
//       )}
//     </div>
//   )
// }
// export default MatchCard

import React, {useEffect, useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import Loader from 'react-loader-spinner'

const MatchCard = () => {
  const {id} = useParams()
  const [data, setData] = useState([])
  const history = useHistory()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://apis.ccbp.in/ipl/${id}`)
        const dat = await res.json()
        if (res.ok) {
          setData(dat)
          console.log(dat)
        } else {
          console.log('Fetch Error')
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [id])

  useEffect(() => {
    const handleBackNavigation = () => {
      history.push('/')
    }

    window.addEventListener('popstate', handleBackNavigation)

    return () => {
      window.removeEventListener('popstate', handleBackNavigation)
    }
  }, [history])

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
        <>
          <img src={data.team_banner_url} alt="team banner" />
          <h1>Latest Matches</h1>
          <img
            src={data.latest_match_details.competing_team_logo}
            alt={`latest match ${data.latest_match_details.competing_team}`}
            data-testid="latest-match-image"
          />
          <p>{data.latest_match_details.umpires}</p>
          <p>{data.latest_match_details.result}</p>
          <p>{data.latest_match_details.man_of_the_match}</p>
          <p>{data.latest_match_details.id}</p>
          <p>{data.latest_match_details.date}</p>
          <p>{data.latest_match_details.venue}</p>
          <p>{data.latest_match_details.competing_team}</p>
          <p>{data.latest_match_details.first_innings}</p>
          <p>{data.latest_match_details.second_innings}</p>
          <p>{data.latest_match_details.match_status}</p>
          <ul>
            {data.recent_matches.map(each => (
              <li key={each.id}>
                <img
                  src={each.competing_team_logo}
                  alt={`competing team ${each.competing_team}`}
                />
                <p>{each.result}</p>
                <p>{each.competing_team}</p>
                <p>{each.match_status}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default MatchCard
