import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import "./clearAllModal.css";

/**
 * OPEN A MODAL BEFORE REMOVING ELEMENT
 */
function ClearAllModal({ handleClearAll, isListEmpty }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /**
   * CLOSE AND REMOVE ALL TASKS
   */
  function handleClearAndDestroy(e) {
    e.preventDefault();
    handleClearAll(e);
    handleClose();
  }

  return (
    <div className="todolist-clear">
      <Button
        className="todolist-clear__button"
        disabled={!isListEmpty}
        variant="danger"
        onClick={handleShow}
      >
        Clear All
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Do you really want to clear all?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This will remove all your tasks</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClearAndDestroy}>
            Clear All
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ClearAllModal;
