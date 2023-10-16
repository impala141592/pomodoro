function TimerOptions({ options, selectedOption, onClick }) {
  return (
    <div className="options">
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onClick={onClick}
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default TimerOptions;
