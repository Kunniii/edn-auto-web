import { leave, logout } from "../utils/courseInteraction";

export default function Header() {
  return (
    <div className="flex flex-row justify-between px-10 mt-5 fixed top-0 left-0 right-0">
      <button
        onClick={leave}
        className="font-bold text-white bg-sky-500 px-2 py-1 rounded"
      >
        Back
      </button>
      <button
        onClick={logout}
        className="font-bold text-white bg-red-500 px-2 py-1 rounded"
      >
        Logout
      </button>
    </div>
  );
}
