import Modal from 'react-modal';
import { useState } from 'react';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

// Modal.setAppElement('#yourAppElement');

const TestModal = () => {
    let subtitle;
    const [ mod, setmod ] = useState(false);
    return(
        <div className="home">
            {/* <div> */}
            {/* <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#modl">
            Launch static backdrop modal
            </button> */}
            <button type="button" onClick={ () => setmod(true) }>Modal</button>
            { mod && <h1>hello</h1> }
            {/* <div className="modal fade" id="modl" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Something
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div> */}
            <Modal
                isOpen={mod}
                onAfterOpen={ () => {subtitle.style.color = '#f00';} }
                onRequestClose={ () => setmod(false) }
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                {/* <h2>Hello</h2> */}
                <button onClick={ () => setmod(false) }>close</button>
                <div>I am a modal</div>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
        </div>
    );
}

export default TestModal ;