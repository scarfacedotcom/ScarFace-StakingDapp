/* eslint-disable jsx-a11y/no-redundant-roles */
import { Link } from "react-router-dom";

export const SideNav = () => {
  return (
    <nav className=" mt-10 block">
      <ul role="list">
        <li className=" mt-6 relative"></li>
        <h2 className=" text-xs font-semibold text-zinc-900"> Routes </h2>
        <div className=" relative mt-3 pl-2">
          {/* LINE */}
          <div
            className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 "
            // style="transform: none; transform-origin: 50% 50% 0px;"
          ></div>

          {/* POINTER */}
          <div
            className="absolute left-2 h-6 w-px bg-emerald-500"
            data-projection-id="27"
            // style="top: 4px; opacity: 1; transform: none; transform-origin: 50% 50% 0px;"
          ></div>

          <ul role="list" class="border-l border-transparent">
            <li class="relative hover:bg-gray-100">
              <a
                href="/dashboard"
                class="flex justify-between items-center gap-2 py-1 pr-3 mt-4 text-sm transition pl-4 text-zinc-900"
              >
                <span class="truncate">Dashboard</span>
              </a>
            </li>
            <li class="relative hover:bg-gray-100">
              <a
                href="/pool"
                class="flex justify-between items-center gap-2 py-1 pr-3 mt-4 text-sm transition pl-4 text-zinc-900"
              >
                <span class="truncate">Stake Pool</span>
              </a>
            </li>
            <li class="relative hover:bg-gray-100">
              <a
                href="/portfolio"
                class="flex justify-between items-center gap-2 py-1 pr-3 mt-4 text-sm transition pl-4 text-zinc-900"
              >
                <span class="truncate">My Portfolio</span>
              </a>
            </li>
            <li class="relative hover:bg-gray-100">
              <a
                href="/profile"
                class="flex justify-between items-center gap-2 py-1 pr-3 mt-4 text-sm transition pl-4 text-zinc-900"
              >
                <span class="truncate">My Profile</span>
              </a>
            </li>
          </ul>
        </div>
      </ul>
    </nav>
    
  );
};
