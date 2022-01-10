import { AiOutlineClose } from "react-icons/ai";

const LeaveGroup = ({ show, handleClose, groups, leaveGroup }) => {
    const showHideClassName = show ?  "modal display-block" : "modal display-none";
    
    const hasRoomsLeavable = () => {
        return (
            <div className={showHideClassName}>
                <section  className="list-model">
                <AiOutlineClose className="close-btn" onClick={handleClose}/>
                <h3>Groups Leavable</h3>
                    <ul>
                        {groups.map((group) => {
                            return (
                                <li className="group-item" key={group.groupId}>
                                    <p>{group.name}</p>
                                    <button onClick={() => leaveGroup(group.groupId)}>Leave</button>
                                </li>
                            )
                        })}
                    </ul>
                </section>
            </div>
        )
    }

    const noRooms = () => {
        return (
            <div className={showHideClassName}>
                <section  className="list-model">
                    <AiOutlineClose className="close-btn" onClick={handleClose}/>
                    <p>There are no rooms that you can leave.</p>
                </section>
            </div>
        )
    }

    return (
        <div>
            {groups === null ? noRooms() : hasRoomsLeavable()}
        </div>
    )
}

export default LeaveGroup