import React from "react";
import { Button, Modal } from "semantic-ui-react";

function exampleReducer(state, action) {
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
        <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
            Dislike 👎🏼
          </Button>
          <Button positive onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
            I Like 👌🏼
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

export default ModalExampleDimmer;
