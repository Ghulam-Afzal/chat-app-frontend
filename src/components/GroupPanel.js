

const GroupPanel = ({ username, groups, getGroupMessages, handleOpen, handleOpen2, handleOpen3 }) => {
    return (
        <div className="left">
            <h1>User: {username}</h1>
            <h3>Groups</h3>
            <ul className="group-btn-container">
                {groups.map((group) => {
                    return (
                        <li key={group.id}>
                            <button className="group-btn" onClick={() => getGroupMessages(group.id)}>{group.name}</button>
                        </li>
                    )
                })}
            </ul>
            <div className="group-btn-cont">
                <button className="group-btn" onClick={handleOpen}>Create Group</button>
                <button className="group-btn" onClick={handleOpen2}>Join Group</button>
                <button className="group-btn" onClick={handleOpen3}>Leave Group</button>
            </div>
          </div>
    )   
}

export default GroupPanel