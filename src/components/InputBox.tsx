interface InputBoxProps {
  value: number;
  onChange: (value: number) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ value, onChange }) => {
  return (
    <div className='flex flex-col'>
      <div className='text-white text-center bg-orange-500 text-xs font-medium p-1 rounded-full mb-2 whitespace-nowrap'>
        Initial value of x
      </div>
      <div className='relative flex px-2 border-2 border-orange-400 rounded-xl'>
        <input
          type='number'
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className='w-16 h-[50px] px-2 text-2xl focus:outline-none border-r-2 border-orange-400'
        />
        <div className='w-8 flex justify-center items-center'>
          <div className='w-3 h-3 rounded-full bg-blue-100 flex items-center justify-center'>
            <div className='w-1.5 h-1.5 rounded-full bg-blue-400' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
