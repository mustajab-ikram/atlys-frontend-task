import { useFunctionChain } from "./hooks/useFunctionChain";
import FunctionCard from "./components/FunctionCard";
import InputBox from "./components/InputBox";
import OutputBox from "./components/OuputBox";
const App = () => {
  const {
    functions,
    updateFunction,
    getFunctionPosition,
    getConnections,
    inputValue,
    setInputValue,
    calculateOutput,
  } = useFunctionChain();

  const connections = getConnections();
  const outputValue = calculateOutput(inputValue);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative mx-auto px-32 py-16">
        {/* Offset container for cards */}
        <div className="relative flex flex-col">
          {/* Top row with input, cards and output */}
          <div className="flex items-center relative">
            {/* Input Box positioned before first card */}
            <div className="absolute" style={{ left: "-150px" }}>
              <InputBox value={inputValue} onChange={setInputValue} />
            </div>

            {/* Function Cards */}
            <div className="relative flex-1">
              {functions.map((func) => (
                <div
                  key={func.id}
                  className="absolute"
                  style={{
                    left: getFunctionPosition(func.id).x,
                    top: getFunctionPosition(func.id).y,
                  }}
                >
                  <FunctionCard
                    data={func}
                    onChange={(equation, isValid) =>
                      updateFunction(func.id, equation, isValid)
                    }
                    isFirst={func.id === 1}
                    isLast={func.id === 3}
                    position={getFunctionPosition(func.id)}
                  />
                </div>
              ))}
            </div>

            {/* Output Box positioned after last card */}
            <div className="absolute" style={{ right: "-150px" }}>
              <OutputBox value={outputValue} />
            </div>
          </div>

          {/* Connection Lines */}
          {connections.map(({ start, end, from, to }) => (
            <div
              key={`${from}-${to}`}
              className={`connection-line ${
                Math.abs(end.y - start.y) < 5
                  ? "connection-horizontal"
                  : end.y > start.y
                  ? "connection-down"
                  : "connection-up"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
