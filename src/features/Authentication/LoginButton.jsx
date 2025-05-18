import { HiOutlineLogin } from "react-icons/hi";
import Modal from "../../ui/Modal";
import Auth from "./Auth";

export default function LoginButton() {
  return (
    <Modal>
      <Modal.Open opens="auth">
        <button className="flex cursor-pointer items-center gap-2 rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 px-3 py-1 font-semibold text-white md:px-4 md:py-2">
          <span className="font-semibold">Login</span>
          <HiOutlineLogin className="hidden rotate-180 text-2xl md:block" />
        </button>
      </Modal.Open>
      <Modal.Window name="auth">
        <div className="pt-10 md:pt-0">
          <Auth />
        </div>
      </Modal.Window>
    </Modal>
  );
}
