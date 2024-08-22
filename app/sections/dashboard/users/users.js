"use client";
import { useQuery } from "@tanstack/react-query";
import UsersTable from "@/app/(dashboard)/dashboard/users/usersTable/usersTable";
import UserEditModal from "@/app/components/modal/userEditModal/userEditModal";
import { useState } from "react";
import axiosCommon from "@/lib/axios/axiosCommon";
import DeleteModal from "@/app/components/modal/deleteModal/deleteModal";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaExclamationTriangle } from "react-icons/fa";

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

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-96">
        <AiOutlineLoading3Quarters className="animate-spin text-4xl text-primary" />
      </div>
    );
  if (isError)
    return (
      <div className="flex justify-center items-center min-h-96 text-red-600">
        <FaExclamationTriangle className="text-3xl mr-2" />
        <span>Error: {error.message}</span>
      </div>
    );

  return (
    <div className="mt-10 p-10 border border-gray-200 rounded bg-white shadow min-w-full overflow-x-auto space-y-3">
      <div>
        <h1 className="text-4xl font-teko font-semibold  mb-1">Manage Users</h1>
        <p className="text-gray-600 mb-8">
          Here you can view, edit, or delete user information. Select an option
          from the dropdown menu next to each user to proceed.
        </p>
      </div>
      <UsersTable
        users={users}
        onEdit={handleOptionSelect}
        onDelete={handleOptionSelect}
      />
      <UserEditModal
        user={selectedUser}
        isOpen={isEditOpen}
        setIsOpen={setEditOpen}
        refetch={refetch}
      />
      <DeleteModal
        user={selectedUser}
        isOpen={isDeleteOpen}
        setIsOpen={setDeleteOpen}
        refetch={refetch}
        id={selectedUser?._id}
        text={"user"}
        api={"/auth/api"}
      />
    </div>
  );
};

export default Users;
