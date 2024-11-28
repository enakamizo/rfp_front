import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");

    useEffect(() => {
        // サーバーから日付一覧を取得
        fetch("http://127.0.0.1:8000/get_all_dates")
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched dates:", data.dates); // デバッグ用
                setDates(data.dates || []);
            })
            .catch((err) => {
                console.error("Error fetching dates:", err);
            });
    }, []);

    const handleStart = () => {
        if (selectedDate) {
            // 日付をクエリパラメータとして渡す
            router.push(`/categorySelection?date=${selectedDate}`);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-orange-100">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <h1 className="text-xl font-bold mb-4">受講後理解度テスト</h1>
                <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="mb-4 p-2 border rounded w-full"
                >
                    <option value="">日付を選択してください</option>
                    {dates.map((date, index) => (
                        <option key={index} value={date}>
                            {date}
                        </option>
                    ))}
                </select>
                <button
                    onClick={handleStart}
                    disabled={!selectedDate}
                    className="bg-yellow-500 text-white py-2 px-4 rounded w-full hover:bg-yellow-600"
                >
                    スタート
                </button>
            </div>
        </div>
    );
}

