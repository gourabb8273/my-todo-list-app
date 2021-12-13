import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

/**
 *  REUSEABLE MODAL COMPONENT
 */
function ModalDialog({
  shouldModalEnable,
  modalVariant,
  modalName,
  modalBodyTitle,
  modalBodyDescription,
  modalCloseName,
  modalActionName,
  handleModalAction,
  modalBodyStyle,
  modalButtonStyle,
}) {
  const [showModal, setShowModal] = useState(false);

  /**
   * CLOSE THE MODAL
   */
  function handleCloseModal() {
    setShowModal(false);
  }

  /**
   * OEPN THE MODAL
   */
  function handleShowModal() {
    setShowModal(true);
  }

  /**
   * CLOSE THE MODAL AND REMOVE ALL TASKS
   */
  function handleClearAndDestroy(e) {
    e.preventDefault();
    handleModalAction(e);
    handleCloseModal();
  }

  return (
    <div className={modalBodyStyle}>
      <Button
        className={modalButtonStyle}
        disabled={!shouldModalEnable}
        variant={modalVariant}
        onClick={handleShowModal}
      >
        {modalName}
      </Button>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalBodyTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalBodyDescription}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
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
