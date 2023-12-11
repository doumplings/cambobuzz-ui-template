interface LogOutModalProps {
  isVisible: boolean;
  onCancelClick: () => void;
  onConfirmClick: () => void;
}

export const LogOutModal = ({
  isVisible,
  onCancelClick,
  onConfirmClick,
}: LogOutModalProps) => {
  return (
    <>
      {isVisible ? (
        <div className="absolute w-full h-screen top-0 right-0 bg-slate-600/50 z-20 grid place-items-center">
          <div className="bg-slate-100 w-1/2 p-4 rounded-xl">
            <h4 className=" text-md font-bold border-b border-slate-400 pb-2">
              Log Out
            </h4>
            <p className="pt-2">Are you sure you want to log out?</p>
            <div className="w-full grid grid-cols-2 mt-4 gap-4">
              <button
                className="bg-slate-300 rounded-md"
                onClick={onCancelClick}
              >
                Cancel
              </button>
              <button
                className=" bg-red-400 rounded-md"
                onClick={onConfirmClick}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
