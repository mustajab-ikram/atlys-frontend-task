interface OutputBoxProps {
  value: number;
}

const OutputBox: React.FC<OutputBoxProps> = ({ value }) => {
  return (
    <div className="flex flex-col">
      <div className="text-white bg-emerald-500 text-xl font-medium px-6 py-2 rounded-full mb-2 whitespace-nowrap">
        Final Output y
      </div>
      <div className="relative">
        <div className="w-[115px] h-[50px] border-t-2 border-emerald-500 rounded-tl-[15px] px-4 flex items-center">
          <div className="absolute left-2 top-1/2 -translate-y-1/2">
            <div className="w-3 h-3 rounded-full bg-blue-100 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            </div>
          </div>
          <span className="text-2xl font-medium ml-auto">{value}</span>
        </div>
      </div>
    </div>
  );
};

export default OutputBox;
