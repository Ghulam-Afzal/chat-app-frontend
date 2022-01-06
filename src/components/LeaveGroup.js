const LeaveGroup = ({ groups, leaveGroup }) => {
    return (
        <div>
            {groups.map((group) => {
                return (
                    <li key={group.groupId}>
                        <button onClick={() => leaveGroup(group.groupId)}>{group.name}</button>
                    </li>
                )
            })}
        </div>
    )
}

export default LeaveGroup