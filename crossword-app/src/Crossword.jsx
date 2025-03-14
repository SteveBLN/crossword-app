import React, { useState } from 'react';

const questions = [
  { clue: 'Bedeutung der Farbe Schwarz in der Verfügbarkeit?', answer: 'DSLANBIETER' },
  { clue: 'Vorteil bei Telekom mit DSL und Mobilfunk?', answer: 'MAGENTAEINS' },
  { clue: 'Name der Check24 Wissensdatenbank?', answer: 'CONFLUENCE' },
  { clue: 'Wo werden Tarifbestimmungen zusammengefasst?', answer: 'VERTRAGSZUSAMMENFASSUNG' },
  { clue: 'Ungeklärte Aufträge werden markiert als?', answer: 'NACHARBEIT' },
  { clue: 'Welcher Button zum Umbuchen?', answer: 'UMBUCHEN' },
  { clue: 'Verfügbarkeit: ORANGE bedeutet?', answer: 'KABELANBIETER' },
  { clue: 'Weiterer Vorteil des Anbieters?', answer: 'KOMBIRABATT' },
  { clue: 'Name unseres Projekts?', answer: 'HIGHSPEED' },
];

const Crossword = () => {
  const [inputs, setInputs] = useState(Array(questions.length).fill(''));

  const handleInput = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value.toUpperCase();
    setInputs(newInputs);
  };

  const checkAnswers = () => {
    let score = inputs.filter((input, index) => input === questions[index].answer).length;
    alert(`Du hast ${score} von ${questions.length} richtig.`);
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Team Kreuzworträtsel Quiz</h1>
      {questions.map((q, index) => (
        <div key={index} className="mb-4 p-4 bg-gray-100 rounded-xl shadow-md">
          <p className="font-semibold">{index + 1}. {q.clue}</p>
          <input
            type="text"
            value={inputs[index] || ''}
            onChange={(e) => handleInput(index, e.target.value)}
            className="w-full p-2 border rounded text-center uppercase tracking-wide"
            placeholder="Antwort eingeben"
          />
        </div>
      ))}
      <div className="text-center mt-6">
        <button
          onClick={checkAnswers}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition ease-in-out"
        >
          Antworten prüfen
        </button>
      </div>
    </div>
  );
};

export default Crossword;