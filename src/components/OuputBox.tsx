interface OutputBoxProps {
  value: number;
}

const OutputBox: React.FC<OutputBoxProps> = ({ value }) => {
  return (
    <div className='flex flex-col'>
      <div className='text-white text-center bg-emerald-500 text-xs font-medium p-1 rounded-full mb-2 whitespace-nowrap'>
        Final Output y
      </div>
      <div className='relative items-center justify-center flex px-2 border-2 border-emerald-500 rounded-xl'>
        <div className='w-8 flex justify-center items-center'>
          <div className='w-3 h-3 rounded-full bg-blue-100 flex items-center justify-center'>
            <div className='w-1.5 h-1.5 rounded-full bg-blue-400' />
          </div>
        </div>
        <span className='p-2 w-16 flex justify-center items-center text-center font-medium text-xl border-l-2 border-emerald-500'>
          {value}
        </span>
      </div>
    </div>
  );
};

export default OutputBox;
