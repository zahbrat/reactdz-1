const message = "npm create vite@latest my-react-app -- --template react";
const myObject = {
  name: "React Bits - Сайт React сніпетів",
  url: "https://www.reactbits.dev/",
};
const num1 = 1;
const num2 = 1;
const colors = ["Red", "Orange", "Yellow", "Green", "Cyan", "Blue", "Purple", "Violet"];

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-300 to-gray-500 flex items-center justify-center p-8">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row w-full max-w-6xl">
        <img
          src="https://avatars.githubusercontent.com/u/156333476?v=4"
          alt="Мій мЕм"
          className="md:w-1/2 shadow-lg rounded-xl"
        />
        <div className="md:w-1/2 p-8 space-y-4 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800">{message}</h1>
          <p className="text-lg text-gray-600">
            Ласкаво просимо до нашого сайту! 💖
          </p>
          <p className="text-2xl font-mono text-gray-700">
            1 + 1 = {num1 + num2}
          </p>
          <a
            href={myObject.url}
            target="_blank"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
          >
            {myObject.name}
          </a>

          <div className="max-w-2xl w-full mx-auto bg-gray-100 rounded-xl shadow-2xl p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 group cursor-pointer"
                >
                  <div
                    className="w-16 h-16 rounded-lg shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl"
                    style={{ background: color }}
                  ></div>
                  <span className="text-gray-700 font-semibold group-hover:text-black transition-colors">
                    {color}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

