import { useFunctionChain } from './hooks/useFunctionChain';
import FunctionCard from './components/FunctionCard';
import InputBox from './components/InputBox';
import OutputBox from './components/OuputBox';
const App = () => {
  const {
    functions,
    updateFunction,
    getFunctionPosition,
    inputValue,
    setInputValue,
    calculateOutput,
  } = useFunctionChain();

  const outputValue = calculateOutput(inputValue);

  return (
    <div
      className='min-h-screen bg-white p-4'
      style={{ height: '100vh', width: '100vw' }}
    >
      <div className='flex items-center justify-between w-full h-full'>
        <div className='' style={{ left: '0px' }}>
          <InputBox value={inputValue} onChange={setInputValue} />
        </div>

        {/* Function Cards */}
        <div className='flex gap-10 flex-wrap items-center justify-center'>
          {functions.map((func) => (
            <div key={func.id}>
              <FunctionCard
                data={func}
                onChange={(equation, isValid) =>
                  updateFunction(func.id, equation, isValid)
                }
                position={getFunctionPosition(func.id)}
              />
            </div>
          ))}
        </div>

        {/* Output Box positioned after last card */}
        <div className='' style={{ right: '-150px' }}>
          <OutputBox value={outputValue} />
        </div>
      </div>
    </div>
  );
};

export default App;
