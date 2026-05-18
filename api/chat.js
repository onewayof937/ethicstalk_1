export default async function handler(req, res) {
    // 15명이 동시에 눌러도 서버가 버틸 수 있게 1.5초 간격 두기
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const apiKey = process.env.GEMINI_API_KEY;
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.status(200).json(data);
}
