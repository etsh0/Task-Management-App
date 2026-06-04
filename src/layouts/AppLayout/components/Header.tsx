import { useState } from "react";
import BurgerIcon from "../../../assets/icons/BurgerIcon";
import { useUser } from "../../../hooks/useUser";
import { getInitials } from "../../../utils/getInitials";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logOut } from "../../../services/userLogout";
import LogoutIcon from "../../../assets/icons/LogoutIcon";

interface HeaderProps {
  onBurgerClick: () => void;
}

export default function Header({ onBurgerClick }: HeaderProps) {
  const { user } = useUser();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
      toast.success("Logged out successfully");
    } catch (err) {
      console.log(err);
      toast.error("Logout failed");
    }
  };

  return (
    <div className="flex justify-between items-center h-full relative">
      <div
        className="flex items-center gap-4 sm:opacity-0 cursor-pointer"
        onClick={onBurgerClick}
      >
        <BurgerIcon />
        <span className="text-[20px] font-bold uppercase leading-7 tracking-[-0.5px] text-slate-one">
          Taskly
        </span>
      </div>
      <div className="flex items-center gap-3 relative">
        <div className="flex-col pl-4 border-l border-border hidden sm:flex">
          <span className="text-slate-one text-body-md leading-5 font-bold capitalize">
            {user?.name}
          </span>
          <span className="text-primary text-[10px] uppercase font-bold">
            {user?.job_title}
          </span>
        </div>
        <div
          className="w-10 h-10 rounded-lg text-white bg-primary-container flex items-center justify-center cursor-pointer relative"
          onClick={() => setOpen(!open)}
        >
          <span>{getInitials(user?.name)}</span>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 top-12 w-32 bg-white shadow-md rounded-md overflow-hidden z-50">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 text-body-md font-medium cursor-pointer flex gap-3 items-center"
              >
                Logout
                <LogoutIcon />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}