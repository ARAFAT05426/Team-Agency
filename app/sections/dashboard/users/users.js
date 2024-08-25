"use client";
import { useQuery } from "@tanstack/react-query";
import UserEditModal from "@/app/components/modal/userEditModal/userEditModal";
import { useState } from "react";
import axiosCommon from "@/lib/axios/axiosCommon";
import DeleteModal from "@/app/components/modal/deleteModal/deleteModal";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaExclamationTriangle } from "react-icons/fa";
import ManageUsers from "./manageUsers/manageUsers";

const Users = () => {
  const [page, setPage] = useState(1);
  const [selectedRole, setSelectedRole] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const limit = 8;

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["users", page, selectedRole, searchQuery],
    queryFn: async () => {
      const { data } = await axiosCommon.get(
        `/auth/api?page=${page}&limit=${limit}&role=${selectedRole}&search=${searchQuery}`
      );
      return data;
    },
  });

  const totalPages = data?.pagination?.totalPages || 1;

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

  const handleRoleFilterChange = (role) => {
    setSelectedRole(role);
    setPage(1);
  };

  const handleReset = () => {
    setSearchQuery("");
    setSelectedRole("");
    setPage(1);
    refetch();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <AiOutlineLoading3Quarters className="animate-spin text-4xl text-primary" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-96 text-red-600">
        <FaExclamationTriangle className="text-3xl mr-2" />
        <span>Error: {error.message}</span>
      </div>
    );
  }

  return (
    <>
      <ManageUsers
        currentPage={page}
        users={data?.users}
        onReset={handleReset}
        onPageChange={setPage}
        totalPages={totalPages}
        searchQuery={searchQuery}
        selectedRole={selectedRole}
        setSearchQuery={setSearchQuery}
        handleOptionSelect={handleOptionSelect}
        onRoleFilterChange={handleRoleFilterChange}
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
        id={selectedUser?.email}
        text={"user"}
        api={"/auth/api"}
      />
    </>
  );
};

export default Users;
