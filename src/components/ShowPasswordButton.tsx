interface Propo {
  onCheckboxClick: () => void;
}

export const ShowPasswordButton = ({ onCheckboxClick }: Propo) => {
  return (
    <>
      <span className="grid grid-cols-2 w-[11rem] place-items-center">
        <label className="text-xs">Show Password</label>
        <input
          className="-translate-x-8"
          type="checkbox"
          onClick={onCheckboxClick}
        />
      </span>
    </>
  );
};
