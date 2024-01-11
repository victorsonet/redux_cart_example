import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";

function Modal() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);

  if (isOpen) {
    return (
      <aside className="modal-container">
        <div className="modal">
          <h4>Remove all items from the shopping cart</h4>
          <div className="btn-container">
            <button
              type="button"
              className="btn confirm-btn"
              onClick={() => {
                dispatch(clearCart());
                dispatch(closeModal());
              }}
            >
              Confirm
            </button>
            <button
              type="button"
              className="btn clear-btn"
              onClick={() => dispatch(closeModal())}
            >
              Cancel
            </button>
          </div>
        </div>
      </aside>
    );
  }

  return;
}
export default Modal;
