import { FaEdit } from "react-icons/fa"
import { AiFillDelete } from "react-icons/ai"
import axios from "axios"
import EditTutorial from "./EditTutorial"
import { useState } from "react"
// const tutorials = [
//   {
//     id: 1,
//     title: "JS",
//     description: "JS is a programming language",
//   },
//   {
//     id: 2,
//     title: "React",
//     description: "JS library for UI design",
//   },
// ]

const TutorialList = ({ tutorials, getTutorials }) => {
  const [editTutorialInfo, setEditTutorialInfo] = useState({})


  const deleteTutorial = async (id) => {
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials"
    try {
      await axios.delete(`${BASE_URL}/${id}/`)
    } catch (error) {
      console.log(error)
    }
    getTutorials()
  }

  const editTutorial = async ( {["id"]:id, ["title"]:title, ["description"]:description} ) => {
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials"
    try {
      await axios.put(`${BASE_URL}/${id}/`, { title, description })
      console.log("worked");
    } catch (error) {
      console.log(error)
    }
    getTutorials()
  }

  return (
    <div className="container mt-4">
      <button onClick={()=>{
        
        editTutorial(editTutorialInfo)
      } }>push</button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { id, title, description } = item
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={20}
                    type="button"
                    className="me-2 text-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-tutor"
                    onClick={() =>
                      setEditTutorialInfo({id, title, description})
                    }
                  />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger "
                    onClick={() => deleteTutorial(id)}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <EditTutorial editTutorial={editTutorial} info={editTutorialInfo} getTutorials={getTutorials} />
    </div>
  )
}

export default TutorialList
