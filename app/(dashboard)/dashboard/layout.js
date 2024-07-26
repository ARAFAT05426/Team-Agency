import Sidebar from "@/app/components/navigation/sidebar/sidebar";

export const metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

export default function DashboardLayout({ children }) {
  return (
    <>
      <Sidebar />
      <main className="min-h-screen mt-12 ml-0 md:ml-64">{children}</main>
    </>
  );
}
