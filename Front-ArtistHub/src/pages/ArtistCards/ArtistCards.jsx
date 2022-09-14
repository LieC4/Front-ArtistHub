import { useEffect, useState } from "react";
import ArtistCard from "../../components/ArtistCard/ArtistCard"
import SearchBar from "../../components/SearchBar/SearchBar";
import { API } from "../../services/API";
import "./ArtistCards.css";

const Artists = () => {

const [allUsers, setallUsers] = useState([]);

const [filterUser, setfilterUser] = useState("");

const filteredUsers = allUsers.filter((user) => 
  user.username.toLowerCase().includes(filterUser)||
  user.userType.toLowerCase().includes(filterUser)
)

const getAllUsers = async () => {
API.get("/users").then((res)=> {
  setallUsers(res.data.users)
  console.log(res.data.users);
})
}

useEffect(() => {
getAllUsers();
},[])

return (
  <section>
  <SearchBar setfilterUser={setfilterUser} />
  <div className="users_container">
    {allUsers.length ? (
      filteredUsers.map((user) => <ArtistCard user={user} key={user._id} />)
    ) : (
      <p>Loading Artists...</p>
    )}
  </div>
</section>
)


}

export default Artists;
  