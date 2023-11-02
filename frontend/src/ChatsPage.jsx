import { MultiChatSocket, MultiChatWindow, useMultiChatLogic,  } from 'react-chat-engine-advanced'
// import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'a26a3fc5-58ae-4448-b5aa-ad54bc441ccc',
        props.user.username, 
        props.user.secret
    );
    
    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
        </div>

        // <div style={{ height: '100vh' }}>
        //     <PrettyChatWindow 
        //         projectId='a26a3fc5-58ae-4448-b5aa-ad54bc441ccc'
        //         username={props.user.username}
        //         secret={props.user.secret}
        //         style={{ height: '100%' }}
        //     />
        // </div>
    );
}

export default ChatsPage;