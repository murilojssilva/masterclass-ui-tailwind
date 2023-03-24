import { NavLink } from "./NavLink";
import { Logo } from "./icons/Logo";

export function Sidebar() {
  return (
    <aside className="border-r border-white/10 w-80 fixed left-0 top-0 bottom-0 p-6 hidden lg:block">
      <Logo className="text-white h-4 w-auto " />
      <nav className="mt-10 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <strong className="text-zinc-100 font-medium text-sm">Guides</strong>

          <div className=" text-sm flex flex-col pl-2">
            <NavLink href="#">Introduction</NavLink>
            <NavLink href="#">Quickstart</NavLink>
            <NavLink href="#">SDKs</NavLink>
            <NavLink href="#">Authentication</NavLink>
            <NavLink href="#">Pagination</NavLink>
            <NavLink href="#">Errors</NavLink>
            <NavLink href="#">Webhooks</NavLink>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <strong className="text-zinc-100 font-medium text-sm">
            Resources
          </strong>

          <div className=" text-sm flex flex-col pl-2">
            <NavLink href="#">Contacts</NavLink>
            <NavLink href="#">Conversations</NavLink>
            <NavLink href="#">Messages</NavLink>
            <NavLink href="#">Groups</NavLink>
            <NavLink href="#">Attachments</NavLink>
          </div>
        </div>
      </nav>
    </aside>
  );
}
