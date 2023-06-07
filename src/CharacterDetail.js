import { useLocation } from "react-router-dom"


export default function UserDetail() {

  const location = useLocation()
  const state = location.state


  return (
    <div>
      <h4>{state.name}</h4>
      <img
        height="500px"
        src={''}
      ></img>
      <p>House</p>
    </div>
  )
}
