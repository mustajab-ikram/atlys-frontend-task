import { useFunctionChain } from './hooks/useFunctionChain';
import FunctionCard from './components/FunctionCard';
import InputBox from './components/InputBox';
import OutputBox from './components/OuputBox';
const App = () => {
  const {
    functions,
    updateFunction,
    inputValue,
    setInputValue,
    calculateOutput,
  } = useFunctionChain();

  const outputValue = calculateOutput(inputValue);

  const firstRowFunctions = functions.filter((f) => [1, 2, 3].includes(f.id));
  const secondRowFunctions = functions.filter((f) => [4, 5].includes(f.id));

  return (
    <div
      className='min-h-screen bg-white p-4'
      style={{ height: '100vh', width: '100vw' }}
    >
      <div className='flex items-center justify-between w-full h-full'>
        <div style={{ left: '0px' }}>
          <InputBox value={inputValue} onChange={setInputValue} />
        </div>

        {/* Cards Container */}
        <div className='relative mx-auto' style={{ width: '1000px' }}>
          {/* First Row */}
          <div className='flex justify-between mb-20'>
            {firstRowFunctions.map((func) => (
              <div key={func.id}>
                <FunctionCard
                  data={func}
                  onChange={(equation, isValid) =>
                    updateFunction(func.id, equation, isValid)
                  }
                />
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className='flex justify-center gap-[200px]'>
            {secondRowFunctions.map((func) => (
              <div key={func.id}>
                <FunctionCard
                  data={func}
                  onChange={(equation, isValid) =>
                    updateFunction(func.id, equation, isValid)
                  }
                />
              </div>
            ))}
          </div>
        </div>

        {/* Output Box positioned after last card */}
        <div style={{ right: '-150px' }}>
          <OutputBox value={outputValue} />
        </div>
      </div>
    </div>
  );
};

export default App;
