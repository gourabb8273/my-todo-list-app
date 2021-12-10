import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

/**
 * OPEN A MODAL
 */
function ModalDialog({
  shouldDisable,
  variant,
  modalName,
  modalBodyTitle,
  modalBodyDescription,
  modalCloseName,
  modalActionName,
  handleModalAction,
  modalBodyStyle,
  modalButtonStyle,
}) {
  const [show, setShow] = useState(false);

  /**
   * CLOSE THE MODAL
   */
  function handleClose() {
    setShow(false);
  }

  /**
   * OEPN THE MODAL
   */
  function handleShow() {
    setShow(true);
  }

  /**
   * CLOSE THE MODAL AND REMOVE ALL TASKS
   */
  function handleClearAndDestroy(e) {
    e.preventDefault();
    handleModalAction(e);
    handleClose();
  }

  return (
    <div className={modalBodyStyle}>
      <Button
        className={modalButtonStyle}
        disabled={!shouldDisable} //dya
        variant={variant}
        onClick={handleShow}
      >
        {modalName}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalBodyTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalBodyDescription}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {modalCloseName}
          </Button>
          <Button variant="danger" onClick={handleClearAndDestroy}>
            {modalActionName}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalDialog;
