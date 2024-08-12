import Sidebar from "@/app/components/navigation/sidebar/sidebar";
import QueryProvider from "@/lib/queryProvider/queryProvider";

export const metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};
export default function DashboardLayout({ children }) {
  return (
    <>
      <QueryProvider>
        <Sidebar />
        <main className="min-h-screen ml-0 lg:ml-64 mt-20 mr-0 lg:mr-5 px-1">
          {children}
        </main>
      </QueryProvider>
    </>
  );
}
