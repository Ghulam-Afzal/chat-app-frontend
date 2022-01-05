

const GroupPanel = ({ username, groups, handleCreate, handleJoin, handleLeave, getGroupMessages}) => {
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
            <button onClick={handleCreate}>Create Group</button>
            <button onClick={handleJoin}>Join Group</button>
            <button onClick={handleLeave}>Leave Group</button>
          </div>
    )
}

export default GroupPanel