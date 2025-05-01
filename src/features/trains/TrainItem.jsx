export default function TrainItem({ train }) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold">train</p>
          <p className="text-sm text-gray-600">
            {train.trainFrom} → {train.trainTo}
          </p>
        </div>
        <div className="text-right">
          <p className="font-bold">
            {train.go} : {train.arrive}
          </p>
          <p className="text-sm text-gray-600">{train.time} Hours</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="font-bold text-cyan-600">price</p>
        <button
          // onClick={handleSelect}
          className="rounded bg-cyan-600 px-4 py-1 text-white hover:bg-cyan-700"
        >
          Select
        </button>
      </div>
    </div>
  );
}
