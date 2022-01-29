import React from "react";
// Import the required styles from the semantic UI section
import { Button, Modal } from "semantic-ui-react";

function exampleReducer(state, action) {
  // To open and close this modal, let's write a switch case condition 
  // to see and control the opening and closing of this modal.
  switch (action.type) {
    case "OPEN_MODAL":
      return { open: true, dimmer: action.dimmer };
    case "CLOSE_MODAL":
      return { open: false };
    default:
      throw new Error();
  }
}

function ModalExampleDimmer() {
  // Determine the modal status
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  });
  const { open, dimmer } = state;

  return (
    // I use React Fragment instead of Div to have a harmless
    // deconstruction bit in the semantic-UI code ...
    <>
      {/* Everything starts from this button, by clicking on this 
    button, a modal will appear and you can continue working ... */}
      <Button
        onClick={() => dispatch({ type: "OPEN_MODAL", dimmer: "blurring" })}
      >
        Click me !
      </Button>
      {/* Modal container, all the contents of the modal project are placed 
      inside this tag and the modal box itself is styled in this section. */}
      <Modal
        dimmer={dimmer}
        open={open}
        onClose={() => dispatch({ type: "CLOSE_MODAL" })}
      >
        {/* title */}
        <Modal.Header>
          {" "}
          💻 Did you like this modal and are you satisfied with my coding?
        </Modal.Header>
        {/* Description, be sure to read this section to get to know me better. */}
        <Modal.Content>
          Im Ali Akbar Zohour, I am a front programmer (of course, I also have
          work experience in the DevOps section). I am always learning new
          things and I like to share my knowledge with others. I designed this
          modal as a mini coding project to present to you so that you can get
          acquainted with my coding. I am waiting for your answer ...
        </Modal.Content>
        {/* Button box, in this section, the continuation of this modal is done, 
        if you click on any of these buttons, the modal will disappear 
        (state codes are at the top of this page) */}
        <Modal.Actions>
          {/* If you do not like this modal and you are not with me, click on this button (in your browser, of course) */}
          <Button negative onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
            Dislike 👎🏼
          </Button>
          {/* If you are satisfied with the coding and design of this modal and you are happy to know me, click on this button */}
          <Button positive onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
            I Like 👌🏼
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

export default ModalExampleDimmer;
