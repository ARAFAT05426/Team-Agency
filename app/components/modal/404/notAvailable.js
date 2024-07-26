const NotAvailable = ({ act, setAct }) => {
  return (
    act && (
      <div className="fixed top-0 left-0 bg-white w-full max-w-sm h-40 z-50 p-5">
        <h1 className="text-2xl font-semibold text-center">
          Feature not available! May available in future update{" "}
        </h1>
      </div>
    )
  );
};
export default NotAvailable;
