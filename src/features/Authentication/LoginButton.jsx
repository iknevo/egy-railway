import { HiOutlineLogin } from "react-icons/hi";
import Modal from "../../ui/Modal";
import Auth from "./Auth";

export default function LoginButton() {
  return (
    <Modal>
      <Modal.Open opens="auth">
        <button className="flex cursor-pointer items-center gap-2 rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 font-semibold text-white">
          <span className="font-semibold">Login</span>
          <HiOutlineLogin className="rotate-180 text-2xl" />
        </button>
      </Modal.Open>
      <Modal.Window name="auth">
        <Auth />
      </Modal.Window>
    </Modal>
  );
}
