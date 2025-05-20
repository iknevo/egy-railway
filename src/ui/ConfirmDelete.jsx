export default function ConfirmDelete({
  resourceName,
  onConfirm,
  disabled,
  onCloseModal,
}) {
  return (
    <div className="flex w-full flex-col gap-[1.2rem] pt-40 md:w-[40rem] md:pt-0">
      <h3 className="text-[2rem] font-medium">Delete {resourceName}</h3>
      <p className="mb-[1.2rem] font-semibold text-gray-500">
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div className="flex justify-end gap-[1.2rem] pb-5">
        <button
          className="inline-flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </button>
        <button
          className="inline-flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-200 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed"
          disabled={disabled}
          onClick={onConfirm}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
