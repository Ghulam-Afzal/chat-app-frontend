

const GroupPanel = ({ username, groups, getGroupMessages, handleOpen, handleOpen2, handleOpen3 }) => {
    return (
        <div className="left">
            <h1>User: {username}</h1>
            <h3>Groups</h3>
            <ul>
                {groups.map((group) => {
                    return (
                        <li key={group.id}>
                            <button onClick={() => getGroupMessages(group.id)}>{group.name}</button>
                        </li>
                    )
                })}
            </ul>
            <button onClick={handleOpen}>Create Group</button>
            <button onClick={handleOpen2}>Join Group</button>
            <button onClick={handleOpen3}>Leave Group</button>
          </div>
    )   
}

export default GroupPanel