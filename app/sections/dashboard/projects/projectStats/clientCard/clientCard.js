import React from "react";
import { toast } from "sonner";
import { FiCopy } from "react-icons/fi";

const ClientCard = ({ client }) => {
  const avatar = client?.name?.charAt(0).toUpperCase();

  // Function to copy email to clipboard
  const copyToClipboard = () => {
    if (client?.email) {
      navigator.clipboard.writeText(client.email);
      toast.success("Email copied to clipboard!");
    }
  };

  // Function to redirect to Gmail with pre-filled email
  const sendEmailViaGmail = () => {
    if (client?.email) {
      const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${client.email}`;
      window.open(gmailURL, "_blank");
    }
  };

  return (
    <div className="w-full max-w-md flex flex-col items-center justify-center border shadow rounded p-5 my-5 bg-white">
      {/* Avatar */}
      <div className="flex items-center justify-center w-28 h-28 rounded-full bg-primary text-white text-5xl font-montserrat font-semibold">
        {avatar}
      </div>

      {/* Client Details */}
      <div className="text-center">
        <p className="text-lg font-medium text-gray-700">{client?.name}</p>
        <p className="text-sm text-gray-600 flex items-center gap-2">
          {client?.email}{" "}
          <FiCopy onClick={copyToClipboard} className="cursor-pointer" />
        </p>
      </div>

      {/* Send Email via Gmail Button */}
      <button
        onClick={sendEmailViaGmail}
        className="mt-3 px-5 py-2 bg-primary text-white font-semibold rounded hover:bg-secondary transition-colors"
      >
        Send Email via Gmail
      </button>
    </div>
  );
};

export default ClientCard;
