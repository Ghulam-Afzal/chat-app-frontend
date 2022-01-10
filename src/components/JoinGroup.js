import { AiOutlineClose } from "react-icons/ai";

const JoinGroup = ({ show, handleClose, allGroups, userGroups, handleJoin }) => {
    const showHideClassName = show ?  "modal display-block" : "modal display-none";

    const temp = allGroups.filter((group) => !userGroups.find(({ groupId }) => group.groupId === groupId))
    return (
        <div className={showHideClassName}>
            <section  className="list-model">
            <AiOutlineClose className="close-btn" onClick={handleClose}/>
                <h3>Groups Joinable</h3>
                <ul>
                    {temp.map((group) => {
                        return (
                        <li className="group-item" key={group.id}>
                            <p>{group.name}</p>
                            <button onClick={() => handleJoin(group.groupId)}>Join</button>
                        </li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}

export default JoinGroup