const JoinGroup = ({ allGroups, userGroups, handleJoin }) => {
    console.log(userGroups)
    const temp = allGroups.filter((group) => !userGroups.find(({ groupId }) => group.groupId === groupId))
    return (
        <div>
            {console.log(temp)}
            {temp.map((group) => {
                return (
                   <li key={group.id}>
                       <button onClick={() => handleJoin(group.groupId)}>{group.name}</button>
                   </li>
                )
            })}
        </div>
    )
}

export default JoinGroup