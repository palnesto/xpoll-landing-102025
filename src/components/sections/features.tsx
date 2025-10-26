export const FeaturesSection = () => {
  return (
    <div className="flex items-center justify-center h-full bg-green-500 font-plusjakarta font-semibold">
      <div className="space-y-4">
        <p className="text-semibold text-fluid-xs">This is fluid XS text</p>
        <p className="text-semibold text-fluid-sm">This is fluid SM text</p>
        <p className="text-semibold text-fluid-base">This is fluid BASE text</p>
        <p className="text-semibold text-fluid-lg">This is fluid LG text</p>
        <p className="text-semibold text-fluid-xl">This is fluid XL text</p>
        <p className="text-semibold text-fluid-2xl">
          This is fluid 2XL heading
        </p>
        <p className="text-semibold text-fluid-3xl">
          This is fluid 3XL heading
        </p>
        {/* <p className="font-manrope text-semibold text-fluid-4xl">
          This is fluid 4XL heading
        </p>
        <p className="text-semibold text-fluid-5xl">
          This is fluid 5XL heading
        </p>
        <p className="text-semibold text-fluid-6xl">
          This is fluid 6XL heading
        </p> */}
      </div>
    </div>
  );
};
