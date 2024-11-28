import { useRouter } from "next/router";

export default function CategorySelection() {
    const router = useRouter();
    const { date, score, incorrect, correct } = router.query;
    const incorrectQuestions = incorrect ? JSON.parse(incorrect) : [];
    const correctQuestions = correct ? JSON.parse(correct) : [];

    const handleCategorySelect = (category) => {
        // カテゴリとクエリ全体を次の画面に渡す
        router.push({
            pathname: "/questionPage",
            query: { category: category, date: date, score: score, incorrect: incorrect, correct: correct },
        });
    };

    const handleQuestionClick = (questionNumber) => {
        // 問題番号やクエリ情報を次の画面に渡す
        const query = {
            question: questionNumber,
            date,
            score,
            incorrect: JSON.stringify(incorrectQuestions),
            correct: JSON.stringify(correctQuestions),
        };
        router.push({ pathname: "/questionPage", query });
    };

    const handleReset = () => {
        router.push(`/categorySelection?date=${date}&score=0&incorrect=[]&correct=[]`);
    };

    const handleBackToHome = () => {
        router.push("/");
    };

    const getButtonColor = (questionNumber) => {
        if (correctQuestions.includes(questionNumber)) {
            return "bg-green-500 text-white hover:bg-green-600"; // 正解
        }
        if (incorrectQuestions.includes(questionNumber)) {
            return "bg-red-500 text-white hover:bg-red-600"; // 不正解
        }
        return "bg-blue-500 text-white hover:bg-blue-600"; // 未回答
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-orange-100">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <h1 className="text-xl font-bold mb-4">{date} - 受講後理解度テスト</h1>
                {score !== undefined && (
                    <div className="mb-4 p-4 bg-green-100 text-green-800 rounded text-center">
                        あなたのスコア: {score}/5 点
                    </div>
                )}
                <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((questionNumber) => (
                        <button
                            key={questionNumber}
                            onClick={() => handleQuestionClick(questionNumber)}
                            className={`w-full py-2 px-4 border rounded ${getButtonColor(
                                questionNumber
                            )}`}
                        >
                            問{questionNumber}
                        </button>
                    ))}
                </div>
                <div className="mt-4">
                    <button
                        onClick={handleReset}
                        className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 mb-2"
                    >
                        リセット
                    </button>
                    <button
                        onClick={handleBackToHome}
                        className="w-full py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                        最初の画面に戻る
                    </button>
                </div>
            </div>
        </div>
    );
}

