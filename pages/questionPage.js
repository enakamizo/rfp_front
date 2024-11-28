import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function QuestionPage() {
    const router = useRouter();
    const { date } = router.query;

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [score, setScore] = useState(0);
    const [correctQuestions, setCorrectQuestions] = useState([]);
    const [incorrectQuestions, setIncorrectQuestions] = useState([]);

    useEffect(() => {
        if (date) {
            setIsLoading(true);
            fetch(`http://127.0.0.1:8000/get_questions_by_date/${date}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.error) {
                        console.error("Error fetching questions:", data.error);
                        setQuestions([]);
                    } else {
                        setQuestions(data);
                    }
                })
                .catch((err) => console.error("Error fetching questions:", err))
                .finally(() => setIsLoading(false));
        }
    }, [date]);

    if (isLoading) {
        return <div>読み込み中...</div>;
    }

    if (!questions.length) {
        return <div>選択した日付に対応する質問が見つかりません。</div>;
    }

    const questionData = questions[currentQuestionIndex];

    const handleOptionClick = (index) => {
        setSelectedOption(index);
        setShowCorrectAnswer(true);

        // 音声ファイルの準備
        const correctAudio = new Audio("/audio/OK.mp3");
        const incorrectAudio = new Audio("/audio/NG.mp3");

        if (index === questionData.correct_index) {
            // 正解時の音声再生
            correctAudio.play();

            // 初回正解時のみスコア加点
            if (!correctQuestions.includes(questionData.id)) {
                setScore((prevScore) => prevScore + 1);
                setCorrectQuestions((prev) => [...prev, questionData.id]);
            }
        } else {
            // 不正解時の音声再生
            incorrectAudio.play();

            // 不正解質問リストへの追加
            if (!incorrectQuestions.includes(questionData.id)) {
                setIncorrectQuestions((prev) => [...prev, questionData.id]);
            }
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
            setShowCorrectAnswer(false);
        } else {
            router.push(
                `/resultPage?correctCount=${score}&totalQuestions=${questions.length}`
            );
        }
    };

    // ホームに戻る処理
    const handleGoHome = () => {
        router.push(`/`); // ホーム画面にリダイレクト
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-orange-100">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h1 className="text-xl font-bold mb-4">{questionData.question_text}</h1>
                <div className="space-y-3">
                    {questionData.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleOptionClick(index)}
                            className={`w-full py-2 px-4 border rounded ${
                                showCorrectAnswer
                                    ? index === questionData.correct_index
                                        ? "bg-green-500 text-white"
                                        : index === selectedOption
                                        ? "bg-red-500 text-white"
                                        : "bg-gray-100"
                                    : "bg-gray-100 hover:bg-blue-500 hover:text-white"
                            }`}
                            disabled={showCorrectAnswer}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                {showCorrectAnswer && (
                    <div className="mt-4 p-4 bg-gray-100 text-gray-800 rounded">
                        <p>{questionData.explanation}</p>
                    </div>
                )}
                <button
                    onClick={handleNext}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600"
                >
                    次へ
                </button>
                <button
                    onClick={handleGoHome}
                    className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
                >
                    ホームに戻る
                </button>
            </div>
        </div>
    );
}
