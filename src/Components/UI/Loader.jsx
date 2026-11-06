export const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="
          w-12.5
          aspect-square
          grid
          rounded-full
          border-4
          border-transparent
          border-r-[#25b09b]
          animate-spin
        "
      >
        <div
          className="
            col-start-1
            row-start-1
            m-0.5
            rounded-full
            border-4
            border-transparent
            border-r-[#25b09b]
            animate-spin
          "
        />

        <div
          className="
            col-start-1
            row-start-1
            m-2
            rounded-full
            border-4
            border-transparent
            border-r-[#25b09b]
            animate-spin
          "
        />
      </div>
    </div>
  );
};
