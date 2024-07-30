"use client";
import { useQuery } from "@tanstack/react-query";
import UsersTable from "@/app/(dashboard)/dashboard/users/usersTable/usersTable";
// import DeleteModal from "@/app/components/modal/deleteModal/deleteModal";
import UserEditModal from "@/app/components/modal/userEditModal/userEditModal";
import { useState } from "react";
import axiosCommon from "@/lib/axios/axiosCommon";
import Modal404 from "@/app/components/modal/modal404/modal404";

const Users = () => {
  const {
    data: users = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/auth/api");
      return data.users;
    },
  });

  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditOpen, setEditOpen] = useState(false);
  const [isDeleteOpen, setDeleteOpen] = useState(false);

  const handleOptionSelect = (option, user) => {
    if (option === "Edit") {
      setSelectedUser(user);
      setEditOpen(true);
    }
    if (option === "Delete") {
      setSelectedUser(user);
      setDeleteOpen(true);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="mt-10 p-10 border border-gray-200 rounded bg-white shadow min-w-full overflow-x-auto space-y-3">
      <UsersTable users={users} onEdit={handleOptionSelect} onDelete={handleOptionSelect} />
      <UserEditModal
        user={selectedUser}
        isOpen={isEditOpen}
        setIsOpen={setEditOpen}
        refetch={refetch}
      />
      {/* <DeleteModal
        user={selectedUser}
        isOpen={isDeleteOpen}
        setIsOpen={setDeleteOpen}
        refetch={refetch}
        id={selectedUser?._id}
        text={"user"}
      /> */}
      <Modal404 isOpen={isDeleteOpen} setIsOpen={setDeleteOpen} />
    </div>
  );
};

export default Users;
