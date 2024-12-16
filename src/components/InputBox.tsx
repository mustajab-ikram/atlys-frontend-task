interface InputBoxProps {
  value: number;
  onChange: (value: number) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col">
      <div className="text-white bg-orange-500 text-xl font-medium px-6 py-2 rounded-full mb-2 whitespace-nowrap">
        Initial value of x
      </div>
      <div className="relative">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-[115px] h-[50px] border-t-2 border-orange-400 rounded-tl-[15px] px-4 text-2xl focus:outline-none"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-100 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
