import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import {
  fetchActivities,
  fetchCategories,
  addActivity,
  deleteActivity,
  editActivityById,
  addCategory,
  markActivity
} from "../store/action/actiontype";
const HomeSection = () => {
  const activities = useSelector((state) => state.activityReducer.activities);
  const categories = useSelector((state) => state.categoryReducer.categories);
  const Loading = useSelector((state) => state.activityReducer.Loading);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [edit, setEdit] = useState(false);
  const [activityId, setActivityId] = useState("");
  const navigate=useNavigate()
  function onSubmit(event) {
    event.preventDefault();
    const newActivity = {
      name: name,
      category: category,
    };
    if (!edit) {
      dispatch(addActivity(newActivity)).then(() => {
        setName("");
        setCategory("");
      });
    } else {
      // console.log(detailActivity)
      dispatch(editActivityById(newActivity, activityId)).then(() => {
        setName("");
        setCategory("");
      });
      setEdit(false);
    }
  }
  function onSubmitCategory(event) {
    const newCategory={
      categoryName:categoryName
    }
    event.preventDefault();
    dispatch(addCategory(newCategory)).then(() => {
      setCategoryName("");
    });
  }
  function deleteActivitybyId(event, id) {
    event.preventDefault();
    dispatch(deleteActivity(id));
  }
  function changeStatusTask(id){
    // event.preventDefault();
    console.log(id)
    document.getElementById(id).style.textDecoration = "line-through";
    dispatch(markActivity(id))
  }
  function logOut(event){
    event.preventDefault();
    localStorage.clear()
    navigate("/login")
  }
  useEffect(() => {
    dispatch(fetchActivities());
  }, []);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="container-home">
      <div className="vector-1-home"></div>
      {Loading ? (
        <div className="loader" style={{ marginLeft: 700 }}></div>
      ) : (
        <>
          <div className="category-section">
            <h4 className="category-task-title">All Tasks</h4>
            <div className="category-list">
            {categories.map((category, index) => (
                <p >{category.name}</p>
            ))}
            </div>
            <form onSubmit={onSubmitCategory}>
              <input type="text" className="add-new-category-section" value={categoryName} onChange={(event) => {
                    setCategoryName(event.target.value);
                  }} placeholder="add new category" />
              <button className="submit-new-category">Submit</button>
            </form>
          </div>
          <div className="activity-section">
            <div className="all-tasks">All Tasks</div>
            <form onSubmit={onSubmit}>
              <div>
                <input
                  type="text"
                  className="add-new-task"
                  placeholder="Add or Edit Task"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
              <div>
                <select
                  className="add-new-category"
                  value={category}
                  onChange={(event) => {
                    setCategory(event.target.value);
                  }}
                >
                  <option selected="true" value="" disabled>
                    Select Category
                  </option>
                  {categories.map((category, index) => (
                    <option value={category.name}>{category.name}</option>
                  ))}
                </select>
              </div>
              <button className="submit-new-task">
                <p className="text-submit-new-task">Submit</p>
              </button>
            </form>
            <div className="container-activities">
              {activities.map((activity, index) => (
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <label
                    className="activities-list-container"
                    key={activity._id}
                  >
                    {activity.status ? (
                      <>
                      <span style={{textDecoration:"line-through"}}>{activity.name}</span>
                      <input checked type="checkbox" onClick={(event)=>{
                        changeStatusTask(activity._id)
                      }} />
                      </>
                    ):(
                      <span id={activity._id}>{activity.name}</span>
                    )}
                    <input type="checkbox" onClick={(event)=>{
                      changeStatusTask(activity._id)
                    }} />
                    <span className="checkmark"></span>
                  </label>
                  <div
                  className={activity.category}
                    style={{
                      marginLeft: "10px",
                      width: "101px",
                      height: "30px",
                      borderRadius: "40px",
                      backgroundColor: "green",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      fontSize: 13,
                      lineHeight: "16px",
                      justifyContent: "center",
                    }}
                  >
                    {" "}
                    {activity.category}
                  </div>
                  <p
                    onClick={() => {
                      setEdit(true);
                      setActivityId(activity._id);
                      setName(activity.name);
                      setCategory(activity.category);
                    }}
                    style={{
                      marginLeft: "650px",
                      cursor: "pointer",
                      position: "absolute",
                    }}
                  >
                    Edit
                  </p>
                  <p
                    onClick={(event) => {
                      deleteActivitybyId(event, activity._id);
                    }}
                    style={{
                      marginLeft: "700px",
                      cursor: "pointer",
                      position: "absolute",
                    }}
                  >
                    Delete
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      <button className="logOut" onClick={logOut}><p className="text-log-out">Log Out</p></button>
      <div className="vector-2-home"></div>
    </div>
  );
};
export default HomeSection;
